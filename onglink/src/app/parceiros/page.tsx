"use client"

import Image from "next/image";
import Link from "next/link"
import {Button, Col, Row, Form, FormLabel, FormControl} from "react-bootstrap"
import logo_onglink_01 from '@/src/app/img/LOGO_ONGLINK_1.png'
import image_home from '@/src/app/img/image_home.jpg'
import logo_muxn from '@/src/app/img/MUXN_logo1.png'
import React from "react";
import { useRouter } from "next/navigation";
import '@/src/app/CSS/home.css'
import '@/src/app/CSS/header_alt.css'
import '@/src/app/CSS/menu.css'
import '@/src/app/CSS/main.css'
import '@/src/app/CSS/body.css'
import '@/src/app/CSS/parceiros.css'
import Header_home from "@/app/components/header_home"

export default function Parceiros() {

    const router = useRouter();

    return (
    <>
 
        
        {/*<!--Header--> */}
        
       <Header_home/>


    
      {/* <!--Main--> */}
      
      <main id="main_parceiros">

        <div className="container-fluid" id="div_cad_ong_tela_1">

          <div id="fundo_navbar">
            <div className="row">

              <div className="col-12">
                <nav id="navbar">
                  <ul>
                    <Link href="/legislacao"><li>Legislação</li></Link>
                    <Link href="/nossa_historia"><li>Nossa História</li></Link>
                    <Link href="/parceiros"><li className="bg-green-700">Parceiros</li></Link>
                  </ul>
                </nav>
              </div>

            </div>
          </div>



            <div id="div_parceiros">
              
              <div className="row">

                <div className="container-fluid" id="sub_div_parceiros">
                    
                    <h2>Nossas Empresas parceiras:</h2>

                    <div id="img_empresas">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxmdfTkAvl8uqvjj8M3TUV-n9SkBSZL0kTVOpfRUxaI9X1LtKlfUiOfmHchqZoBkIs-M&usqp=CAU" alt="Empresa 1" width="200" height="200"></img>
                      <img src="https://img.freepik.com/vector-premium/logotipo-comercializacion-venta_712682-3297.jpg" alt="Empresa 2" width="200" height="200"></img>
                      <img src="https://img.freepik.com/vetores-premium/modelo-do-logotipo-da-caixa-do-estudio_10399-28.jpg" alt="Empresa 3" width="200" height="200"></img>
                      <img src="https://img.freepik.com/vetores-premium/logotipo-da-empresa_7436-14.jpg" alt="Empresa 4" width="200" height="200"></img>
                      <img src="https://img.freepik.com/vetores-gratis/modelo-de-logotipo-de-dados-gradiente_23-2149200604.jpg" alt="Empresa 5" width="200" height="200"></img>
                    </div>


                    <h2>Nossas ONGs parceiras:</h2>

                    <div id="img_ONG">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrkoeJbwTgN-guIzwse1GukoRDQxnwLOb6Q&s" alt="ONG 1" width="200" height="200"></img>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5BHvoSw8GrviF5fAAR_lglGGMb3A9PLPVQ&s" alt="ONG 2" width="200" height="200"></img>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGfY25pju0v7n79WHdaRlniPJ89Sr_5rIqzQ&s" alt="ONG 3" width="200" height="200"></img>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmv4arjlMrbmy2F_BCHREuzBG7hA0KbzCTzw&s" alt="ONG 4" width="200" height="200"></img>
                      <img src="https://i0.wp.com/cdhpf.org.br/wp-content/uploads/2012/03/ong-brasil-logo.jpg?fit=308%2C448&ssl=1" alt="ONG 5" width="150" height="200"></img>
                    </div>
                </div>

              </div>
            </div>

        </div>
    
    </main>

    </>
    
    );
}
