// // components/MenuLat.jsx
// import Image from "next/image";
// import MuxnLogo1 from "@/app/img/MUXN_logo1.png";
// import logo_instagram from "@/app/img/icons/instagram_6422200.png";
// import logo_twitter from "@/app/img/icons/twitter_5968830.png";
// import logo_facebook from "@/app/img/icons/social_12942738.png";
// import "@/app/CSS/menu_lat.css";

// export default function MenuLat() {
//   return (
//     <div className="menu-lat">
//       <div className="card overflow-hidden">
//         <div className="card-body pt-0 mt-3 text-center">
//           <div className="avatar avatar-lg mt-n5 mb-3">
//             <a href="/perfil">
//               <Image
//                 className="avatar-img rounded-circle border d-inline"
//                 src={MuxnLogo1}
//                 alt="logo_muxn"
//                 width={100}
//                 height={100}
//               />
//             </a>
//           </div>
//           <h5 className="mb-0">MUXN</h5>
//           <small>Tecnologia</small>
//           <p className="mt-3">Por um planeta melhor através da tecnologia.</p>
//           <div className="hstack gap-2 gap-xl-3 justify-content-center">
//             <div>
//               <h6 className="mb-0">3</h6>
//               <small>Projetos Apoiados</small>
//             </div>
//           </div>
//           <div>
//             <small>Contato +55 (15) 3333-3333</small>
//           </div>
//           <div>
//             <small>contato@muxn.com.br</small>
//           </div>
//           <ul className="list-unstyled d-flex justify-content-center mt-2">
//             <li>
//               <a className="link-body-emphasis" href="https://x.com/?lang=pt-br">
//                 <Image src={logo_twitter} alt="Twitter" width={24} height={24} />
//               </a>
//             </li>
//             <li className="ms-3">
//               <a className="link-body-emphasis" href="https://www.instagram.com/">
//                 <Image src={logo_instagram} alt="Instagram" width={24} height={24} />
//               </a>
//             </li>
//             <li className="ms-3">
//               <a className="link-body-emphasis" href="https://www.facebook.com/">
//                 <Image src={logo_facebook} alt="Facebook" width={24} height={24} />
//               </a>
//             </li>
//           </ul>
//           <hr />
//         </div>
//       </div>
//     </div>
//   );
// }

// novo menu lateral integrado ao backend:
// "use client"; // 1. Convertido para Client Component

// import Image from "next/image";
// import Link from "next/link"; // Importe o Link para o botão
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation"; // <-- 1. IMPORTAR O ROUTER
// import usuarioService from "@/app/services/usuarioService"; // <- Verifique este caminho

// // Imagens estáticas
// // ... (imports de imagem existentes) ...
// import MuxnLogo1 from "@/app/img/MUXN_logo1.png"; // Usado como fallback
// import logo_instagram from "@/app/img/icons/instagram_6422200.png";
// // import logo_twitter from "@/app/img/icons/twitter_5968830.png"; // Twitter não está no seu model
// import logo_facebook from "@/app/img/icons/social_12942738.png";
// import "@/app/CSS/menu_lat.css";


// // --- DEFINIÇÃO DE TIPOS ---
// // ... (tipos RedeSocial, Ong, Usuario existentes) ...
// // 1. Tipo para a Rede Social (baseado no sub-schema)
// type RedeSocial = {

//   instagram?: string;
//   facebook?: string;
//   site?: string;
// };

// // 2. Tipo para a ONG (baseado no ongSchema)
// type Ong = {

//   _id: string;
//   nomeFantasia: string;
//   logo: string;

//   causaSocial: string;
//   descricao: string;
//   telefone: string;

//   email: string;
//   redeSocial: RedeSocial;
//   projetosApoiados?: number; // Este não estava no seu model, deixei opcional
// };

// // 3. Tipo para o Usuário (baseado no userSchema)
// type Usuario = {

//   _id: string;
//   nome: string;
//   avatar?: string; // (Mantido) Avatar do usuário (não da ong)
//   status: 'user' | 'admin' | 'ong';
//   assignedTo: Ong | null; // O campo "populado"
// };


// // (Opcional) Um componente de "Carregando" para uma melhor UX
// const MenuLoading = () => (

//   <div className="menu-lat">
//     <div className="card overflow-hidden">

//       <div className="card-body pt-0 mt-3 text-center">
//         <div className="spinner-border text-primary mt-5 mb-3" role="status">

