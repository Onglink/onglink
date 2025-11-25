//novo feed:
"use client";
import Image from "next/image";
import React, { useState, ChangeEvent, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/CSS/feed.css";
import "@/app/CSS/header_alt.css"; // <-- ADICIONADO DE VOLTA

// Imagens e logos (mantidos caso o modal ou feed os usem)
//import MuxnLogo1 from "@/app/img/MUXN_logo1.png";
//import logo_instagram from "@/app/img/icons/instagram_6422200.png";
//import logo_twitter from "@/app/img/icons/twitter_5968830.png";
//import logo_facebook from "@/app/img/icons/social_12942738.png";

import { Button, Modal, Form, FormCheck, Alert } from "react-bootstrap";
import Header_feed from "../components/header_feed"; // <-- ADICIONADO DE VOLTA
//import UploadButton from "../components/button/UploadButton";
import FeedPage from "../components/FeedPage";
import FeedPost from "../components/FeedPost";
import type { ModalProps } from "react-bootstrap";
import PublicarForm from "@/app/components/PublicarForm";
import MenuLat from "../components/menu_lat/menu_lat"; // <-- ADICIONADO DE VOLTA

interface Post {
 title: string;
 message: string;
 image?: File | null;
}

// O nome da função era 'Home', mudei para 'Feed' (mais semântico)
export default function Feed() { 
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
  setFile(null);
  setPreviewUrl(null);
  setShowSucesso(true); 
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

   <main id="main_feed" className="min-vh-100 py-4">
   
   	<ModalDenuncia show={modalShow} onHide={() => setModalShow(false)} />
  
		
		<div className="menu-wrapper">
    	<div className="container-fluid">
    	  <div className="row g-4">
			
				
     		{/* --- COLUNA ESQUERDA (Menu) --- */}
        {/* d-none d-lg-block: Some em mobile/tablet, aparece em Desktop */}
        <div className="col-lg-3 d-none d-lg-block">
            {/* Sticky Wrapper: Faz o menu fixar ao rolar */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <MenuLat />
            </div>
        </div>

     	
     		<div className="col-md-8 col-lg-6 vstack gap-4">
					
				<FeedPage />
					
					
     		</div>

    	  </div>
   	</div>
    </div>
  </main>
 </>
 );
}