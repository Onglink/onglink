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
import '@/src/app/CSS/legislacao.css'
import Header_home from "@/src/app/components/header_home"

export default function Legislacao() {
    
    const router = useRouter();

    return (
      <>

    {/* <!--Header--> */}

        <Header_home/>

    <main id="main_legislacao">

      {/* <!--Main--> */}
      
       {/* <!--links para outras páginas--> */}

      <div className="container-fluid">

        <div id="fundo_navbar">

            <div className="col-12">
              <nav id="navbar">
                <ul>
                  <Link href="/legislacao"><li className="bg-green-700">Legislação</li></Link>
                  <Link href="/nossa_historia"> <li>Nossa História</li></Link>
                  <Link href="/parceiros"><li>Parceiros</li></Link>
                </ul>
              </nav>
            </div>

        </div>



        {/* <!--Titulo Texto--> */}
        <div id="fundo_main">
      
          {/* <!--texto legislacao--> */}
          <div className="row">
            <div className="col-6" id="texto_leidobem">
              
              <h2>Entenda mais sobre a Lei do Bem</h2>

              <p>Cada vez mais as organizações buscam soluções para aumentar seu grau de inovação, sua produtividade e sua competitividade. Assim como adotam estratégias planejadas para reduzir custos empresariais, otimizar as etapas de produção e aprimorar processos.

                O investimento das organizações em atividades de Pesquisa e Desenvolvimento (P&D) suportadas por projetos que busquem desvendar os desafios tecnológicos reflete diretamente na geração de empregos especializados e no desenvolvimento e na competitividade do País.
              </p>
              
            </div>


            <div className="col-6" id="img_leidobem">
              <img src="https://static.wixstatic.com/media/35b3c3_674cd3829c7d49c48fa16d73e57b9275~mv2.jpg/v1/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/businessman-with-a-light-bulb-in-his-hand_edited.jpg" alt="" width="400" height="390"></img>
            </div>
          </div>

        <div className="row">
            <div className="col-6" id="div_p2">
              <p id="paragrafo2">
                Em complemento aos investimentos das companhias, os incentivos fiscais que estimulam as atividades de Pesquisa, Desenvolvimento e Inovação tecnológica (PD&I) são instrumentos importantes para promover o desenvolvimento dos setores produtivos, estimulando a inovação e compartilhando o risco tecnológico inerente ao processo de inovar.
                
                Nesse contexto, a Lei nº 11.196/2005, conhecida como a Lei do Bem, regulamentado pelo Decreto nº 5.798, de 7 de junho de 2006, é considerada o principal instrumento de estímulo às atividades de PD&I nas empresas brasileiras. Isso porque oferece a estas, em seu Capítulo III, a possibilidade de uso de alguns incentivos fiscais, abarcando todos os setores da economia e regiões do país. Contribui, assim, efetivamente para a inovação, o desenvolvimento da capacidade técnico-produtiva das empresas e o aumento do valor agregado da produção de bens e serviços.
              </p>
              
              <a href="https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/lei-do-bem/paginas/o-que-e-a-lei-do-bem">https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/lei-do-bem/paginas/o-que-e-a-lei-do-bem</a>
            </div>
        </div>
          

        </div>
      </div>
      
      
    </main>

    </>

    );
}
    