// "use client";
// import React, { FC, useState } from "react";
// import Image from "next/image";
// import MuxnLogo1 from "@/app/img/MUXN_logo1.png";
// import { Button, Modal, Form, FormCheck } from "react-bootstrap";
// import "@/app/CSS/feed.css";

// interface Post {
//   title: string;
//   message: string;
//   image?: File | null;
// }

// interface FeedPostProps {
//   post: Post;
// }

// const FeedPost: FC<FeedPostProps> = ({ post }) => {
//   const [modalShow, setModalShow] = useState(false);
//   const imageURL = post.image ? URL.createObjectURL(post.image) : null;

//   function ModalDenuncia(props: any) {
//     function handleClose() {
//       setModalShow(false);
//       return alert("Denúncia Enviada com Sucesso!");
//     }
//     return (
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Denunciar Publicação
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form className="mb-3">
//             <FormCheck
//               className="fs-5"
//               type="checkbox"
//               label="Conteúdo Ofensivo"
//             />
//             <FormCheck
//               className="fs-5"
//               type="checkbox"
//               label="Informações Falsas"
//             />
//             <FormCheck
//               className="fs-5"
//               type="checkbox"
//               label="Violação de Direitos Autorais"
//             />
//             <FormCheck className="fs-5" type="checkbox" label="Spam" />
//           </Form>

//           <h5>Diga-nos mais (opcional)</h5>
//           <textarea className="border-1" id="text_area_denuncia"></textarea>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={handleClose}> Enviar </Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }

//   return (
//     <>
//       <ModalDenuncia show={modalShow} onHide={() => setModalShow(false)} />
//       <div
//         style={{ backgroundColor: "#95CF93", borderColor:"#D0E2E9"}}
//         className="container-fluid col-12 vstack gap-4 p-3 rounded-4 border-3  shadow mb-4"
//       >
//         <div className="feed-item mb-3 d-flex align-items-start">
//           {/* Avatar */}
//           <div className="avatar avatar-xs me-2 " style={{ minWidth: "60px" }}>
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
//           {/* Conteúdo da Postagem */}
//           <div className="feed-content h-100 w-100">
//             <h3>{post.title}</h3>
//             <p>{post.message}</p>
//            {imageURL && (
//   <div className="d-flex justify-content-center">
//     <Image
//       src={imageURL}
//       alt="Imagem da publicação"
//       width={200}
//       height={150}
      
//       style={{ 
//         width: "80%",        // Ocupa a largura total do <div> pai
//         height: "auto",       // Ajusta a altura para manter a proporção (4:3)
//         marginTop: 8 
//       }}
      
      
//       unoptimized 
//     />
//   </div>
// )}
//             <div
//               id="div_botoes"
//               className=" h-100 w-100 justify-content-center"
//             >
              
//               <Button variant="success" title="Compartilhar">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="35"
//                   height="35"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-share2-icon lucide-share-2"
//                 >
//                   <circle cx="18" cy="5" r="3" />
//                   <circle cx="6" cy="12" r="3" />
//                   <circle cx="18" cy="19" r="3" />
//                   <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
//                   <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
//                 </svg>
//               </Button>
             
//               <Button title="Denunciar" onClick={() => setModalShow(true)}>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="35"
//                   height="35"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-message-square-warning-icon lucide-message-square-warning"
//                 >
//                   <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//                   <path d="M12 7v2" />
//                   <path d="M12 13h.01" />
//                 </svg>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="b-example-divider mt-3 mb-3"></div> */}
//     </>
//   );
// };

// export default FeedPost;


// abaixo o novo feedpost onde o denuncia também está conectada ao banco:
// "use client";
// import React, { FC, useState } from "react";
// import { Button, Modal, Form, FormCheck, Alert, Spinner } from "react-bootstrap";


//  import Image from "next/image";
//  import MuxnLogo1 from "@/app/img/MUXN_logo1.png";
//  import denunciaService from "@/app/services/denunciaService"
//  import "@/app/CSS/feed.css";
// // =====================================================================

