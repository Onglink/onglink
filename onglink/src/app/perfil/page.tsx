"use client"

import Header_feed from "../components/header_feed";
import '@/app/CSS/header_alt.css'
import Image from "next/image";
import MuxnLogo1 from '@/app/img/MUXN_logo1.png'
import { Button, Col, Row } from "react-bootstrap";
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
        <div id="container_perfil">
            <div id="perfil">

                <div>

                  <div id="div1_perfil">
                    
                    <div className="img-overlay-wrap">
                      <input type="file" ref={inputFile} className="hidden" />
                      <Image onClick={onImageClick} id="logo_MUXN" className="avatar-img rounded-circle border d-inline"src={MuxnLogo1} alt="logo_muxn" width={150} height={100}/>
                      <svg onClick={onImageClick} id="svg_mudar_pfp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>
                    </div>

                    <div id="info_e_btn" className="border ml-4 flex flex-column items-center">

                        <div id="info_perfil" className="flex mb-4">

                                  <Col>
                                    <div>
                                        <div className="flex">
                                            <h5>Nome:</h5>
                                            <input type="text" />
                                        </div>

                                        <div className="flex">
                                            <h5>Contato:</h5>
                                            <input type="text" />
                                        </div>

                                        <div className="flex">
                                            <h5>Telefone:</h5>
                                            <input type="text" />
                                        </div>

                                        <div className="flex">
                                            <h5>Causa Social:</h5>
                                            <input type="text" />
                                        </div>
                                    </div>
                                  </Col>

                                      <Col>
                                        <div className="flex">
                                            <h5>Rua:</h5>
                                            <input type="text" />
                                        </div>

                                        <div className="flex">
                                            <h5>Número:</h5>
                                            <input type="text" />
                                        </div>
                                        
                                        <div className="flex">
                                            <h5>Bairro:</h5>
                                            <input type="text" />
                                        </div>
                                      </Col>

                                      <Col>
                                        <div className="flex">
                                            <h5>CEP:</h5>
                                            <input type="text" />
                                        </div>

                                        <div className="flex">
                                            <h5>Cidade:</h5>
                                            <input type="text" />
                                        </div>

                                        <div className="flex">
                                            <h5>Estado:</h5>
                                            <input type="text" />
                                        </div>
                                      </Col>
                          
                        </div>
                        
                        <Button id="btn_editar_perfil" href="/editar_perfil"> Editar Dados do Perfil</Button>

                    </div>

                  </div>

                </div>

                
            <div className="flex justify-center">
                <div id="borda_publi">
                  
                  <h3 className="mb-4 text-center" id="title_publi">Publicações</h3>
                  <div id="subdiv_publi" className="d-flex-column align-items-center">

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


        </div>

    </>
    )
}