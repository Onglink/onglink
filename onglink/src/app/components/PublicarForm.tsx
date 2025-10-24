'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Form, Modal, FormCheck, ModalProps } from 'react-bootstrap';
import MuxnLogo1 from '@/app/img/MUXN_logo1.png';
import NeWUploadButton from './button/NewUploadButton';
import { criarPublicacao } from '@/app/feed/publicacaoService';
import { uploadImagemParaCloudinary } from '@/app/components/uploadImage/uploadImage';

interface PublicarFormProps {
  onPublish: (post: any) => void;
}

export default function PublicarForm({ onPublish }: PublicarFormProps) {
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [imagem, setImagem] = useState<File | null>(null);
  const [modalShow, setModalShow] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  let imagemUrl = '';
  if (imagem) {
    try {
      imagemUrl = await uploadImagemParaCloudinary(imagem);
    } catch (err) {
      console.error('Erro ao fazer upload da imagem:', err);
    }
  


    const novaPublicacao = {
    CodPubli: Math.floor(Math.random() * 100000),
    Titulo: titulo,
    Texto: texto,
    Imagens: imagemUrl ? [imagemUrl] : [],
    CodUsuario: 9999,
  };

  try {
    const resultado = await criarPublicacao(novaPublicacao);
    onPublish(resultado);
    setTitulo('');
    setTexto('');
    setImagem(null);
    setSucesso(true);
    setTimeout(() => setSucesso(false), 3000);
  } catch (err) {
    console.error('Erro ao publicar:', err);
  }
};

  };

  function ModalDenuncia(props: ModalProps) {
    function handleClose() {
      setModalShow(false);
      alert('Denúncia Enviada com Sucesso!');
    }

    return (
      <Modal {...props} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Denunciar Publicação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="mb-3">
            <FormCheck type="checkbox" label="Conteúdo Ofensivo" />
            <FormCheck type="checkbox" label="Informações Falsas" />
            <FormCheck type="checkbox" label="Violação de Direitos Autorais" />
            <FormCheck type="checkbox" label="Spam" />
          </Form>
          <h5>Diga-nos mais (opcional)</h5>
          <textarea className="form-control" id="text_area_denuncia" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Enviar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <ModalDenuncia show={modalShow} onHide={() => setModalShow(false)} />

      <div className="container-fluid col-12 vstack gap-4 p-0">
        <div className="d-flex mt-3 mb-3">
          <div className="avatar avatar-xs me-2" style={{ minWidth: '60px' }}>
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

          <div className="container mt-0">
            <div className="mb-2">
              <label htmlFor="titulo" className="form-label fw-bold">
                Título da publicação
              </label>
              <textarea
                className="form-control"
                rows={1}
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = `${target.scrollHeight}px`;
                }}
                style={{ resize: 'none', overflow: 'hidden' }}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="conteudo" className="form-label fw-bold">
                Conteúdo da publicação
              </label>
              <textarea
                className="form-control"
                rows={5}
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = `${target.scrollHeight}px`;
                }}
                style={{ resize: 'none', overflow: 'hidden' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="div_botoes_publi" className="d-flex align-items-center gap-3 mt-3">
        <button type="submit" className="btn btn-success" title="Enviar">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-send-check" viewBox="0 0 16 16">
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363 1.591 6.602z" />
            <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686" />
          </svg>
        </button>

        <NeWUploadButton
          title="Selecionar imagem"
          label={
            <span className="d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16" style={{ marginRight: 8 }}>
                <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
              </svg>
              <i className="bi bi-image" style={{ marginRight: 8 }}></i>
            </span>
          }
          variant="success"
          onFileSelect={(file) => setImagem(file)}
        />

        {imagem && <span className="ms-2">{imagem.name}</span>}
      </div>

      {sucesso && <p className="text-success mt-3">✅ Publicação enviada com sucesso!</p>}
    </form>
  );
}