// interface Post {
//   _id: string;
//   title: string;
//   message: string;
//   imageURL?: string;
// }

// interface FeedPostProps {
//   post: Post;
// }

// const FeedPost: FC<FeedPostProps> = ({ post }) => {
//   const [modalShow, setModalShow] = useState(false);
//   const [isReporting, setIsReporting] = useState(false);
//   const [reportFeedback, setReportFeedback] = useState<{ message: string, variant: 'success' | 'danger' } | null>(null);

//   // Variáveis de estado para os campos da denúncia
//   const [motivo, setMotivo] = useState<string[]>([]);
//   const [descricao, setDescricao] = useState("");

//   const handleMotivoChange = (label: string) => {
//       setMotivo(prev => 
//           prev.includes(label) ? prev.filter(m => m !== label) : [...prev, label]
//       );
//   };

//   const handleDenunciaSubmit = async () => {
//       if (motivo.length === 0 && !descricao.trim()) {
//           alert("Por favor, selecione pelo menos um motivo ou descreva a denúncia.");
//           return;
//       }

//       setIsReporting(true);
//       try {
//           // Chama o serviço (Real ou Mock)
//           await denunciaService.cadastrarDenuncia({
//               postId: post._id,
//               motivos: motivo,
//               descricao: descricao,
//               dataDenuncia: new Date()
//           });

//           setReportFeedback({ message: "Denúncia enviada com sucesso. Obrigado por contribuir!", variant: 'success' });
//           // Limpa o formulário da modal
//           setMotivo([]);
//           setDescricao("");
//           setTimeout(() => {
//              setModalShow(false);
//              setReportFeedback(null);
//           }, 2000);

//       } catch (error) {
//           console.error("Erro ao enviar denúncia:", error);
//           setReportFeedback({ message: "Erro ao enviar denúncia. Tente novamente mais tarde.", variant: 'danger' });
//       } finally {
//           setIsReporting(false);
//       }
//   };

//   function ModalDenuncia(props: any) {
//     return (
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Denunciar Publicação
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {reportFeedback && <Alert variant={reportFeedback.variant}>{reportFeedback.message}</Alert>}
          
//           <Form className="mb-3">
//              {["Conteúdo Ofensivo", "Informações Falsas", "Violação de Direitos Autorais", "Spam"].map((label) => (
//                  <FormCheck
//                     key={label}
//                     className="fs-5"
//                     type="checkbox"
//                     label={label}
//                     checked={motivo.includes(label)}
//                     onChange={() => handleMotivoChange(label)}
//                     disabled={isReporting}
//                  />
//              ))}
//           </Form>

//           <h5>Diga-nos mais (opcional)</h5>
//           <textarea 
//               className="form-control border-1" 
//               id="text_area_denuncia" 
//               rows={3}
//               value={descricao}
//               onChange={(e) => setDescricao(e.target.value)}
//               disabled={isReporting}
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={props.onHide} disabled={isReporting}>Cancelar</Button>
//           <Button variant="danger" onClick={handleDenunciaSubmit} disabled={isReporting || (motivo.length === 0 && !descricao)}>
//             {isReporting ? <><Spinner as="span" animation="border" size="sm" className="me-2"/>Enviando...</> : "Enviar Denúncia"}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }

//   return (
//     <>
//       <ModalDenuncia show={modalShow} onHide={() => setModalShow(false)} />
//       <div
//         style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}
//         className="container-fluid col-12 vstack gap-3 p-4 rounded-4 border shadow-sm mb-4"
//       >
//         <div className="feed-item d-flex align-items-start">
//           {/* Avatar */}
//           <div className="me-3 flex-shrink-0">
//               <Image
//                 className="avatar-img rounded-circle border"
//                 src={MuxnLogo1}
//                 alt="Avatar do Usuário"
//                 height={48}
//                 width={48}
//               />
//           </div>
//           {/* Conteúdo da Postagem */}
//           <div className="feed-content flex-grow-1">
//              <div className="d-flex justify-content-between align-items-start mb-2">
//                 <div>
//                    <h5 className="mb-1 fw-bold text-dark" style={{fontSize: '1.1rem'}}>{post.title}</h5>
//                    <small className="text-muted">Publicado recentemente</small>
//                 </div>
//                 {/* Dropdown de opções poderia vir aqui (ex: três pontinhos) */}
//              </div>
            
