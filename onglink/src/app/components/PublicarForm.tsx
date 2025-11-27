// "use client";
// import React, { FC, useState } from "react";
// import Image from "next/image";
// import MuxnLogo1 from "@/app/img/MUXN_logo1.png";
// import NeWUploadButton from "./button/NewUploadButton";
// import { Button, Modal, Form, FormCheck, Alert } from "react-bootstrap";

// interface PublicarFormProps {
//   onPublish: (post: {
//     title: string;
//     message: string;
//     image?: File | null;
//   }) => void;
// }

// const PublicarForm: FC<PublicarFormProps> = ({ onPublish }) => {
//   const [title, setTitle] = useState("");
//   const [message, setMessage] = useState("");
//   const [image, setImage] = useState<File | null>(null);

//   const handlePost = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (title.trim() && message.trim()) {
//       onPublish({ title, message, image });
//       setTitle("");
//       setMessage("");
//       setImage(null);
//     }
//   };
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <form onSubmit={handlePost} className="mb-4">
//       <div className="container-fluid col-12 vstack gap-4 p-0">
//         <div className="d-flex mt-3 mb-3">
//           {/* Avatar */}
//           <div className="avatar avatar-xs me-2"
//           style={{ minWidth: "60px" }}>
//             <a href="#">
//               <Image
//                 className="avatar-img rounded-circle"
//                 src={MuxnLogo1}
//                 alt="Avatar"
//                 height={60}
//                 width={60}
//               />
//             </a>
//           </div>
//           <div className="container mt-0">
//             <div className="mb-2">
//               <textarea
//                 className="form-control"
//                 rows={1}
//                 placeholder="Título"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 onInput={(e) => {
//                   const target = e.target as HTMLTextAreaElement;
//                   target.style.height = "auto";
//                   target.style.height = `${target.scrollHeight}px`;
//                 }}
//               />
//             </div>
//             <div className="mb-2">
//               <textarea
//                 className="form-control"
//                 rows={5}
//                 placeholder="Descrição"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 onInput={(e) => {
//                   const target = e.target as HTMLTextAreaElement;
//                   target.style.height = "auto";
//                   target.style.height = `${target.scrollHeight}px`;
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="div_botoes_publi" className=" d-flex align-items-center gap-3 mt-3">
//         <button type="submit" className="btn btn-success" title="Enviar">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="35"
//             height="35"
//             fill="currentColor"
//             className="bi bi-send-check"
//             viewBox="0 0 16 16"
//           >
//             <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363 1.591 6.602z" />
//             <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686" />
//           </svg>
//         </button>
//         <NeWUploadButton
//           title="Selecionar imagem"
//                     label={
//             <span className="d-flex align-items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="35"
//                 height="35"
//                 fill="currentColor"
//                 className="bi bi-paperclip"
//                 viewBox="0 0 16 16"
//                 style={{ marginRight: 8 }}
//               >
//                 <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
//               </svg>
//               <i className="bi bi-image" style={{ marginRight: 8 }}></i>{" "}
//             </span>
//           }
//           variant="success"
//           onFileSelect={(file) => setImage(file)}
//         />
//         {image && <span className="ms-2">{image.name}</span>}
//       </div>
//     </form>
//   );
// };

// export default PublicarForm;

// ESSE PUBLICARFORM ACIMA ESTÁ FUNCIONANDO SEM SALVAR NO DB.

// NOVO PUBLICARFORM ABAIXO:

// "use client";
// import React, { FC, useState } from "react";
// import { Alert, Spinner } from "react-bootstrap";

// import Image from "next/image";
// import MuxnLogo1 from "@/app/img/MUXN_logo1.png";
// import NeWUploadButton from "./button/NewUploadButton";
// import publicacaoService from "@/app/services/publicacaoService";
// // =====================================================================

// interface PublicarFormProps {
//   onPublish: (post: any) => void;
// }

// const PublicarForm: FC<PublicarFormProps> = ({ onPublish }) => {
//   const [title, setTitle] = useState("");
//   const [message, setMessage] = useState("");
//   const [image, setImage] = useState<File | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [feedback, setFeedback] = useState<{ message: string; variant: 'success' | 'danger' } | null>(null);

//   const handlePost = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!title.trim() || !message.trim()) {
//         setFeedback({ message: "O título e a descrição são obrigatórios.", variant: 'danger' });
//         setTimeout(() => setFeedback(null), 3000);
//         return;
//     }

//     setIsLoading(true);
//     setFeedback(null);

//     try {
//         // 1. Criar o objeto FormData para enviar texto e arquivo
//         const formData = new FormData();
//         formData.append("titulo", title);
//         formData.append("descricao", message);
        
//         if (image) {
//             // 'imageFile' deve ser o nome do campo esperado pelo Multer no backend
//             formData.append("imageFile", image); 
//         }

//         // 2. Chamar o serviço de API (Real ou Mock)
//         const newPost = await publicacaoService.cadastrarPublicacao(formData);
        
//         // 3. Sucesso: Limpa o formulário e atualiza o feed
//         onPublish(newPost);
//         setTitle("");
//         setMessage("");
//         setImage(null);
//         setFeedback({ message: "Publicação enviada com sucesso!", variant: 'success' });
        
//     } catch (error: any) {
//       if (error.response && error.response.data) {
//         console.error("🚨 ERRO DO SERVIDOR:", JSON.stringify(error.response.data, null, 2));
//     } else {
//         console.error("🚨 ERRO SEM RESPOSTA DO SERVIDOR:", error.message);
//     }
//       console.log("DETALHES DO ERRO 400:", error.response?.data); //////////
//         console.error("Erro ao cadastrar publicação:", error);
//         setFeedback({ message: "Falha ao enviar publicação. Tente novamente.", variant: 'danger' });

//     } finally {
//         setIsLoading(false);
//         // Limpa a mensagem de sucesso/erro após 5 segundos
//         setTimeout(() => setFeedback(null), 5000);
//     }
//   };

