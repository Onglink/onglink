// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   Button,
//   Col,
//   Row,
//   Form,
//   FormLabel,
//   InputGroup,
//   FormControl,
// } from "react-bootstrap";
// import logo_onglink_01 from "@/app/img/LOGO_ONGLINK_1.png";
// import image_home from "@/app/img/image_home.jpg";
// import logo_muxn from "@/app/img/MUXN_logo1.png";
// import React from "react";
// import { useRouter } from "next/navigation";
// import "@/app/CSS/home.css";
// import "@/app/CSS/header_alt.css";
// import "@/app/CSS/menu.css";
// import "@/app/CSS/main.css";
// import "@/app/CSS/body.css";
// import "@/app/CSS/parceiros.css";
// import Header_home from "@/app/components/header_home";
// import CardsParceiros from "@/app/components/card_parceiros";
// import arara from "@/app/img/arara.jpeg";

// export default function Parceiros() {
//   const router = useRouter();

//   return (
//     <>
//       {/*<!--Header--> */}

//       <Header_home />

//       {/* <!--Main--> */}

//       <main id="main_parceiros">
//         <div className="" id="page_title">
//           <h1>NOSSOS PARCEIROS</h1>
//         </div>

//         <div className="container-fluid col-12">
//           <form className="form-busca" role="search">
//             <InputGroup id="ong_busca">
//               <Form.Control
//                 placeholder="Procurar ONG"
//                 aria-label="Procurar ONG"
//                 aria-describedby="basic-addon2"
//                 className="input-busca"
//               />
//               <Button id="botaoBuscar" className="btn-busca">
//                 Buscar
//               </Button>
//             </InputGroup>
//           </form>

//           <div id="fundo_navbar">
//             <div className="row">
//               <div className="col-12">
//                 <nav id="navbar">
//                   <ul id="items_list">
//                     <Link href="/">
//                       <li>Meio ambiente</li>
//                     </Link>
//                     <Link href="/">
//                       <li>Saúde</li>
//                     </Link>
//                     <Link href="/">
//                       <li>Educação</li>
//                     </Link>
//                     <Link href="/">
//                       <li>Exibir todos</li>
//                     </Link>
//                   </ul>
//                 </nav>
//               </div>
//             </div>
//           </div>

//           <div id="div_parceiros">
//             <div className="row">
//               <div className="container-fluid">
//                 <h2>PARCEIROS DA EDUCAÇÃO</h2>
//                 <div className="d-flex " id="educacao">
//                   <CardsParceiros
//                     titulo="Outra ONG"
//                     imagem={arara}
//                     resumo="prévia."
//                     link="/"
//                   />

//                   <CardsParceiros
//                     titulo="Outra ONG"
//                     imagem={logo_muxn}
//                     resumo="prévia."
//                     link="/"
//                   />
//                   <div className="d-flex align-items-center justify-content-end w-100">
//                     <button id="educacao">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="30"
//                         height="30"
//                         fill="currentColor"
//                         className="bi bi-plus-circle"
//                         viewBox="0 0 16 16"
//                         stroke="currentColor"
//                       >
//                         <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
//                         <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>

//                 <h2>PARCEIROS CONTRA A FOME</h2>
//                 <div className="d-flex " id="fome">
//                   <CardsParceiros
//                     titulo="Outra ONG"
//                     imagem={logo_muxn}
//                     resumo="prévia."
//                     link="/"
//                   />

//                   <CardsParceiros
//                     titulo="Outra ONG"
//                     imagem={logo_muxn}
//                     resumo="prévia."
//                     link="/"
//                   />
//                   <div className="d-flex align-items-center justify-content-end w-100">
//                     <button id="fome">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="30"
//                         height="30"
//                         fill="currentColor"
//                         className="bi bi-plus-circle"
//                         viewBox="0 0 16 16"
//                         stroke="currentColor"
//                       >
//                         <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
//                         <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>

//                 <h2>PARCEIROS DA SAÚDE</h2>
//                 <div className="d-flex " id="saude">
//                   <CardsParceiros
//                     titulo="Outra ONG"
//                     imagem={logo_muxn}
//                     resumo="prévia."
//                     link="/"
//                   />

//                   <CardsParceiros
//                     titulo="Outra ONG"
//                     imagem={logo_muxn}
//                     resumo="prévia."
//                     link="/"
//                   />
//                   <div className="d-flex align-items-center justify-content-end w-100">
//                     <button id="saude">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="30"
//                         height="30"
//                         fill="currentColor"
//                         className="bi bi-plus-circle"
//                         viewBox="0 0 16 16"
//                         stroke="currentColor"
//                       >
//                         <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
//                         <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>