//             <p className="text-dark mb-3" style={{whiteSpace: 'pre-wrap', fontSize: '0.95rem', lineHeight: '1.5'}}>{post.message}</p>
            
//             {post.imageURL && (
//               <div className="mb-3 rounded-3 overflow-hidden border bg-light d-flex justify-content-center" style={{maxHeight: '400px'}}>
//                 <img
//                   src={post.imageURL}
//                   alt={`Imagem de ${post.title}`}
//                   className="img-fluid"
//                   style={{ objectFit: "contain", maxHeight: "400px", width: '100%' }}
//                 />
//               </div>
//             )}

//             {/* Barra de Ações */}
//             <div className="d-flex justify-content-between align-items-center pt-3 border-top mt-3">
//                <div className="d-flex gap-2">
//                   <Button variant="link" className="text-decoration-none text-secondary p-0 me-3 d-flex align-items-center" title="Curtir">
//                      <i className="bi bi-heart me-1 fs-5"></i> <span className="d-none d-sm-inline ms-1">Curtir</span>
//                   </Button>
//                   <Button variant="link" className="text-decoration-none text-secondary p-0 me-3 d-flex align-items-center" title="Comentar">
//                      <i className="bi bi-chat me-1 fs-5"></i> <span className="d-none d-sm-inline ms-1">Comentar</span>
//                   </Button>
//                </div>

//                <div className="d-flex gap-2">
//                    <Button variant="link" className="text-decoration-none text-secondary p-0 d-flex align-items-center" title="Compartilhar">
//                       <i className="bi bi-share fs-5"></i>
//                    </Button>
//                    <Button variant="link" className="text-decoration-none text-danger p-0 ms-3 d-flex align-items-center" title="Denunciar" onClick={() => setModalShow(true)}>
//                        <i className="bi bi-flag fs-5"></i>
//                    </Button>
//                </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FeedPost;
/////////////////////////////////
// "use client";
// import React, { FC, useState } from "react";
// import { Button, Modal, Form, FormCheck, Alert, Spinner } from "react-bootstrap";
// import Image from "next/image";
// import MuxnLogo1 from "@/app/img/MUXN_logo1.png";
// import denunciaService from "@/app/services/denunciaService";

// // --- TIPAGEM CORRETA (Atualizada para bater com o FeedPage e o Backend) ---
// interface Post {
//   _id: string;
//   titulo: string;     // <--- Mudou de 'title' para 'titulo'
//   descricao: string;  // <--- Mudou de 'message' para 'descricao'
//   imagem?: string[];  // <--- Mudou de 'imageURL' para array de strings
//   createdAt?: string;
//   criadoPor?: {
//     nome: string;
//     email?: string;
//   };
// }

// interface FeedPostProps {
//   post: Post;
// }

// const FeedPost: FC<FeedPostProps> = ({ post }) => {
//   const [modalShow, setModalShow] = useState(false);
//   const [isReporting, setIsReporting] = useState(false);
//   const [reportFeedback, setReportFeedback] = useState<{ message: string, variant: 'success' | 'danger' } | null>(null);

//   const [motivo, setMotivo] = useState<string[]>([]);
//   const [descricao, setDescricao] = useState("");

//   // Pega a primeira imagem se existir
//   const postImage = post.imagem && post.imagem.length > 0 ? post.imagem[0] : null;

//   const handleMotivoChange = (label: string) => {
//       setMotivo(prev => 
//           prev.includes(label) ? prev.filter(m => m !== label) : [...prev, label]
//       );
//   };

//   const handleDenunciaSubmit = async () => {
//       if (motivo.length === 0 && !descricao.trim()) {
//           alert("Por favor, selecione pelo menos um motivo ou descreva a denúncia.");
//           return;
//       }

//       setIsReporting(true);
//       try {
//           await denunciaService.cadastrarDenuncia({
//               tipoDenuncia: motivo[0] || "Outro",
//               motivo: descricao || motivo.join(", "),
//               assignedTo: [post._id]
//           });

//           setReportFeedback({ message: "Denúncia enviada com sucesso.", variant: 'success' });
//           setMotivo([]);
//           setDescricao("");
//           setTimeout(() => {
//              setModalShow(false);
//              setReportFeedback(null);
//           }, 2000);

//       } catch (error) {
//           console.error("Erro ao enviar denúncia:", error);
//           setReportFeedback({ message: "Erro ao enviar denúncia.", variant: 'danger' });
//       } finally {
//           setIsReporting(false);
//       }
//   };

//   return (
//     <>
//       <Modal show={modalShow} onHide={() => setModalShow(false)} size="lg" centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Denunciar Publicação</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {reportFeedback && <Alert variant={reportFeedback.variant}>{reportFeedback.message}</Alert>}
          
//           <Form className="mb-3">
//              {["Conteúdo Ofensivo", "Informações Falsas", "Violação de Direitos Autorais", "Spam", "Conteúdo sexual", "Incitação ao ódio"].map((label) => (
//                  <FormCheck
//                     key={label}
//                     className="fs-5"
//                     type="checkbox"
//                     label={label}
//                     checked={motivo.includes(label)}
//                     onChange={() => handleMotivoChange(label)}
//                     disabled={isReporting}
//                  />
//              ))}
//           </Form>

//           <h5>Detalhes (opcional)</h5>
//           <textarea 
//               className="form-control border-1" 
//               rows={3}
//               value={descricao}
//               onChange={(e) => setDescricao(e.target.value)}
//               disabled={isReporting}
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setModalShow(false)} disabled={isReporting}>Cancelar</Button>
//           <Button variant="danger" onClick={handleDenunciaSubmit} disabled={isReporting}>
//             {isReporting ? <><Spinner as="span" animation="border" size="sm" className="me-2"/>Enviando...</> : "Enviar Denúncia"}
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       <div style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }} className="container-fluid col-12 vstack gap-3 p-4 rounded-4 border shadow-sm mb-4">
//         <div className="feed-item d-flex align-items-start">
//           <div className="me-3 flex-shrink-0">
//               <Image
//                 className="avatar-img rounded-circle border"
//                 src={MuxnLogo1}
//                 alt="Avatar"
//                 height={48}
//                 width={48}
//               />
//           </div>
//           <div className="feed-content flex-grow-1">
//              <div className="d-flex justify-content-between align-items-start mb-2">
//                 <div>
//                    <h5 className="mb-1 fw-bold text-dark" style={{fontSize: '1.1rem'}}>
//                      {/* Tenta mostrar o título, senão o nome de quem postou */}
//                      {post.titulo || post.criadoPor?.nome || "Publicação"}
//                    </h5>
//                    <small className="text-muted">
//                      {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "Recente"}
//                    </small>
//                 </div>
//              </div>
            
//             <p className="text-dark mb-3" style={{whiteSpace: 'pre-wrap', fontSize: '0.95rem', lineHeight: '1.5'}}>
//                 {post.descricao}
//             </p>
            
//             {postImage && (
//               <div className="mb-3 rounded-3 overflow-hidden border bg-light d-flex justify-content-center" style={{maxHeight: '400px'}}>
//                 <img
//                   src={postImage}
//                   alt={`Imagem de ${post.titulo}`}
//                   className="img-fluid"
//                   style={{ objectFit: "contain", maxHeight: "400px", width: '100%' }}
//                   onError={(e) => (e.currentTarget.style.display = 'none')}
//                 />
//               </div>
//             )}

//             <div className="d-flex justify-content-between align-items-center pt-3 border-top mt-3">
//                <div className="d-flex gap-2">
//                   <Button variant="link" className="text-decoration-none text-secondary p-0 me-3 d-flex align-items-center">
//                      <i className="bi bi-heart me-1 fs-5"></i> <span className="d-none d-sm-inline ms-1">Curtir</span>
//                   </Button>
//                </div>

//                <div className="d-flex gap-2">
//                    <Button variant="link" className="text-decoration-none text-danger p-0 ms-3 d-flex align-items-center" title="Denunciar" onClick={() => setModalShow(true)}>
//                        <i className="bi bi-flag fs-5"></i>
//                    </Button>
//                </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FeedPost;
///////////////////////////////////////////////////////////////
"use client";
import React, { FC, useState } from "react";
import Image from "next/image"; // Importação real do Next.js
import { Button, Modal, Form, FormCheck, Alert, Spinner } from "react-bootstrap";

// --- IMPORTS REAIS DO SEU PROJETO ---
import MuxnLogo1 from "@/app/img/MUXN_logo1.png"; // Garante que a logo padrão existe
import denunciaService from "@/app/services/denunciaService";
import "@/app/CSS/feed.css";

interface Post {
  _id: string;
  titulo: string;
  descricao: string;
  // Suporta vários formatos que podem vir do banco
  imageURL?: string; 
  imagem?: string | string[]; // Pode ser string única ou array de strings
  foto?: string;
  imagens?: string[];
  
  criadoPor?: {
    _id: string;
    nome?: string;
    logo?: string;
    avatar?: string;
  };
}

interface FeedPostProps {
  post: Post;
}

const FeedPost: FC<FeedPostProps> = ({ post }) => {
  const [modalShow, setModalShow] = useState(false);
  const [isReporting, setIsReporting] = useState(false);
  const [reportFeedback, setReportFeedback] = useState<{ message: string, variant: 'success' | 'danger' } | null>(null);

  // Estados da denúncia
  const [motivo, setMotivo] = useState<string[]>([]);
  const [descricao, setDescricao] = useState("");

  // Proteção se o post vier vazio
  if (!post) return null;

  // --- 1. LÓGICA DO AVATAR ---
  // Tenta pegar a logo/avatar do criador. Se não tiver, usa o import MuxnLogo1
  const avatarAutor = 
    post.criadoPor?.logo || 
    post.criadoPor?.avatar || 
    MuxnLogo1;
  
  // --- 2. LÓGICA DA IMAGEM DO POST (CORRIGIDA PARA ARRAY) ---
  let imagemPost = null;

  // Verifica o campo 'imagem' (padrão novo)
  if (post.imagem) {
      if (Array.isArray(post.imagem) && post.imagem.length > 0) {
          imagemPost = post.imagem[0]; // Pega a primeira imagem do array
      } else if (typeof post.imagem === 'string') {
          imagemPost = post.imagem;
      }
  }
  
  // Fallbacks para outros nomes de campo (legado)
  if (!imagemPost) {
      imagemPost = post.imageURL || post.foto || (Array.isArray(post.imagens) && post.imagens.length > 0 ? post.imagens[0] : null);
  }

  const handleMotivoChange = (label: string) => {
      setMotivo(prev => 
          prev.includes(label) ? prev.filter(m => m !== label) : [...prev, label]
      );
  };

  const handleDenunciaSubmit = async () => {
      if (motivo.length === 0 && !descricao.trim()) {
          alert("Por favor, selecione pelo menos um motivo ou descreva a denúncia.");
          return;
      }

      setIsReporting(true);
      try {
          await denunciaService.cadastrarDenuncia({
              postId: post._id,
              motivos: motivo,
              descricao: descricao,
              dataDenuncia: new Date()
          });

          setReportFeedback({ message: "Denúncia enviada com sucesso.", variant: 'success' });
          setMotivo([]);
          setDescricao("");
          setTimeout(() => {
             setModalShow(false);
             setReportFeedback(null);
          }, 2000);

      } catch (error) {
          console.error("Erro ao enviar denúncia:", error);
          setReportFeedback({ message: "Erro ao enviar denúncia.", variant: 'danger' });
      } finally {
          setIsReporting(false);
      }
  };

  function ModalDenuncia(props: any) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Denunciar Publicação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {reportFeedback && <Alert variant={reportFeedback.variant}>{reportFeedback.message}</Alert>}
          <Form className="mb-3">
             {["Conteúdo Ofensivo", "Informações Falsas", "Violação de Direitos Autorais", "Spam"].map((label) => (
                 <FormCheck key={label} type="checkbox" label={label} checked={motivo.includes(label)} onChange={() => handleMotivoChange(label)} disabled={isReporting} className="fs-5"/>
             ))}
          </Form>
          <h5>Diga-nos mais (opcional)</h5>
          <textarea className="form-control border-1" rows={3} value={descricao} onChange={(e) => setDescricao(e.target.value)} disabled={isReporting} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide} disabled={isReporting}>Cancelar</Button>
          <Button variant="danger" onClick={handleDenunciaSubmit} disabled={isReporting || (motivo.length === 0 && !descricao)}>
            {isReporting ? <Spinner as="span" animation="border" size="sm"/> : "Enviar Denúncia"}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <ModalDenuncia show={modalShow} onHide={() => setModalShow(false)} />
      <div style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }} className="container-fluid col-12 vstack gap-3 p-4 rounded-4 border shadow-sm mb-4">
        <div className="feed-item d-flex align-items-start">
          
          {/* --- AVATAR DO AUTOR --- */}
          <div className="me-3 flex-shrink-0">
              <Image
                className="rounded-circle border"
                src={avatarAutor}
                alt="Avatar do Autor"
                height={48}
                width={48}
                style={{ objectFit: 'cover', minWidth: '48px', minHeight: '48px' }}
              />
          </div>

          <div className="feed-content flex-grow-1">
             <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                   {/* Título */}
                   <h5 className="mb-1 fw-bold text-dark" style={{fontSize: '1.1rem'}}>
                     {String(post.titulo || "Sem título")}
                   </h5>
                   {/* Nome do Autor */}
                   <small className="text-muted">
                       {post.criadoPor?.nome ? `Por: ${post.criadoPor.nome}` : "Publicado recentemente"}
                   </small>
                </div>
             </div>
            
            <p className="text-dark mb-3" style={{whiteSpace: 'pre-wrap', fontSize: '0.95rem', lineHeight: '1.5'}}>
              {String(post.descricao || "")}
            </p>
            
            {/* --- IMAGEM DO POST --- */}
            {imagemPost && (
              <div className="mb-3 rounded-3 overflow-hidden border bg-light d-flex justify-content-center" style={{maxHeight: '400px'}}>
                {/* Usando tag img normal para aceitar Data URI (Base64) sem conflitos */}
                <img
                  src={imagemPost}
                  alt={`Imagem de ${post.titulo}`}
                  className="img-fluid"
                  style={{ objectFit: "contain", maxHeight: "400px", width: '100%' }}
                />
              </div>
            )}

            <div className="d-flex justify-content-center align-items-center pt-3 border-top mt-3">
               <div className="d-flex gap-2">
                 
               </div>
               <div className="d-flex gap-2">
                   <Button variant="link" className="text-decoration-none text-secondary p-0" title="Compartilhar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share fs-5" viewBox="0 0 16 16"><path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>
                   </Button>
                   <Button variant="link" className="text-decoration-none text-danger p-0 ms-3" title="Denunciar" onClick={() => setModalShow(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-flag fs-5" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.004.004-.013.013-.04.04a2.614 2.614 0 0 1-.458.362c-.185.113-.494.263-.997.422-.97.305-2.353.523-3.87.523-1.517 0-2.9-.218-3.87-.523a5.786 5.786 0 0 1-.997-.422 2.614 2.614 0 0 1-.458-.362l-.04-.04-.013-.013-.004-.004L4 8.464V7.5a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v.273a4.5 4.5 0 0 0 1.956.772c1.335.42 3.033.628 4.544.628 1.511 0 3.209-.208 4.544-.628A4.5 4.5 0 0 0 14 7.773V.5a.5.5 0 0 1 .5-.5z"/><path d="M4 7.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-7z"/></svg>
                   </Button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedPost;