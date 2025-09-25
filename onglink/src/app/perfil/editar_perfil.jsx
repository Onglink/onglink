import Image from "next/image";
import MuxnLogo1 from '@/app/img/MUXN_logo1.png'
import { Button, Col, Modal, Form } from "react-bootstrap";
import { useRef, useState } from "react";


export default function Modal_Editar_Perfil() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <Button id="btn_editar_perfil" onClick={handleShow}> Editar Dados do Perfil</Button>


        <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dados do Perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="form_editar" className="flex flex-row justify-around">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="nome"
                autoFocus
              />

              <Form.Label>Contato</Form.Label>
              <Form.Control
                type="nome"
                autoFocus
              />

              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="nome"
                autoFocus
              />

              <Form.Label>Causa Social</Form.Label>
              <Form.Control
                type="nome"
                autoFocus
              />
             
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              
              <Form.Label>Rua</Form.Label>
              <Form.Control
                type="nome"
                autoFocus
              />
              
              <Form.Label>Número</Form.Label>
              <Form.Control
                type="nome"
                autoFocus
              />

              <Form.Label>Bairro</Form.Label>
              <Form.Control
                type="nome"
                autoFocus
              />

              <Form.Label>CEP</Form.Label>
              <Form.Control
                type="nome"
                autoFocus
              />

              <Form.Label>Cidade</Form.Label>
              <Form.Control
                type="nome"
                autoFocus
              />

              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="nome"
                autoFocus
              />

            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button id="btn_editar_perfil" onClick={handleClose}> Salvar </Button>
            <Button id="btn_cancelar" onClick={handleClose}> Cancelar </Button>
        </Modal.Footer>
      </Modal>


        {/* // <div id="div1_perfil">


        // <div id="info_e_btn" className="border ml-4 flex flex-column items-center">

        //     <div id="info_perfil" className="flex mb-4">

        //                 <Col>
        //                 <div>
        //                     <div className="flex">
        //                         <h5>Nome:</h5>
        //                         <input type="text" />
        //                     </div>

        //                     <div className="flex">
        //                         <h5>Contato:</h5>
        //                         <input type="text" />
        //                     </div>

        //                     <div className="flex">
        //                         <h5>Telefone:</h5>
        //                         <input type="text" />
        //                     </div>

        //                     <div className="flex">
        //                         <h5>Causa Social:</h5>
        //                         <input type="text" />
        //                     </div>
        //                 </div>
        //                 </Col>

        //                     <Col>
        //                     <div className="flex">
        //                         <h5>Rua:</h5>
        //                         <input type="text" />
        //                     </div>

        //                     <div className="flex">
        //                         <h5>Número:</h5>
        //                         <input type="text" />
        //                     </div>
                            
        //                     <div className="flex">
        //                         <h5>Bairro:</h5>
        //                         <input type="text" />
        //                     </div>
        //                     </Col>

        //                     <Col>
        //                     <div className="flex">
        //                         <h5>CEP:</h5>
        //                         <input type="text" />
        //                     </div>

        //                     <div className="flex">
        //                         <h5>Cidade:</h5>
        //                         <input type="text" />
        //                     </div>

        //                     <div className="flex">
        //                         <h5>Estado:</h5>
        //                         <input type="text" />
        //                     </div>
        //                     </Col>
                
        //     </div>
            
        //     <Button id="btn_editar_perfil" href="/editar_perfil"> Salvar </Button>
        //     <Button id="btn_editar_perfil" href="/editar_perfil"> Cancelar </Button>

        // </div>

        // </div> */}

        </>
        );
    }