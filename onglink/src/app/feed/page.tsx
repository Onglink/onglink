"use client";
import Image from "next/image";
import React, { useState, ChangeEvent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/CSS/feed.css";
import "@/app/CSS/header_alt.css";
// import FeedCarousel from "@/app/components/carrousel/carousel";
// import Arara from "@/app/img/arara.jpeg";
// import AraraAzul from "@/app/img/arara_azul.jpeg";
import MuxnLogo1 from "@/app/img/MUXN_logo1.png";
// import Capivara from "@/app/img/capivara.jpeg";
// import Ceu from "@/app/img/ceu.jpeg";
// import Mico from "@/app/img/mico.jpeg";
// import Tucano from "@/app/img/tucano.jpeg";
import logo_instagram from "@/app/img/icons/instagram_6422200.png";
import logo_twitter from "@/app/img/icons/twitter_5968830.png";
import logo_facebook from "@/app/img/icons/social_12942738.png";
import { Button, Modal, Form, FormCheck, Alert } from "react-bootstrap";
import Header_feed from "../components/header_feed";
import UploadButton from "../components/button/UploadButton";
import FeedPage from "../components/FeedPage";
import FeedPost from "../components/FeedPost";
import type { ModalProps } from "react-bootstrap";
import PublicarForm from "@/app/components/PublicarForm";
import MenuLat from "../components/menu_lat/menu_lat";

interface Post {
  title: string;
  message: string;
  image?: File | null;
}


export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (post: Post) => {
    setPosts((prevPosts) => [post, ...prevPosts]);
  };

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showSucesso, setShowSucesso] = useState(false);

  const handleArquivoSelecionado = (arquivo: File) => {
    setFile(arquivo);
    if (arquivo.type.startsWith("image/")) {
      setPreviewUrl(URL.createObjectURL(arquivo));
    }
    // Aqui você decide: salvar no estado, enviar pra API, validar, etc.
  };
  const limparPreview = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  const confirmaArquivoSelecionado = (novoArquivo: File) => {
    setFile(novoArquivo);
    if (novoArquivo.type.startsWith("image/")) {
      const url = URL.createObjectURL(novoArquivo);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  const confirmarEnvio = () => {
    if (!file) return;
    // limpa o preview e o arquivo aqui
    setFile(null);
    setPreviewUrl(null);
    setShowSucesso(true); // se quiser exibir mensagem
    setTimeout(() => setShowSucesso(false), 3000);
  };

  const [modalShow, setModalShow] = React.useState(false);

  function ModalDenuncia(props: ModalProps) {
    function handleClose() {
      setModalShow(false);
      return alert("Denúncia Enviada com Sucesso!");
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Denunciar Publicação
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="mb-3">
            <FormCheck
              className="fs-5"
              type="checkbox"
              label="Conteúdo Ofensivo"
            />
            <FormCheck
              className="fs-5"
              type="checkbox"
              label="Informações Falsas"
            />
            <FormCheck
              className="fs-5"
              type="checkbox"
              label="Violação de Direitos Autorais"
            />
            <FormCheck className="fs-5" type="checkbox" label="Spam" />
          </Form>

          <h5>Diga-nos mais (opcional)</h5>
          <textarea className="border-1" id="text_area_denuncia"></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}> Enviar </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const handleArquivo = (file: File) => {
    console.log("Arquivo recebido:", file.name);
  };
  return (
    <>
      <Header_feed />
      <div className="pt-5" id="main_feed" />
      <main id="main_feed">
        {/* <!--Main-->  */}

        <ModalDenuncia show={modalShow} onHide={() => setModalShow(false)} />
     

<div className="menu-wrapper">
        <div className="container-fluid">
          <div className="row g-4">
                <div className="col-lg-3">
  <div className="menu-lat">
    <MenuLat />
  </div>
</div>

 

            {/* <div className="col-lg-3 ml-5x gap-4">
              <div className="offcanvas-body d-block px-2 px-lg-0">
                <div className="card overflow-hidden">
                  <div className="h-50px" id="menu_perfil">
                    <div id="menu_perfil" className="card-body pt-0 mt-3">
                      <div className="text-center">
                        <div className="avatar avatar-lg mt-n5 mb-3">
                          <a href="/perfil">
                            {" "}
                            <Image
                              className="avatar-img rounded-circle border d-inline"
                              src={MuxnLogo1}
                              alt="logo_muxn"
                              width={100}
                              height={100}
                            />
                          </a>
                        </div>

                        <h5 className="mb-0"> MUXN </h5>
                        <small>Tecnologia</small>
                        <p className="mt-3">
                          Por um planeta melhor através da tecnologia.{" "}
                        </p>

                        <div className="hstack gap-2 gap-xl-3 justify-content-center">
                          <div>
                            <h6 className="mb-0">3</h6>
                            <small>Projetos Apoiados</small>
                          </div>
                        </div>

                        <div>
                          <small> Contato +55 (15) 3333-3333</small>
                        </div>
                        <div>
                          <small> contato@muxn.com.br</small>
                        </div>
                        <div>
                          <ul className="list-unstyled d-flex justify-content-center">
                            <li className="">
                              <a
                                className="link-body-emphasis"
                                href="https://x.com/?lang=pt-br"
                              >
                                <Image
                                  src={logo_twitter}
                                  alt=""
                                  className="bi"
                                  width={24}
                                  height={24}
                                />
                              </a>
                            </li>
                            <li className="ms-3">
                              <a
                                className="link-body-emphasis"
                                href="https://www.instagram.com/"
                              >
                                <Image
                                  src={logo_instagram}
                                  alt=""
                                  className="bi"
                                  width={24}
                                  height={24}
                                ></Image>
                              </a>
                            </li>
                            <li className="ms-3">
                              <a
                                className="link-body-emphasis"
                                href="https://www.facebook.com/"
                              >
                                <Image
                                  src={logo_facebook}
                                  alt=""
                                  className="bi"
                                  width={24}
                                  height={24}
                                ></Image>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/*FIM DO MENU LATERAL*/}

            {/* </div>   *******************************************************************   */}
            <div className="col-md-8 col-lg-6 vstack gap-4">
              {/* //PUBLICAR NO FEED */}
                <div id="div_feed">
                 <div className="p-3">
                <PublicarForm onPublish={addPost} />
                </div>
                </div>

                <FeedPage posts={posts} />

                {/* <FeedPage /> */}
              
            </div>
          </div>
        </div>
        </div>
      </main>
    </>
  );
}
