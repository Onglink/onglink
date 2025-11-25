"use client";
import React, { useState, useEffect } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { jwtDecode } from 'jwt-decode'; 
import AutoLogout from "../components/AutoLogout";
import PublicarForm from "../components/PublicarForm";
import FeedPost from "../components/FeedPost";

// Usando o serviço que o Menu Lateral usa
import publicacaoService from "@/app/services/publicacaoService";
import usuarioService from "@/app/services/usuarioService";

interface Post {
  _id: string;
  titulo: string;
  descricao: string;
  imagem?: string[];
  criadoPor?: {
    _id: string;
    nome: string;
    email: string;
    // O front fica preparado para receber isso, vindo ou não do back
    assignedTo?: {
        _id: string;
        nomeFantasia?: string;
        logo?: string;
    } | string; // Pode vir string ou objeto
  };
  createdAt?: string;
}

interface JwtPayload {
    id: string;
    email: string;
    role: string; 
    iat: number;
    exp: number;
}

const FeedPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [userRole, setUserRole] = useState<string>(''); 
  const [userId, setUserId] = useState<string>(''); 
  
  // Estado para guardar o Avatar e Nome da ONG do usuário logado
  const [currentUserAvatar, setCurrentUserAvatar] = useState<string | undefined>(undefined);
  // Guardamos também o nome fantasia para usar na "UI Otimista" ao postar
  const [currentOngName, setCurrentOngName] = useState<string | undefined>(undefined);
  
  const ROLES_PUBLICADORES = ['admin', 'ong'];

  // --- LÓGICA IMPORTADA DO MENU LATERAL ---
  const fetchUserData = async (id: string) => {
    try {
        // Busca exatamente como o Menu faz
        const data = await usuarioService.buscarPorId(id);
        const usuario = data.usuario || data; 

        // Lógica do Menu: Se for ONG e tiver assignedTo
        if (usuario.status === "ong" && usuario.assignedTo) {
             // Se assignedTo já veio populado (que é o caso do Menu)
             if (typeof usuario.assignedTo === 'object') {
                 if (usuario.assignedTo.logo) setCurrentUserAvatar(usuario.assignedTo.logo);
                 if (usuario.assignedTo.nomeFantasia) setCurrentOngName(usuario.assignedTo.nomeFantasia);
                 return;
             }
        }

        // Se não for ONG ou não tiver logo, usa avatar do user (mesmo fallback do Menu)
        if (usuario.avatar) {
            setCurrentUserAvatar(usuario.avatar);
        }

    } catch (err) {
        console.error("Erro ao carregar perfil:", err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
        try {
            const decoded = jwtDecode<JwtPayload>(token);
            if (decoded.exp * 1000 > Date.now()) {
                setUserRole(decoded.role);
                setUserId(decoded.id);
                fetchUserData(decoded.id);
            } else {
                localStorage.removeItem('authToken');
            }
        } catch (e) {
            console.error(e);
        }
      }
    carregarPosts();
  }, []);

  const carregarPosts = async () => {
    setIsLoading(true);
    try {
      const data = await publicacaoService.listarPublicacao();
      if (Array.isArray(data)) setPosts(data);
      else setPosts([]);
    } catch (err) {
      setError("Não foi possível carregar as publicações.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreatePost = async (dadosForm: { title: string; message: string; image?: File | null }) => {
    try {
        if (!userId) return alert("Faça login novamente.");

        const formData = new FormData();
        formData.append('titulo', dadosForm.title);
        formData.append('descricao', dadosForm.message);
        formData.append('criadoPor', userId);
        if (dadosForm.image) formData.append('image', dadosForm.image);

        const novaPublicacao = await publicacaoService.cadastrarPublicacao(formData);
        
        // --- TRUQUE VISUAL (Optimistic UI) ---
        // Como não mexemos no backend para ele devolver o populate na hora,
        // nós "montamos" o objeto visualmente com os dados que já temos do Menu Lateral (currentOngName e Avatar)
        if (currentUserAvatar && novaPublicacao.criadoPor) {
             // Forçamos a estrutura visual para aparecer bonito na hora
             novaPublicacao.criadoPor.assignedTo = { 
                 logo: currentUserAvatar, 
                 nomeFantasia: currentOngName || 'Minha ONG', 
                 _id: 'temp' 
             };
        }

        setPosts((prev) => [novaPublicacao, ...prev]);

    } catch (err: any) {
        console.error(err);
        alert(`Falha ao publicar.`);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!window.confirm("Excluir publicação?")) return;
    try {
        await publicacaoService.deletarPublicacao(id);
        setPosts((prev) => prev.filter(post => post._id !== id));
    } catch (err) {
        alert("Erro ao excluir.");
    }
  };

  const canPublish = ROLES_PUBLICADORES.includes(userRole);

  return (
    <div className="container-fluid col-12 p-0" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <AutoLogout />
      {error && <Alert variant="danger" onClose={() => setError(null)} dismissible className="mt-3">{error}</Alert>}

      {/* {canPublish && (
        <div className="mb-4 mt-3">
            <PublicarForm 
                onPublish={handleCreatePost} 
                userAvatar={currentUserAvatar} 
            />
        </div>
      )} */}

      <div className="mt-4">
        {isLoading ? (
          <div className="text-center p-5"><Spinner animation="border" variant="success" /></div>
        ) : posts.length === 0 ? (
          <div className="text-center p-5 bg-white border rounded">Nenhuma publicação.</div>
        ) : (
          <div className="vstack gap-4">
            {posts.map((post) => (
               <FeedPost 
                 key={post._id} 
                 post={post} 
                 currentUserId={userId} 
                 onDelete={handleDeletePost} 
               />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedPage;