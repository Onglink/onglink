"use client";

import Image from "next/image"
import Link from "next/link"
import {Button, Col, Row} from "react-bootstrap"
import logo_onglink_01 from '@/app/img/LOGO_ONGLINK_1.png'
import image_home from '@/app/img/image_home.jpg'
import logo_muxn from '@/app/img/MUXN_logo1.png'
import React from "react";
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
                <div id="sub_div_desc">
                  
                  <Row className="row">
        
                      <Col sm={6} id="div_imagem_home">
                        <Image src={image_home} alt="image_home" className="image_home" width={500} height={300}></Image>
                      </Col>
                      <Col sm={6} id="desc_home">
                          <h4 id="header_vantagens">Por que sua empresa ou ONG deve estar aqui? </h4>
                          <ul id="vantagens">
                              <li>Otimizar investimentos em organizações confiáveis</li>
                              <li>Figurar entre as empresas que se preocupam com causas sociais</li>
                              <li>Promover o bem estar social e o fortalecimento dos direitos sociais</li>
                          </ul>
        
                              <p>
                                Visando otimizar o uso de recursos financeiros da sua empresa e fomentar as organizações não governamentais, 
                                a plataforma ONGlink fornece os recursos e ferramentas ideais para criar a conexão necessária, onde investidores 
                                podem ter a garantia de que seu projeto social terá um melhor aproveitamento de seus recursos e uma maior visibilidade
                                pela sociedade, governo e outras empresas.
                              </p> 
                                
                              <p>
                                A plataforma garante que os investidores possam acompanhar o aproveitamento 
                                dos recursos financeiros, além de oferecer visibilidade para as iniciativas sociais, promovendo uma cultura de responsabilidade 
                                social corporativa. 
                              </p>
        
                              <div id="div_botao">
                                <h4>
                                  Venha fazer parte da ONGLink!
                                </h4>
        
                                <Link href={"/cad_pj"}><Button variant= "success" id="btn_main1"> Cadastre sua Organização! </Button></Link>
                              </div>
                      </Col>
                  </Row>
        
                </div>
              </div>
        
        
        
              <div className="b-example-divider"></div>
        
              <div id="div_nossos_parceiros">
        
                <div id="sub_div_apoiadores">
                    <h3>Nossos Parceiros:</h3>
        
                    <div id="div_apoiadores">
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxmdfTkAvl8uqvjj8M3TUV-n9SkBSZL0kTVOpfRUxaI9X1LtKlfUiOfmHchqZoBkIs-M&usqp=CAU"} alt="Empresa 1" width="200" height="200"></img>
                        <img src={"https://img.freepik.com/vector-premium/logotipo-comercializacion-venta_712682-3297.jpg"} alt="Empresa 2" width="200" height="200"></img>
                        <img src={"https://img.freepik.com/vetores-premium/modelo-do-logotipo-da-caixa-do-estudio_10399-28.jpg"} alt="Empresa 3" width="200" height="200"></img>
                        <img src={"https://img.freepik.com/vetores-premium/logotipo-da-empresa_7436-14.jpg"} alt="Empresa 4" width="200" height="200"></img>
                        <img src={"https://img.freepik.com/vetores-gratis/modelo-de-logotipo-de-dados-gradiente_23-2149200604.jpg"} alt="Empresa 5" width="200" height="200"></img>
                    </div>
                </div>
        
              </div>
        
          
              
            </main>
            
            
        </>
    )
    
}