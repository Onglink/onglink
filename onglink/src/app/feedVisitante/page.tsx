"use client";
import Image from "next/image";
import React, { useState, ChangeEvent, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/CSS/feedVisitante.css";
import "@/app/CSS/header_alt.css";
import MuxnLogo1 from "@/app/img/MUXN_logo1.png";
import logo_instagram from "@/app/img/icons/instagram_6422200.png";
import logo_twitter from "@/app/img/icons/twitter_5968830.png";
import logo_facebook from "@/app/img/icons/social_12942738.png";
import { Button, Modal, Form, FormCheck, Alert } from "react-bootstrap";
import Header_home from "../components/header_home";
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
      <Header_home/>
      <div className="pt-3" id="main_feed" />
      <main id="main_feed">
        {/* <!--Main-->  */}

        <ModalDenuncia show={modalShow} onHide={() => setModalShow(false)} />

        {/* <div className="menu-wrapper"> */}
          <div className="container-fluid align-content-center col-7">
            {/* <div className="row g-4"> */}
              {/* <div > */}
                {/* <div className="menu-lat"> */}
                    {/* <MenuLat /> */}
                {/* </div> */}
              {/* </div> */}

              {/*FIM DO MENU LATERAL*/}

              {/* </div>   *******************************************************************   */}
              <div className="vstack gap-4 mb-3">
                {/* //PUBLICAR NO FEED */}
                <div id="div_feed" className="pr-4 pl-4">
                  <FeedPage />
                </div>
              </div>
            </div>
          {/* </div> */}
        {/* </div> */} 
      </main>
    </>
  );
}
