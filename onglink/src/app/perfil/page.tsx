"use client"

import Header_feed from "../components/header_feed";
import '@/app/CSS/header_alt.css'
import Image from "next/image";
import MuxnLogo1 from '@/app/img/MUXN_logo1.png'
import { Button } from "react-bootstrap";
import Ceu from "@/app/img/ceu.jpeg";
import '@/app/CSS/feed.css'
import FeedCarousel from "../components/carrousel/carousel";
import '@/app/CSS/perfil.css'
import UploadButton from "../components/button/UploadButton";
import { useRef } from "react";


export default function Perfil(){

    const inputFile = useRef(null);

    const onImageClick = () => {
      inputFile.current.click();
    }

    return(
    <>

        <Header_feed/>
        <div id="container_perfil" className="container">
          <img id="fundo_perfil" src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            <div id="perfil" className="card-body bg-success-subtle p-4 pt-3">

                <div>

                  <div id="div1_perfil">
                    
                    <div className="img-overlay-wrap">
                      <input type="file" ref={inputFile} className="hidden" />
                      <Image onClick={onImageClick} id="logo_MUXN" className="avatar-img rounded-circle border d-inline"src={MuxnLogo1} alt="logo_muxn" width={150} height={100}/>
                      <svg onClick={onImageClick} id="svg_mudar_pfp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>
                    </div>
                  

                    <div id="titulo_perfil">

                      <div id="div_nome_perfil">
                        <div id="MUXN_certificado">
                          <h3>MUXN</h3>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check-icon lucide-badge-check"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
                        </div>
                        <p>Projetos Sociais</p>
                      </div>

                      <div id="estrelas_rating" className="d-flex">

                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#ffde07" stroke="#ffc107" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#ffde07" stroke="#ffc107" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#ffde07" stroke="#ffc107" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#ffde07" stroke="#ffc107" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"  stroke="#ffc107" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star">
                          <defs>
                            <linearGradient id="ultima_estrela">
                              <stop offset="50%" stop-color="#ffde07"/>
                              <stop offset="50%" stop-color="#d1e7dd"/>
                            </linearGradient>
                          </defs>

                          <path 
                            fill="url(#ultima_estrela)" 
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                        </svg>

                        <p className="ml-2 fs-5 pt-0.5">4.5</p>
                      </div>
                    </div>

                    <div className="ml-130">
                      <Button variant="success" href="/editar_perfil"> Editar Dados do Perfil</Button>
                    </div>

                  </div>

                    <hr />
                    <p>Por um planeta melhor, através da Tecnologia.</p>

                    <p className="w-75">
                      A MUXN Technology surgiu a partir da necessidade de atender à sociedade por meio da tecnologia. 
                      Em 2024, um pequeno grupo de estudantes viu no setor social uma oportunidade de implementar o 
                      Desenvolvimento de Software Multiplataforma para facilitar a formação de parcerias entre ONGs e 
                      empresas interessadas em apoiá-las, visando facilitar a comunicação entre as partes.
                    </p>
                    <p>contato@muxn.com.br</p>
                    <p>Contato +55 (15) 3333-3333</p>
                </div>

                <hr />
                
                <h3 className="mb-4">Publicações</h3>
            <div id="borda_publi" className="border-2">
              <div id="div_publi" className="d-flex-column align-items-center">

                  <div id="subdiv_post1">
                    <div className="d-flex mt-4">
                      {/* <!-- LOGO/IMAGEM --> */}
                      <div
                        className="avatar avatar-xs me-2"
                        style={{ minWidth: "60px" }}
                      >
                        <a href="#">
                          {" "}
                          <Image
                            className="avatar-img rounded-circle"
                            src={MuxnLogo1}
                            alt=""
                            height={60}
                            width={60}
                          ></Image>{" "}
                        </a>
                      </div>
                      <div className="card-body flex-grow-1">
                        <h2> MUXN </h2>
                        <h6 className="fw-bold">Bem vindo!</h6>
                        <div className="container-fluid w-100 col-12 vstack gap-4 pl-0">
                          <p className="text-wrap">
                            Escrever é esquecer. A literatura é a maneira mais
                            agradável de ignorar a vida. A música embala, as
                            artes visuais animam, as artes vivas (como a dança e
                            a arte de representar) entretêm. A primeira, porém,
                            afasta-se da vida por fazer dela um sono; as
                            segundas, contudo, não se afastam da vida - umas
                            porque usam de fórmulas visíveis e portanto vitais,
                            outras porque vivem da mesma vida humana. Não é o
                            caso da literatura. Essa simula a vida. Um romance é
                            uma história do que nunca foi e um drama é um
                            romance dado sem narrativa. Um poema é a expressão
                            de ideias ou de sentimentos em linguagem que ninguém
                            emprega, pois que ninguém fala em verso. Fernando
                            Pessoa.
                          </p>
                        </div>

                        {/* <FeedCarousel/> */}

                        <Image
                          src={Ceu}
                          className="img-fluid"
                          alt="none"
                          height={600}
                          width={700}
                        />
                      </div>
                    </div>
                  </div>
                
              </div>
            </div>

            </div>


        </div>

    </>
    )
}