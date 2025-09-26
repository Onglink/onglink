"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Col,
  Row,
  Form,
  FormLabel,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import logo_onglink_01 from "@/app/img/LOGO_ONGLINK_1.png";
import image_home from "@/app/img/image_home.jpg";
import logo_muxn from "@/app/img/MUXN_logo1.png";
import React from "react";
import { useRouter } from "next/navigation";
import "@/app/CSS/home.css";
import "@/app/CSS/header_alt.css";
import "@/app/CSS/menu.css";
import "@/app/CSS/main.css";
import "@/app/CSS/body.css";
import "@/app/CSS/parceiros.css";
import Header_home from "@/app/components/header_home";
import CardsParceiros from "@/app/components/card_parceiros";
import arara from "@/app/img/arara.jpeg";

export default function Parceiros() {
  const router = useRouter();

  return (
    <>
      {/*<!--Header--> */}

      <Header_home />

      {/* <!--Main--> */}

      <main id="main_parceiros">
        <div className="" id="page_title">
          <h1>NOSSOS PARCEIROS</h1>
        </div>

        <div className="container-fluid col-12">
          <form className="form-busca" role="search">
            <InputGroup id="ong_busca">
              <Form.Control
                placeholder="Procurar ONG"
                aria-label="Procurar ONG"
                aria-describedby="basic-addon2"
                className="input-busca"
              />
              <Button id="botaoBuscar" className="btn-busca">
                Buscar
              </Button>
            </InputGroup>
          </form>

          <div id="fundo_navbar">
            <div className="row">
              <div className="col-12">
                <nav id="navbar">
                  <ul id="items_list">
                    <Link href="/">
                      <li>Meio ambiente</li>
                    </Link>
                    <Link href="/">
                      <li>Saúde</li>
                    </Link>
                    <Link href="/">
                      <li>Educação</li>
                    </Link>
                    <Link href="/">
                      <li>Exibir todos</li>
                    </Link>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div id="div_parceiros">
            <div className="row">
              <div className="container-fluid">
                <h2>PARCEIROS DA EDUCAÇÃO</h2>
                <div className="d-flex " id="educacao">
                    <CardsParceiros
                    titulo="Outra ONG"
                    imagem={arara}
                    resumo="prévia."
                    link="/"
                  />

                  <CardsParceiros
                    titulo="Outra ONG"
                    imagem={logo_muxn}
                    resumo="prévia."
                    link="/"
                  />
                  <div className="d-flex align-items-center justify-content-end">
                  <button id="educacao"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></button>
</div>
                </div>

                <h2>PARCEIROS CONTRA A FOME</h2>
                <div className="d-flex " id="fome">
                  <CardsParceiros
                    titulo="Outra ONG"
                    imagem={logo_muxn}
                    resumo="prévia."
                    link="/"
                  />

                  <CardsParceiros
                    titulo="Outra ONG"
                    imagem={logo_muxn}
                    resumo="prévia."
                    link="/"
                  />
                </div>

                <h2>PARCEIROS DA SAÚDE</h2>
                <div className="d-flex " id="saude">
                  <CardsParceiros
                    titulo="Outra ONG"
                    imagem={logo_muxn}
                    resumo="prévia."
                    link="/"
                  />

                  <CardsParceiros
                    titulo="Outra ONG"
                    imagem={logo_muxn}
                    resumo="prévia."
                    link="/"
                  />
                </div>

                <h2>PARCEIROS DO MEIO AMBIENTE</h2>
                <div className="d-flex " id="meio_ambiente">
                  <CardsParceiros
                    titulo="Outra ONG"
                    imagem={logo_muxn}
                    resumo="prévia."
                    link="/"
                  />

                  <CardsParceiros
                    titulo="Outra ONG"
                    imagem={logo_muxn}
                    resumo="prévia."
                    link="/"
                  />
                </div>

                <h2>PARCEIROS DOS ANIMAIS</h2>
                <div className="d-flex " id="animais">
                  <CardsParceiros
                    titulo="Outra ONG"
                    imagem={logo_muxn}
                    resumo="prévia."
                    link="/"
                  />

                  <CardsParceiros
                    titulo="Outra ONG"
                    imagem={logo_muxn}
                    resumo="prévia."
                    link="/"
                  />
                </div>

                <h2>PARCEIROS DA SOCIEDADE</h2>
                <div className="d-flex " id="sociedade">
                  <CardsParceiros
                    titulo="Outra ONG"
                    imagem={logo_muxn}
                    resumo="prévia."
                    link="/"
                  />

                  <CardsParceiros
                    titulo="Outra ONG"
                    imagem={logo_muxn}
                    resumo="prévia."
                    link="/"
                  />
                </div>

                <h2>PARCEIROS DAS CRIANÇAS</h2>
                <div className="d-flex " id="criancas">
                  <CardsParceiros
                    titulo="Outra ONG"
                    imagem={logo_muxn}
                    resumo="prévia."
                    link="/"
                  />

                  <CardsParceiros
                    titulo="Outra ONG"
                    imagem={logo_muxn}
                    resumo="prévia."
                    link="/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