//                 <h2>PARCEIROS DO MEIO AMBIENTE</h2>
//                 <div className="d-flex " id="meio_ambiente">
//                   <CardsParceiros
//                     titulo="Outra ONG"
//                     imagem={logo_muxn}
//                     resumo="prévia."
//                     link="/"
//                   />

//                   <CardsParceiros
//                     titulo="Outra ONG"
//                     imagem={logo_muxn}
//                     resumo="prévia."
//                     link="/"
//                   />
//                   <div className="d-flex align-items-center justify-content-end w-100">
//                     <button id="meio_ambiente">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="30"
//                         height="30"
//                         fill="currentColor"
//                         className="bi bi-plus-circle"
//                         viewBox="0 0 16 16"
//                         stroke="currentColor"
//                       >
//                         <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
//                         <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>

//                 <h2>PARCEIROS DOS ANIMAIS</h2>
//                 <div className="d-flex " id="animais">
//                   <CardsParceiros
//                     titulo="Outra ONG"
//                     imagem={logo_muxn}
//                     resumo="prévia."
//                     link="/"
//                   />

//                   <CardsParceiros
//                     titulo="Outra ONG"
//                     imagem={logo_muxn}
//                     resumo="prévia."
//                     link="/"
//                   />
//                   <div className="d-flex align-items-center justify-content-end w-100">
//                     <button id="animais">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="30"
//                         height="30"
//                         fill="currentColor"
//                         className="bi bi-plus-circle"
//                         viewBox="0 0 16 16"
//                         stroke="currentColor"
//                       >
//                         <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
//                         <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>

//                 <h2>PARCEIROS DA SOCIEDADE</h2>
//                 <div className="d-flex " id="sociedade">
//                   <CardsParceiros
//                     titulo="Outra ONG"
//                     imagem={logo_muxn}
//                     resumo="prévia."
//                     link="/"
//                   />

//                   <CardsParceiros
//                     titulo="Outra ONG"
//                     imagem={logo_muxn}
//                     resumo="prévia."
//                     link="/"
//                   />
//                   <div className="d-flex align-items-center justify-content-end w-100">
//                     <button id="sociedade">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="30"
//                         height="30"
//                         fill="currentColor"
//                         className="bi bi-plus-circle"
//                         viewBox="0 0 16 16"
//                         stroke="currentColor"
//                       >
//                         <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
//                         <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>

//                 <h2>PARCEIROS DAS CRIANÇAS</h2>
//                 <div className="d-flex " id="criancas">
//                   <CardsParceiros
//                     titulo="Outra ONG"
//                     imagem={logo_muxn}
//                     resumo="prévia."
//                     link="/"
//                   />

//                   <CardsParceiros
//                     titulo="Outra ONG"
//                     imagem={logo_muxn}
//                     resumo="prévia."
//                     link="/"
//                   />
//                   <div className="d-flex align-items-center justify-content-end w-100">
//                     <button id="criancas">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="30"
//                         height="30"
//                         fill="currentColor"
//                         className="bi bi-plus-circle"
//                         viewBox="0 0 16 16"
//                         stroke="currentColor"
//                       >
//                         <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
//                         <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }





















'use client';

import Image from "next/image";
import Link from "next/link";
import {
  Button,
  InputGroup,
  Form,
  Modal, // Importado para o modal de detalhes
} from "react-bootstrap";
// Importações de estilos e componentes omitidas
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Header_home from "@/app/components/header_home";
import CardsParceiros from "@/app/components/card_parceiros"; 

// -------------------------------------------------------------------
// [Frontend] CONSTANTES E TIPAGEM
// -------------------------------------------------------------------

const API_URL = 'http://localhost:4000/api/parceiros'; 
const ITEMS_PER_LOAD = 4; 

// Lista de categorias válidas (Sem acentos para bater com o valor do DB)
const CATEGORIAS_VALIDAS = [
    'Ambiental', 
    'Animal', 
    'Educacao', 
    'Saude', 
    'Social'
]; 

// Mapeamento de cores para as categorias
const CATEGORY_COLORS = {
    'Ambiental': '#28a745', // Verde
    'Animal': '#ffc107',    // Amarelo
    'Educacao': '#007bff',   // Azul
    'Saude': '#dc3545',     // Vermelho
    'Social': '#6f42c1',    // Roxo
};