//           <span className="visually-hidden">Carregando...</span>
//         </div>
//         <h5 className="mb-0">Carregando Perfil...</h5>
//         <hr />

//       </div>
//     </div>
//   </div>
// );

// export default function MenuLat() {

//   // 2. Criando estados para os dados e carregamento (DENTRO DO COMPONENTE)
//   const [loading, setLoading] = useState(true);
//   const [usuario, setUsuario] = useState<Usuario | null>(null); // <-- CORREÇÃO: Tipo aplicado
//   const router = useRouter(); // <-- 2. INICIALIZAR O ROUTER

//   // 3. Buscando os dados quando o componente é montado

//   useEffect(() => {
//     const carregarDadosUsuario = async () => {
      
//       try {

//         // [SUPOSIÇÃO 1] Pegando o ID do localStorage
//         const userId = localStorage.getItem('userId');

//         if (!userId) {

//           console.warn("Nenhum usuário logado, redirecionando para /login.");
//           router.push('/login'); // <-- 3. REDIRECIONAR SE NÃO HOUVER ID
//           // setLoading(false); // Não é mais necessário, pois vamos redirecionar
//           return;
//         }

//         // [SUPOSIÇÃO 2] Buscando dados do usuário/ong

//         const data = await usuarioService.buscarPorId(userId);
//         setUsuario(data);
//         console.log("DADOS DO USUÁRIO RECEBIDOS PELA API:", data);
        
//       } catch (error) {

//         console.error("Erro ao carregar dados do menu lateral:", error);
//       } finally {
//         setLoading(false);
//       }
      
//     };

//     carregarDadosUsuario();
//   }, [router]); // <-- 4. ADICIONAR ROUTER ÀS DEPENDÊNCIAS DO EFFECT

//   // --- Renderização Condicional ---

//   if (loading) {

//     return <MenuLoading />;
//   }

//   if (!usuario) {

//     // Se não achou usuário ou não está logado, não renderiza nada
//     // (O redirecionamento já foi disparado no useEffect)
//     return <MenuLoading />; // Mostra o loading enquanto o redirecionamento acontece
//   }

//   // --- CENÁRIO 1: Status "user" (Cadastro incompleto) ---

//   if (usuario.status === 'user') {
//     return (
//       <div className="menu-lat">

//         <div className="card overflow-hidden">
//           <div className="card-body pt-0 mt-3 text-center">
//             <div className="avatar avatar-lg mt-n5 mb-3">

//               <a href="/perfil">
//                 <Image

//                   className="avatar-img rounded-circle border d-inline"
//                   src={usuario.avatar || MuxnLogo1} // Avatar do usuário ou fallback
//                   alt="Avatar do usuário"

//                   width={100}
//                   height={100}
//                 />
//               </a>
//             </div>
//             <h5 className="mb-0">{usuario.nome || 'Usuário'}</h5>
//             <p className="mt-3">Complete seu perfil para cadastrar sua ONG!</p>
//             <Link href="/cadastroCompleto" className="btn btn-primary w-100">
//               Completar Cadastro
//             </Link>
//             <hr />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // --- CENÁRIO 2: Status "Ong" (Cadastro completo) ---
//   if (usuario.status === 'ong' && usuario.assignedTo) { // 'ong' minúsculo, como no model

//     const ong = usuario.assignedTo; // Use o nome correto do campo!

//     return (

//       <div className="menu-lat">
//         <div className="card overflow-hidden">
//           <div className="card-body pt-0 mt-3 text-center">
//             <div className="avatar avatar-lg mt-n5 mb-3">
//               <a href="/perfil">
//                 <Image
//                   className="avatar-img rounded-circle border d-inline"
//                   src={ong.logo || MuxnLogo1} // <-- CORRIGIDO (era ong.avatarUrl)
//                   alt={`Logo da ${ong.nomeFantasia}`} // <-- CORRIGIDO (era ong.nome)

//                   width={100}
//                   height={100}
//                 />
//               </a>
//             </div>
//             <h5 className="mb-0">{ong.nomeFantasia}</h5> {/* <-- CORRIGIDO (era ong.nome) */}
//             <small>{ong.causaSocial || 'Organização'}</small> {/* <-- CORRIGIDO (era ong.segmento) */}
//             <p className="mt-3">{ong.descricao || 'Por um planeta melhor.'}</p> {/* <-- CORRIGIDO (era ong.descricaoCurta) */}
            
//             <div className="hstack gap-2 gap-xl-3 justify-content-center">

