"use client";

import Image from "next/image"
import Link from "next/link"
import {Button, Col, Row} from "react-bootstrap"
import logo_onglink_01 from '@/app/img/LOGO_ONGLINK_1.png'
import image_home from '@/app/img/image_home.jpg'
import logo_muxn from '@/app/img/MUXN_logo1.png'
import React from "react";
import planetilson from '@/app/img/gb1png 1.png'
import planetilson_pintor from '@/app/img/gb2png 2.png'
import planetilson3 from '@/app/img/gb3.png'
import '@/app/CSS/home.css'
import '@/app/CSS/header_alt.css'
import '@/app/CSS/menu.css'
import '@/app/CSS/main.css'
import '@/app/CSS/body.css'
import Header_home from "@/app/components/header_home"


export default function Home() {

  return (
        <>
        
        <Header_home/>
        
        
            <main className="main_home">
              {/*<!--Main-->*/}
        
              <div className="main1">
                  
                  <Row className="row mt-5 mb-8" id="row1">
        
                      <Col sm={6} id="div_imagem_home">
                        <Image alt="" src={planetilson} width={1000}></Image>
                      </Col>
                      <Col sm={6} id="desc_home">

                          <h4> O apoio que sua ONG precisa! </h4>

                          <p>
                            Venha conhecer a Onglink, 
                            plataforma desenvolvida para você
                            poder consultar as entidades de 
                            apoio social e ONG’s.
                            Nossa missão é ter aqui na plataforma, 
                            entidades certificadas e de real atuação 
                            no mercado.
                            Clique aqui para se cadastrar e nos 
                            ajudar a divulgar o link do bem.  
                          </p>
                      </Col>
                  </Row>


                  <Row className="row" id="row2">
                      <Col>
                        <h4>Por que se juntar à ONGlink?</h4>

                        <ul id="vantagens">
                            <li>Otimizar investimentos em organizações confiáveis</li>
                            <li>Figurar entre as empresas que se preocupam com causas sociais</li>
                            <li>Promover o bem estar social e o fortalecimento dos direitos sociais</li>
                        </ul>
                      </Col>
                      
                      <Col>
                        <Image alt="" src={planetilson_pintor}></Image>
                      </Col>
                  </Row>

                  <Row className="row" id="row3">
                    <Col>
                      <Image alt="" src={planetilson3} width={1000} id="planetilson3"></Image>
                    </Col>

                    <Col>
                      <div id="div_botao" className="text-center">
                        <h4>Junte-se à ONGlink!</h4>

                        <p>
                          Venha fazer parte da ONGLink, e se junte com os nossos outros parceiros na plataforma.
                        </p>

                        <Link href={"/cad_pj"}>
                          <Button
                              id="botao_cadastro2"
                            >
                              Cadastre-se
                          </Button>
                        </Link>

                          <p> ou </p>

                        <Link className="mt-0" href={"/feed"}>
                          <Button
                              id="botao_cadastro2"
                            >
                              Entre como visitante
                          </Button>
                        </Link>
                          
                      </div>
                    </Col>

                  </Row>

                <div id="div_nossos_parceiros">
          
                      <h3>Nossos Parceiros:</h3>
          
                      <div id="div_apoiadores">
                          <img className="border-3 border-blue-500 rounded-xl" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxmdfTkAvl8uqvjj8M3TUV-n9SkBSZL0kTVOpfRUxaI9X1LtKlfUiOfmHchqZoBkIs-M&usqp=CAU"} alt="Empresa 1" width="200" height="200"></img>
                          <img className="border-3 border-yellow-300 rounded-xl" src={"https://img.freepik.com/vector-premium/logotipo-comercializacion-venta_712682-3297.jpg"} alt="Empresa 2" width="200" height="200"></img>
                          <img className="border-3 border-red-500 rounded-xl" src={"https://img.freepik.com/vetores-premium/modelo-do-logotipo-da-caixa-do-estudio_10399-28.jpg"} alt="Empresa 3" width="200" height="200"></img>
                          <img className="border-3 border-green-500 rounded-xl" src={"https://img.freepik.com/vetores-premium/logotipo-da-empresa_7436-14.jpg"} alt="Empresa 4" width="200" height="200"></img>
                      </div>
          
                </div>

              </div>
        
          
              
            </main>
            
            
        </>
    )
    
}