//   return (
//     <form onSubmit={handlePost} className="mb-4 border rounded p-3 bg-white shadow-sm">
//       {feedback && (
//           <Alert 
//               variant={feedback.variant} 
//               onClose={() => setFeedback(null)} 
//               dismissible 
//               className="mb-3 fade show"
//           >
//               {feedback.message}
//           </Alert>
//       )}
//       <div className="container-fluid col-12 vstack gap-3 p-0">
//         <div className="d-flex">
//           {/* Avatar */}
//           <div className="avatar me-3 flex-shrink-0">
//             <a href="#">
//               <Image
//                 className="rounded-circle border"
//                 src={MuxnLogo1}
//                 alt="Avatar"
//                 height={50}
//                 width={50}
//               />
//             </a>
//           </div>
//           <div className="flex-grow-1">
//             <div className="mb-2">
//               <input
//                 type="text"
//                 className="form-control fw-bold"
//                 placeholder="Título da publicação"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 disabled={isLoading}
//                 style={{border: 'none', boxShadow: 'none', paddingLeft: 0, fontSize: '1.1rem'}}
//               />
//             </div>
//             <div className="mb-2">
//               <textarea
//                 className="form-control"
//                 rows={3}
//                 placeholder="No que você está pensando? Compartilhe com a comunidade..."
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 onInput={(e) => {
//                   const target = e.target as HTMLTextAreaElement;
//                   target.style.height = "auto";
//                   target.style.height = `${target.scrollHeight}px`;
//                 }}
//                 disabled={isLoading}
//                 style={{ minHeight: '80px', resize: 'none', border: '1px solid #eee' }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Área de Upload e Botões */}
//       <div className="d-flex align-items-center justify-content-between mt-3 pt-3 border-top">
//          <div className="d-flex align-items-center">
//             <NeWUploadButton
//                 label={
//                     <span className="d-flex align-items-center text-success fw-semibold" style={{fontSize: '0.9rem'}}>
//                     <i className="bi bi-image me-2 fs-5"></i>
//                     {image ? "Alterar mídia" : "Adicionar mídia"}
//                     </span>
//                 }
//                 variant="link"
//                 className="text-decoration-none p-0 me-3"
//                 onFileSelect={(file) => setImage(file)}
//                 disabled={isLoading}
//             />
//             {image && (
//                 <span className="badge bg-light text-dark border d-flex align-items-center">
//                     <small>{image.name.length > 15 ? image.name.substring(0, 15) + '...' : image.name}</small>
//                     <button type="button" className="btn-close ms-2" style={{width: '0.5em', height: '0.5em'}} onClick={() => setImage(null)} aria-label="Remover imagem"></button>
//                 </span>
//             )}
//         </div>

//         <div>
//             <button type="submit" className="btn btn-success px-4 d-flex align-items-center fw-semibold" disabled={isLoading || (!title.trim() && !message.trim())}>
//             {isLoading ? (
//                 <>
//                     <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
//                     Publicando...
//                 </>
//             ) : (
//                 <>
//                     <i className="bi bi-send me-2"></i>
//                     Publicar
//                 </>
//             )}
//             </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PublicarForm;

//////////////////////
// "use client";
// import React, { FC, useState, useEffect } from "react";
// import { Alert, Spinner } from "react-bootstrap";
// import Image from "next/image";
// import MuxnLogo1 from "@/app/img/MUXN_logo1.png";
// import NeWUploadButton from "./button/NewUploadButton"; 
// import publicacaoService from "@/app/services/publicacaoService";

// interface PublicarFormProps {
//   onPublish: (post: any) => void;
// }

// const PublicarForm: FC<PublicarFormProps> = ({ onPublish }) => {
//   const [title, setTitle] = useState("");
//   const [message, setMessage] = useState("");
//   const [image, setImage] = useState<File | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [feedback, setFeedback] = useState<{ message: string; variant: 'success' | 'danger' } | null>(null);
//   const [userId, setUserId] = useState<string | null>(null);

//   // 1. RECUPERAR O ID DO USUÁRIO LOGADO
//   useEffect(() => {
//     const usuarioLogadoJson = localStorage.getItem('usuarioLogado');
//     if (usuarioLogadoJson) {
//       try {
//         const usuario = JSON.parse(usuarioLogadoJson);
//         // Tenta pegar o ID de várias formas possíveis para garantir compatibilidade
//         const id = usuario._id || usuario.id || (usuario.usuario && usuario.usuario._id);
        
//         if (id) {
//             setUserId(id);
//         } else {
//             console.warn("ID do usuário não encontrado no localStorage.");
//         }
//       } catch (e) {
//         console.error("Erro ao ler usuário do localStorage", e);
//       }
//     }
//   }, []);

//   const handlePost = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!title.trim() || !message.trim()) {
//         setFeedback({ message: "O título e a descrição são obrigatórios.", variant: 'danger' });
//         setTimeout(() => setFeedback(null), 3000);
//         return;
//     }

//     // Verifica se temos o ID antes de tentar enviar
//     if (!userId) {
//         setFeedback({ message: "Erro de autenticação. Tente fazer login novamente.", variant: 'danger' });
//         return;
//     }

//     setIsLoading(true);
//     setFeedback(null);

//     try {
//         // 2. CRIAR O FORMDATA COM TODOS OS CAMPOS NECESSÁRIOS
//         const formData = new FormData();
//         formData.append("titulo", title);
//         formData.append("descricao", message);
        
//         // CAMPO CRUCIAL: O ID DA ONG
//         formData.append("criadoPor", userId); 
        
//         if (image) {
//             // Usa 'image' ou 'imageFile' dependendo do que seu Multer backend espera.
//             // Vou manter 'image' como padrão comum, mas se seu backend esperar 'file', mude aqui.
//             formData.append("image", image); 
//         }

//         // 3. ENVIAR PARA O SERVIÇO
//         const newPost = await publicacaoService.cadastrarPublicacao(formData);
        
//         // 4. SUCESSO
//         onPublish(newPost);
//         setTitle("");
//         setMessage("");
//         setImage(null);
//         setFeedback({ message: "Publicação enviada com sucesso!", variant: 'success' });
        
//     } catch (error: any) {
//       console.error("Erro ao cadastrar publicação:", error);
      
//       const errorMsg = error.response?.data?.message || error.response?.data?.error || error.message || "Falha ao enviar publicação.";
      
//       // Se for erro 403, damos uma mensagem mais clara
//       if (error.response?.status === 403) {
//           setFeedback({ message: "Acesso negado: Apenas ONGs aprovadas podem publicar.", variant: 'danger' });
//       } else {
//           setFeedback({ message: errorMsg, variant: 'danger' });
//       }

//     } finally {
//         setIsLoading(false);
//         setTimeout(() => setFeedback(null), 5000);
//     }
//   };

//   return (
//     <form onSubmit={handlePost} className="mb-4 border rounded p-3 bg-white shadow-sm">
//       {feedback && (
//           <Alert 
//               variant={feedback.variant} 
//               onClose={() => setFeedback(null)} 
//               dismissible 
//               className="mb-3 fade show"
//           >
//               {feedback.message}
//           </Alert>
//       )}
//       <div className="container-fluid col-12 vstack gap-3 p-0">
//         <div className="d-flex">
//           {/* Avatar */}
//           <div className="avatar me-3 flex-shrink-0">
//             <a href="#">
//               <Image
//                 className="rounded-circle border"
//                 src={MuxnLogo1}
//                 alt="Avatar"
//                 height={50}
//                 width={50}
//                 style={{objectFit: 'cover'}}
//               />
//             </a>
//           </div>
//           <div className="flex-grow-1">
//             <div className="mb-2">
//               <input
//                 type="text"
//                 className="form-control fw-bold"
//                 placeholder="Título da publicação"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 disabled={isLoading}
//                 style={{border: 'none', boxShadow: 'none', paddingLeft: 0, fontSize: '1.1rem'}}
//               />
//             </div>
//             <div className="mb-2">
//               <textarea
//                 className="form-control"
//                 rows={3}
//                 placeholder="No que você está pensando? Compartilhe com a comunidade..."
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 disabled={isLoading}
//                 style={{ minHeight: '80px', resize: 'none', border: '1px solid #eee' }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="d-flex align-items-center justify-content-between mt-3 pt-3 border-top">
//          <div className="d-flex align-items-center">
//             <NeWUploadButton
//                 label={
//                     <span className="d-flex align-items-center text-success fw-semibold" style={{fontSize: '0.9rem'}}>
//                     <i className="bi bi-image me-2 fs-5"></i>
//                     {image ? "Alterar mídia" : "Adicionar mídia"}
//                     </span>
//                 }
//                 variant="link"
//                 className="text-decoration-none p-0 me-3"
//                 onFileSelect={(file) => setImage(file)}
//                 disabled={isLoading}
//             />
//             {image && (
//                 <span className="badge bg-light text-dark border d-flex align-items-center">
//                     <small>{image.name.length > 15 ? image.name.substring(0, 15) + '...' : image.name}</small>
//                     <button type="button" className="btn-close ms-2" style={{width: '0.5em', height: '0.5em'}} onClick={() => setImage(null)} aria-label="Remover imagem"></button>
//                 </span>
//             )}
//         </div>

//         <div>
//             <button type="submit" className="btn btn-success px-4 d-flex align-items-center fw-semibold" disabled={isLoading || (!title.trim() && !message.trim())}>
//             {isLoading ? (
//                 <>
//                     <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
//                     Publicando...
//                 </>
//             ) : (
//                 <>
//                     <i className="bi bi-send me-2"></i>
//                     Publicar
//                 </>
//             )}
//             </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PublicarForm;
"use client";
import React, { FC, useState, useEffect } from "react";
import { Alert, Spinner } from "react-bootstrap";
import Image from "next/image";
import MuxnLogo1 from "@/app/img/MUXN_logo1.png";
import NeWUploadButton from "./button/NewUploadButton"; 
// Importamos o seu service agora
import publicacaoService from "@/app/services/publicacaoService";

interface PublicarFormProps {
  onPublish: (post: any) => void;
}

const PublicarForm: FC<PublicarFormProps> = ({ onPublish }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ message: string; variant: 'success' | 'danger' } | null>(null);
  
  // Estados para identificação visual (o token agora é com o api.js)
  const [ongId, setOngId] = useState<string | null>(null);
  const [ongAvatar, setOngAvatar] = useState<string>(""); 
  const [ongName, setOngName] = useState<string>("");

  useEffect(() => {
    const storedUser = localStorage.getItem('usuarioLogado');
    if (storedUser) {
        try {
            const data = JSON.parse(storedUser);
            
            // Lógica para extrair ID e Logo corretamente
            let idFinal = data._id || data.id;
            let logoFinal = data.logo || data.avatar;
            let nomeFinal = data.nome;

            // Se estiver aninhado em 'ong' ou 'usuario'
            if (data.ong) {
                idFinal = data.ong._id || idFinal;
                logoFinal = data.ong.logo || logoFinal;
                nomeFinal = data.ong.nome || nomeFinal;
            } else if (data.usuario) {
                logoFinal = data.usuario.logo || data.usuario.avatar || logoFinal;
                nomeFinal = data.usuario.nome || nomeFinal;
                idFinal = data.usuario._id || idFinal;
            }

            if (idFinal) setOngId(idFinal);
            if (logoFinal) setOngAvatar(logoFinal);
            if (nomeFinal) setOngName(nomeFinal);

        } catch (e) {
            console.error("Erro ao ler dados do usuário:", e);
        }
    }
  }, []);

  const handlePost = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !message.trim()) {
        setFeedback({ message: "Preencha título e descrição.", variant: 'danger' });
        return;
    }
    if (!ongId) {
        setFeedback({ message: "Erro: Identificação da ONG não encontrada. Tente relogar.", variant: 'danger' });
        return;
    }

    setIsLoading(true);
    setFeedback(null);

    try {
        const formData = new FormData();
        formData.append("titulo", title);
        formData.append("descricao", message);
        formData.append("criadoPor", ongId); 
        
        // O nome do campo deve bater com o upload.single('image') do backend
        if (image) {
            formData.append("image", image); 
        }

        // --- CHAMADA PELO SERVICE ---
        const newPost = await publicacaoService.cadastrarPublicacao(formData);

        // --- INJEÇÃO VISUAL ---
        // Se o backend retornou sucesso, mas não populou a logo ainda, usamos a local
        if (newPost) {
             if (!newPost.criadoPor || !newPost.criadoPor.logo) {
                newPost.criadoPor = {
                    ...(newPost.criadoPor || {}),
                    _id: ongId,
                    nome: ongName,
                    logo: ongAvatar,
                    avatar: ongAvatar
                };
            }
        }

        onPublish(newPost);
        
        // Limpeza do form
        setTitle("");
        setMessage("");
        setImage(null);
        setFeedback({ message: "Publicado com sucesso!", variant: 'success' });
        
    } catch (error: any) {
      console.error("❌ ERRO NO POST:", error);
      const msg = error.response?.data?.message || error.message || "Erro ao conectar com o servidor.";
      setFeedback({ message: msg, variant: 'danger' });
    } finally {
        setIsLoading(false);
        setTimeout(() => setFeedback(null), 5000);
    }
  };

  return (
    <form onSubmit={handlePost} className="mb-4 border rounded p-3 bg-white shadow-sm">
      {feedback && <Alert variant={feedback.variant} dismissible>{feedback.message}</Alert>}
      <div className="d-flex gap-3 mb-3">
         <div className="flex-shrink-0">
            <Image 
                src={ongAvatar || MuxnLogo1} 
                alt="Avatar" 
                width={50} height={50} 
                className="rounded-circle border" 
                style={{objectFit: 'cover'}} 
                onError={(e) => { e.currentTarget.src = MuxnLogo1.src; }}
            />
         </div>
         <div className="w-100">
             <input 
                className="form-control fw-bold mb-2 border-0 px-0" 
                placeholder={`Publicar como ${ongName || 'ONG'}...`} 
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                disabled={isLoading}
             />
             <textarea 
                className="form-control" 
                rows={3} 
                placeholder="Compartilhe com a comunidade..." 
                value={message} 
                onChange={e => setMessage(e.target.value)} 
                disabled={isLoading}
             />
         </div>
      </div>
      <div className="d-flex justify-content-between align-items-center border-top pt-3">
         <NeWUploadButton 
            onFileSelect={setImage} 
            disabled={isLoading}
            label={
                <span className={`fw-bold cursor-pointer ${image ? "text-primary" : "text-success"}`}>
                    {image ? `📷 ${image.name.substring(0, 15)}...` : "📷 Adicionar Mídia"}
                </span>
            }
            variant="link"
         />
         <button type="submit" className="btn btn-success text-white px-4 fw-bold" disabled={isLoading}>
            {isLoading ? <Spinner size="sm"/> : "Publicar"}
         </button>
      </div>
    </form>
  );
};

export default PublicarForm;