//               <div>
//                 <h6 className="mb-0">{ong.projetosApoiados || 0}</h6>
//                 <small>Projetos Apoiados</small>
//               </div>
//             </div>
//             <div>
//               <small>Contato {ong.telefone}</small> {/* <-- OK */}
//             </div>
//             <div>
//               <small>{ong.email}</small> {/* <-- OK */}
//             </div>

//             {/* Redes Sociais Dinâmicas (Corrigidas) */}
//             <ul className="list-unstyled d-flex justify-content-center mt-2">
             
//               {/* CORREÇÃO: Acessando o sub-schema 'redeSocial' */}
//               {ong.redeSocial.instagram && (
//                 <li className="ms-3">
//                   <a className="link-body-emphasis" href={ong.redeSocial.instagram}>
//                     <Image src={logo_instagram} alt="Instagram" width={24} height={24} />
//                   </a>
//                 </li>
//               )}
//               {ong.redeSocial.facebook && (
//                 <li className="ms-3">
//                   <a className="link-body-emphasis" href={ong.redeSocial.facebook}>
//                     <Image src={logo_facebook} alt="Facebook" width={24} height={24} />
//                   </a>
//                 </li>
//               )}
//             </ul>
//             <hr />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // --- CENÁRIO 3: Status "admin" ---
//   if (usuario.status === 'admin') {
//     return (
//       <div className="menu-lat">
//         <div className="card overflow-hidden">
//           <div className="card-body pt-0 mt-3 text-center">
//             <div className="avatar avatar-lg mt-n5 mb-3">
//               <a href="/perfil">
//                 <Image
//                   className="avatar-img rounded-circle border d-inline"
//                   src={usuario.avatar || MuxnLogo1} // Avatar do admin
//                   alt="Avatar do Administrador"
//                   width={100}
//                   height={100}
//                 />
//               </a>
//             </div>
//             <h5 className="mb-0">{usuario.nome || 'Admin'}</h5>
//             {/* Um "badge" para identificar o admin */}
//             <small className="badge bg-danger bg-opacity-10 text-danger">
//               Administrador
//             </small>
            
//             <p className="mt-3">Acesso total ao sistema.</p>
            
//             {/* Links específicos do Admin (Ajuste os 'href' para suas rotas) */}
//             <div className="d-grid gap-2">
//               <Link href="/admin/dashboard" className="btn btn-outline-danger">
//                 Painel de Controle
//               </Link>
//               <Link href="/admin/aprovar-ongs" className="btn btn-outline-secondary">
//                 Aprovar ONGs
//               </Link>
//             </div>
            
//             <hr />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Se o status não for nenhum dos 3 (ou algo der errado)
 
//   return null;
// };

//////////////////////////////
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import usuarioService from "@/app/services/usuarioService"; 

// Imagens (Seus caminhos originais)
import MuxnLogo1 from "@/app/img/MUXN_logo1.png";
import logo_instagram from "@/app/img/icons/instagram_6422200.png";
import logo_facebook from "@/app/img/icons/social_12942738.png";
import "@/app/CSS/menu_lat.css";

// --- TIPOS ---
type RedeSocial = {
  instagram?: string;
  facebook?: string;
  site?: string;
};

type Ong = {
  _id: string;
  nomeFantasia: string;
  logo: string;
  causaSocial: string;
  descricao: string;
  telefone: string;
  email: string;
  redeSocial: RedeSocial;
  projetosApoiados?: number;
};

type Usuario = {
  _id: string;
  nome: string;
  avatar?: string;
  status: 'user' | 'admin' | 'ong';
  assignedTo: Ong | null;
};

// --- COMPONENTE DE LOADING ---
const MenuLoading = () => (
  <div className="menu-lat">
    <div className="card overflow-hidden">
      <div className="card-body pt-0 mt-3 text-center">
        <div className="spinner-border text-primary mt-5 mb-3" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
        <h5 className="mb-0">Carregando Perfil...</h5>
        <hr />
      </div>
    </div>
  </div>
);

export default function MenuLat() {
  const [loading, setLoading] = useState(true);
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const router = useRouter();

  useEffect(() => {
    const carregarDadosUsuario = async () => {
      try {
        const usuarioLogadoJson = localStorage.getItem('usuarioLogado');
        
        if (!usuarioLogadoJson) {
          console.warn("Nenhum usuário logado encontrado.");
          router.push('/login');
          return;
        }

        const usuarioLogado = JSON.parse(usuarioLogadoJson);
        const userId = usuarioLogado._id || usuarioLogado.id || (usuarioLogado.usuario && usuarioLogado.usuario._id);

        if (!userId) {
           console.error("ID não encontrado no localStorage:", usuarioLogado);
           throw new Error("ID do usuário não encontrado no storage");
        }

        const data = await usuarioService.buscarPorId(userId);
        const usuarioFinal = data.usuario || data;
        setUsuario(usuarioFinal);
        
      } catch (error) {
        console.error("Erro no menu lateral:", error);
      } finally {
        setLoading(false);
      }
    };

    carregarDadosUsuario();
  }, [router]);

  if (loading) return <MenuLoading />;
  if (!usuario) return null; 

  // --- RENDERIZAÇÃO ---

  // CASO 1: Perfil Completo de ONG
  if (usuario.status === 'ong' && usuario.assignedTo) {
    const ong = usuario.assignedTo;

    return (
      <div className="menu-lat">
        <div className="card overflow-hidden">
          <div className="card-body pt-0 mt-3 text-center">
            <div className="avatar avatar-lg mt-n5 mb-3">
              <Link href="/perfil">
                <Image
                  className="avatar-img rounded-circle border d-inline"
                  src={ong.logo || MuxnLogo1} 
                  alt={`Logo ${ong.nomeFantasia}`}
                  width={100}
                  height={100}
                  style={{ objectFit: "cover" }}
                />
              </Link>
            </div>
            <h5 className="mb-0">{ong.nomeFantasia}</h5>
            <small className="text-muted d-block mb-2">{ong.causaSocial}</small>
            <p className="mt-3 small">{ong.descricao ? ong.descricao.substring(0, 80) + '...' : 'Descrição...'}</p>
            
            <div className="mt-2">
                <span className="badge bg-success bg-opacity-10 text-success">
                    ONG Verificada
                </span>
            </div>

            <hr />
            
            <div className="d-flex justify-content-center gap-3 mt-2">
              {ong.redeSocial?.instagram && (
                  <a href={ong.redeSocial.instagram} target="_blank" rel="noopener noreferrer">
                    <Image src={logo_instagram} alt="Instagram" width={24} height={24} />
                  </a>
              )}
              {ong.redeSocial?.facebook && (
                  <a href={ong.redeSocial.facebook} target="_blank" rel="noopener noreferrer">
                    <Image src={logo_facebook} alt="Facebook" width={24} height={24} />
                  </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // CASO 2: Admin
  if (usuario.status === 'admin') {
    return (
      <div className="menu-lat">
        <div className="card overflow-hidden border-danger">
          <div className="card-body pt-0 mt-3 text-center">
             <div className="avatar avatar-lg mt-n5 mb-3">
                <Image 
                    src={usuario.avatar || MuxnLogo1} 
                    alt="Admin" 
                    width={100} 
                    height={100} 
                    className="rounded-circle border"
                />
             </div>
             <h5 className="text-danger">Administrador</h5>
             <p className="small text-muted">Painel de Controle</p>
             <hr/>
             {/* CORREÇÃO AQUI: Removido 'block', mantido 'flex' para centralizar ícone e texto */}
             <Link href="/admin" className="w-full py-2 px-4 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors font-medium flex items-center justify-center gap-2">
               Acessar Painel
             </Link>
          </div>
        </div>
      </div>
    );
  }

  // CASO 3 (DEFAULT): Usuário Comum OU ONG Pendente
  return (
    <div className="menu-lat">
      <div className="card overflow-hidden">
        <div className="card-body pt-0 mt-3 text-center">
          <div className="avatar avatar-lg mt-n5 mb-3">
            <Link href="/perfil">
              <Image
                className="avatar-img rounded-circle border d-inline"
                src={usuario.avatar || MuxnLogo1}
                alt="Avatar"
                width={100}
                height={100}
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
          <h5 className="mb-0">{usuario.nome}</h5>
          
          <div className="alert alert-light border mt-3 p-2 small text-primary">
            {usuario.status === 'ong' 
                ? "Você tem perfil de ONG! Finalize o cadastro da sua organização abaixo."
                : "Complete seu perfil para cadastrar sua ONG!"
            }
          </div>
          
          <Link href="/cadastro-ong" className="block w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-md transition-all hover:shadow-lg transform hover:-translate-y-0.5 text-decoration-none">
            {usuario.status === 'ong' ? "Cadastrar Minha ONG" : "Quero Cadastrar uma ONG"}
          </Link>
          
          <hr />
        </div>
      </div>
    </div>
  );
}