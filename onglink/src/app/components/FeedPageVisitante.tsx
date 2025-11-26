"use client";
import React, { useState, useEffect } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useRouter } from "next/navigation"; // Necessário para redirecionar
import { jwtDecode } from "jwt-decode";       // Necessário para validar o token
import FeedPost from "../components/FeedPost";
import publicacaoService from "@/app/services/publicacaoService";

interface Post {
  _id: string;
  titulo: string;
  descricao: string;
  imagem?: string[];
  criadoPor?: {
    _id: string;
    nome: string;
    email: string;
    assignedTo?: {
        _id: string;
        nomeFantasia?: string;
        logo?: string;
    } | string;
  };
  createdAt?: string;
}

const FeedVisitantePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const router = useRouter();

  useEffect(() => {
    const verificarAcesso = () => {
        const token = localStorage.getItem('authToken');

        // SE TIVER TOKEN, VERIFICA SE É VÁLIDO
        if (token) {
            try {
                const decoded = jwtDecode<{ exp: number }>(token);
                // Se o token ainda não expirou
                if (decoded.exp * 1000 > Date.now()) {
                    // Usuário está logado: Manda ele para o Feed real
                    router.replace('/feed');
                    return; 
                }
            } catch (e) {
                // Token inválido, limpa e deixa seguir como visitante
                localStorage.removeItem('authToken');
            }
        }
        carregarPosts();
    };

    verificarAcesso();
  }, [router]);

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

  return (
    <div className="container-fluid col-12 p-0" style={{ maxWidth: '800px', margin: '0 auto' }}>
      
      <div className="d-flex justify-content-center mt-4 mb-3 px-3">
          <h4>Bem-vindo, Visitante! Acompanhe abaixo as publicações de nossos parceiros</h4>
      </div>

      {error && <Alert variant="danger" onClose={() => setError(null)} dismissible>{error}</Alert>}

      <div className="mt-4">
        {isLoading ? (
          <div className="text-center p-5"><Spinner animation="border" variant="success" /></div>
        ) : posts.length === 0 ? (
          <div className="text-center p-5 bg-white border rounded">Nenhuma publicação encontrada.</div>
        ) : (
          <div className="vstack gap-4">
            {posts.map((post) => (
               <FeedPost 
                 key={post._id} 
                 post={post} 
                 currentUserId={null as any} 
                 onDelete={undefined} 
               />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedVisitantePage;