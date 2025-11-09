// //esse é o antigo
// "use client";
// import React, { useState } from "react";
// import PublicarForm from "@/app/components/PublicarForm";
// import FeedPost from "@/app/components/FeedPost";
// //import { Row } from "react-bootstrap";

// interface Post {
//   title: string;
//   message: string;
//   image?: File | null;
// }

// const FeedPage: React.FC = () => {
//   const [posts, setPosts] = useState<Post[]>([]);

//   const addPost = (post: Post) => {
//     setPosts((prevPosts) => [post, ...prevPosts]);
//   };

//   return (
//     <div className="container-fluid col-12 vstack gap-1 p-0">
//       <div id="componente_feedpage" className="p-3">
//         <PublicarForm onPublish={addPost} />
//       </div>

//       <div className="mt-2" id="div_pub">
//         {posts.length === 0 ? (
//           <p className="text-center"></p>
//         ) : (
//           posts.map((post, index) => <FeedPost key={index} post={post} />)
//         )}
//       </div>

//     </div>
//   );
// };

// export default FeedPage;

// esse é o novo como teste
// "use client";
// import React from "react";
// import FeedPost from "@/app/components/FeedPost";

// interface Post {
//   title: string;
//   message: string;
//   image?: File | null;
// }

// interface FeedPageProps {
//   posts: Post[];
// }

// const FeedPage: React.FC<FeedPageProps> = ({ posts }) => {
//   return (
//     <div className="mt-2" id="div_pub">
//       {posts.length === 0 ? (
//         <p className="text-center">Nenhuma publicação ainda.</p>
//       ) : (
//         posts.map((post, index) => <FeedPost key={index} post={post} />)
//       )}
//     </div>
//   );
// };

// export default FeedPage;

// abaixo o código do semestre passado
// "use client";
// import React, { useState } from "react";
// import PublicarForm from "@/app/components/PublicarForm";
// import FeedPost from "@/app/components/FeedPost";

// interface Post {
//   title: string;
//   message: string;
//   image?: File | null;
// }

// const FeedPage: React.FC = () => {
//   const [posts, setPosts] = useState<Post[]>([]);

//   const addPost = (post: Post) => {
//     setPosts((prevPosts) => [post, ...prevPosts]);
//   };

//   return (
//     <div className="container-fluid col-12 vstack gap-4 p-0">
//       <div id="subdiv_publicar" className="p-3">
//         <PublicarForm onPublish={addPost} />
//       </div>
//       <div className="mt-4" id="div_pub">
//         {posts.length === 0 ? (
//           <p className="text-center"></p>
//         ) : (
//           posts.map((post, index) => <FeedPost key={index} post={post} />)
//         )}
//       </div>
//     </div>
//   );
// };

// export default FeedPage;

//abaixo no novo código com backend:
"use client";
import React, { useState, useEffect } from "react";
import { Alert, Spinner } from "react-bootstrap";
import PublicarForm from "@/app/components/PublicarForm";
import FeedPost from "@/app/components/FeedPost";
import publicacaoService from "@/app/services/publicacaoService";

interface Post {
  _id: string;
  title: string;
  message: string;
  imageURL?: string;
}

const FeedPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 1. Carregar posts ao iniciar (GET)
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null); // Limpa erros anteriores ao tentar carregar novamente
      try {
        const data = await publicacaoService.listarPublicacao();
        
        if (Array.isArray(data)) {
           // Inverte a ordem para mostrar os mais novos primeiro
          setPosts(data.reverse());
        } else {
          // Se a API retornar algo inesperado (ex: objeto vazio em vez de array)
          console.warn("API não retornou um array:", data);
          setPosts([]);
        }
      } catch (err) {
        console.error("Erro ao carregar feed:", err);
        setError("Erro ao carregar publicações. Verifique a conexão com o servidor.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // 2. Adicionar novo post à lista imediatamente após o sucesso do PublicarForm
  const addPost = (newPost: Post) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div className="container-fluid col-12 vstack gap-4 p-0">
      {/* Exibe alertas de erro de conexão */}
      {error && (
        <Alert variant="danger" onClose={() => setError(null)} dismissible className="mt-3">
          {error}
        </Alert>
      )}

      {/* Formulário de Publicação */}
      <div id="subdiv_publicar" className="p-3">
        <PublicarForm onPublish={addPost} />
      </div>

      {/* Lista de Posts */}
      <div className="mt-4" id="div_pub">
        {isLoading ? (
          <div className="text-center p-5">
            <Spinner animation="border" variant="success" role="status">
              <span className="visually-hidden">Carregando...</span>
            </Spinner>
            <p className="text-muted mt-2">Carregando feed...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center p-5 text-muted border rounded bg-light">
            <p className="mb-0 fs-5">Nenhuma publicação encontrada.</p>
            <small>Seja o primeiro a compartilhar algo!</small>
          </div>
        ) : (
          posts.map((post) => (
            // Usa _id ou um fallback para garantir uma key única
            <FeedPost key={post._id || Math.random().toString()} post={post} />
          ))
        )}
      </div>
    </div>
  );
};

export default FeedPage;