// Mapeamento de IDs
const categoryIdMap = {
    'Ambiental': 'ambiental',
    'Animal': 'animal', 
    'Educacao': 'educacao',
    'Saude': 'saude',
    'Social': 'social'
};

// Interface de dados que o Controller DEVE retornar
interface Parceiro {
    _id?: string;
    nomeFantasia: string; 
    telefone: string;     
    logo: string;        // Campo da URL da imagem
    causaSocial: string;
    email: string;       // Necessário para o Modal (Backend deve projetar)
    descricao: string;   // Necessário para o Modal (Backend deve projetar)
    link?: string;
}

type ParceirosAgrupados = { [key: string]: Parceiro[]; };
type VisibleCounts = { [key: string]: number; };

// -------------------------------------------------------------------
// [Frontend] COMPONENTE PRINCIPAL
// -------------------------------------------------------------------
export default function Parceiros() {
  const router = useRouter();
  
  const [parceirosAgrupados, setParceirosAgrupados] = useState<ParceirosAgrupados>({});
  const [visibleCounts, setVisibleCounts] = useState<VisibleCounts>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [totalFetched, setTotalFetched] = useState(0); 

  // ESTADO DO MODAL
  const [showModal, setShowModal] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<Parceiro | null>(null);

  // Handlers do Modal
  const handleClose = () => setShowModal(false);
  
  const handleViewDetails = (partner: Parceiro) => {
      setSelectedPartner(partner);
      setShowModal(true);
  };

  const fetchAndGroupParceiros = useCallback(async () => {
      try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.mensagem || 'Falha ao buscar dados da API.');
        }
        
        const responseJson = await response.json(); 
        
        // Lógica robusta para extrair o array de dados
        let rawData: any = responseJson;
        if (responseJson && !Array.isArray(responseJson)) {
            if (responseJson.parceiros && Array.isArray(responseJson.parceiros)) {
                rawData = responseJson.parceiros;
            } else if (responseJson.data && Array.isArray(responseJson.data)) {
                rawData = responseJson.data;
            }
        }
        const finalDataArray = rawData as Parceiro[]; 
        
        setTotalFetched(finalDataArray.length);
        
        // 1. Inicializa os grupos
        const gruposIniciais: ParceirosAgrupados = CATEGORIAS_VALIDAS.reduce((acc, cat) => {
            acc[cat] = [];
            return acc;
        }, {} as ParceirosAgrupados);

        // 2. Agrupa os parceiros
        const grupos = finalDataArray.reduce((acc, parceiro) => {
            const causaSocialDoParceiro = parceiro.causaSocial; 
            
            const categoriaChave = CATEGORIAS_VALIDAS.find(validCat => 
                validCat.toLowerCase() === causaSocialDoParceiro.toLowerCase().trim() 
            );

            if (categoriaChave) {
                if (!acc[categoriaChave]) {
                    acc[categoriaChave] = [];
                }
                acc[categoriaChave].push(parceiro);
            } 
            return acc;
        }, gruposIniciais);

        setParceirosAgrupados(grupos);
        
        // 3. Inicializa a contagem visível
        const initialCounts = CATEGORIAS_VALIDAS.reduce((acc, cat) => {
            acc[cat] = ITEMS_PER_LOAD;
            return acc;
        }, {} as VisibleCounts);
        setVisibleCounts(initialCounts);

      } catch (err) {
        console.error("Erro ao buscar parceiros:", err);
        setError(`Erro ao carregar lista: ${err instanceof Error ? err.message : 'Verifique o console para detalhes.'}`);
      } finally {
        setIsLoading(false);
      }
  }, []);

  useEffect(() => {
    fetchAndGroupParceiros();
  }, [fetchAndGroupParceiros]);


  // Método para carregar mais itens
  const handleLoadMore = (category: string) => {
      setVisibleCounts(prevCounts => ({
          ...prevCounts,
          [category]: prevCounts[category] + ITEMS_PER_LOAD,
      }));
  };

  // Componente para Renderizar uma Seção de Categoria
  const RenderCategorySection = ({ categoryName, idName }: { categoryName: string, idName: string }) => {
    const allUsers = parceirosAgrupados[categoryName] || [];
    const visibleCount = visibleCounts[categoryName] || 0;
    const usersToShow = allUsers.slice(0, visibleCount);
    const totalUsers = allUsers.length;
    const hasMore = totalUsers > visibleCount;
    
    const categoryColor = CATEGORY_COLORS[categoryName as keyof typeof CATEGORY_COLORS] || '#6c757d'; 

    if (totalUsers === 0) return null; 

    return (
        <>
            {/* TÍTULO E BORDA DA SEÇÃO */}
            <div style={{ border: `2px solid ${categoryColor}`, borderRadius: '8px', padding: '15px', marginBottom: '25px' }}>
                
                <h2>PARCEIROS {categoryName.toUpperCase()} ({totalUsers})</h2>
                
                <div className="d-flex flex-wrap" id={idName}>
                    
                    {/* 1. RENDERIZA OS CARDS VISÍVEIS */}
                    {usersToShow.map((parceiro, index) => (
                        <CardsParceiros
                            key={parceiro._id || `${categoryName}-${index}`} 
                            titulo={parceiro.nomeFantasia} 
                            resumo={parceiro.telefone}     
                            imagem={parceiro.logo} 
                            link={parceiro.link || '#'}
                            borderColor={categoryColor} 
                            
                            // NOVIDADE: Passa a função handler e os dados completos
                            onViewDetails={handleViewDetails}
                            partnerData={parceiro} 
                        />
                    ))}

                    {/* 2. BOTÃO CARREGAR MAIS */}
                    {hasMore && (
                        <div className="d-flex align-items-center justify-content-center w-100" style={{ margin: '15px 0' }}>
                            <button id={idName} onClick={() => handleLoadMore(categoryName)} disabled={isLoading}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0 15px' }}>
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={categoryColor} 
                                  className="bi bi-plus-circle" viewBox="0 0 16 16" stroke="currentColor">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
  };


  // --------------------------------------------------
  // Renderização Final (Inclui o Modal)
  // --------------------------------------------------
  return (
    <>
      <Header_home />

      <main id="main_parceiros">
        <div className="container-fluid col-12">
          {/* ... (Busca e navegação estática) ... */}
          
          {/* Mensagens de Erro/Carregamento */}
          {isLoading && <p>Carregando dados dos parceiros...</p>}
          {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
          
          {/* INIDICADOR DE DIAGNÓSTICO NA UI */}
          {totalFetched > 0 && <p style={{fontWeight: 'bold', color: 'blue', marginTop: '10px'}}>Total de Parceiros Encontrados no Backend: {totalFetched}</p>}
          {totalFetched === 0 && !isLoading && <p style={{fontWeight: 'bold', color: 'orange', marginTop: '10px'}}>Nenhum parceiro aprovado encontrado na base de dados.</p>}


          {/* DIVS DOS PARCEIROS (ÁREA DINÂMICA) */}
          {!isLoading && !error && totalFetched > 0 && ( 
            <div id="div_parceiros">
              <div className="row">
                <div className="container-fluid">
                    
                    {/* Mapeamento Dinâmico para as Seções */}
                    {CATEGORIAS_VALIDAS.map(category => (
                        <RenderCategorySection 
                            key={category}
                            categoryName={category}
                            idName={categoryIdMap[category as keyof typeof categoryIdMap]} 
                        />
                    ))}

                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* COMPONENTE MODAL DE DETALHES */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPartner?.nomeFantasia || "Detalhes do Parceiro"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPartner ? (
            <div>
              <div className="text-center mb-3">
                  {/* Você pode exibir a imagem da ONG aqui se o seu Controller a retornar! */}
                  {selectedPartner.logo && (
                      <Image 
                          src={selectedPartner.logo} 
                          alt={`Logo ${selectedPartner.nomeFantasia}`} 
                          width={120} 
                          height={120} 
                          className="rounded-circle border"
                      />
                  )}
              </div>
              <p><strong>Causa Social:</strong> {selectedPartner.causaSocial}</p>
              <p><strong>Telefone:</strong> {selectedPartner.telefone}</p>
              <p><strong>Email:</strong> {selectedPartner.email || 'Não informado'}</p>
              <p><strong>Descrição:</strong> {selectedPartner.descricao || 'Nenhuma descrição disponível.'}</p>
              
              <hr />
              
              {selectedPartner.link && (
                  <Link href={selectedPartner.link} passHref legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100">
                          Ir para o Site Oficial
                      </a>
                  </Link>
              )}
            </div>
          ) : (
            <p>Carregando informações...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}