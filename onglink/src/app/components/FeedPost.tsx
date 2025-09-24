"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import MuxnLogo1 from "@/app/img/MUXN_logo1.png";
import { Button, Modal, Form, FormCheck, ModalProps } from "react-bootstrap";
import "@/app/CSS/feed.css"

interface Post {
  title: string;
  message: string;
  image?: File | null;
}

interface FeedPostProps {
  post: Post;
}

const FeedPost: FC<FeedPostProps> = ({ post }) => {
    const [modalShow, setModalShow] = useState(false);
  const imageURL = post.image ? URL.createObjectURL(post.image) : null;
  
  function ModalDenuncia(props:ModalProps) {
      function handleClose(){
        setModalShow(false);
        return(
          alert("Denúncia Enviada com Sucesso!"));
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
              <FormCheck className="fs-5" type="checkbox" label="Conteúdo Ofensivo" />
              <FormCheck className="fs-5" type="checkbox" label="Informações Falsas" />
              <FormCheck className="fs-5" type="checkbox" label="Violação de Direitos Autorais" />
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


  return (
  <>
  <div className="mb-2" id="div_feed">
      <ModalDenuncia show={modalShow} onHide={() => setModalShow(false)} />
 <div style={{ backgroundColor: "#D0E2E9" }}  
 className="container-fluid col-11 vstack gap-4 p-3 rounded-4 mt-2 mb-2"
 id="borda">
      
    <div className="feed-item mb-3 d-flex align-items-start">
      
      {/* Avatar */}
      <div className="avatar avatar-xs me-2 "
      style={{ minWidth: "60px" }}>
        <a href="#">
          <Image
            className="avatar-img rounded-circle"
            src={MuxnLogo1}
            alt="Avatar"
            height={60}
            width={60}
          />
        </a>
      </div>

      {/* Conteúdo da Postagem */}
     <div className="feed-content h-100 w-100">
        <h3>{post.title}</h3>
        <p>{post.message}</p>
        {imageURL && (
          <div>
            <img
              src={imageURL}
              alt="Imagem da publicação"
              style={{ maxWidth: "auto", marginTop: 8, height:"auto"}}
              
              
            />
          </div>
        )}
        <div id="div_botoes" className=" h-100 w-100 justify-content-center">
                        {/* <Button variant="success" title="Curtir">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                           strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-heart-icon lucide-heart"
                          >
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                          </svg>
                        </Button> */}
                        <Button variant="info" title="Compartilhar">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                           strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-share2-icon lucide-share-2"
                          >
                            <circle cx="18" cy="5" r="3" />
                            <circle cx="6" cy="12" r="3" />
                            <circle cx="18" cy="19" r="3" />
                            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                          </svg>
                        </Button>
                        {/* <Button variant="success" title="Comentar">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                           strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-message-circle-icon lucide-message-circle"
                          >
                            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                          </svg>
                        </Button> */}
                        {/* <Button variant="success" title="Apoiar">
                          <a href="/apoio">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="35"
                              height="35"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                             strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-heart-handshake-icon lucide-heart-handshake"
                            >
                              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                              <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                              <path d="m18 15-2-2" />
                              <path d="m15 18-2-2" />
                            </svg>
                          </a>
                        </Button> */}
                        <Button title="Denunciar" variant="info" onClick={() => setModalShow(true)}>
                            <svg 
                              xmlns="http://www.w3.org/2000/svg"
                              width="35" height="35"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                             strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-message-square-warning-icon lucide-message-square-warning"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                              <path d="M12 7v2"/>
                              <path d="M12 13h.01"/>
                            </svg>
                          </Button>
                      </div>
      </div>
      </div>
                      
    </div>
    {/* <div id="componente_feedpage"></div> */}
    </div>
    </>
  );
};

export default FeedPost;