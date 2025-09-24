import Image from "next/image";
import MuxnLogo1 from '@/app/img/MUXN_logo1.png'
import { Button, Col } from "react-bootstrap";
import { useRef } from "react";

function Barra_Editar_perfil() {



    return(
        <div id="div1_perfil">


        <div id="info_e_btn" className="border ml-4 flex flex-column items-center">

            <div id="info_perfil" className="flex mb-4">

                        <Col>
                        <div>
                            <div className="flex">
                                <h5>Nome:</h5>
                                <input type="text" />
                            </div>

                            <div className="flex">
                                <h5>Contato:</h5>
                                <input type="text" />
                            </div>

                            <div className="flex">
                                <h5>Telefone:</h5>
                                <input type="text" />
                            </div>

                            <div className="flex">
                                <h5>Causa Social:</h5>
                                <input type="text" />
                            </div>
                        </div>
                        </Col>

                            <Col>
                            <div className="flex">
                                <h5>Rua:</h5>
                                <input type="text" />
                            </div>

                            <div className="flex">
                                <h5>Número:</h5>
                                <input type="text" />
                            </div>
                            
                            <div className="flex">
                                <h5>Bairro:</h5>
                                <input type="text" />
                            </div>
                            </Col>

                            <Col>
                            <div className="flex">
                                <h5>CEP:</h5>
                                <input type="text" />
                            </div>

                            <div className="flex">
                                <h5>Cidade:</h5>
                                <input type="text" />
                            </div>

                            <div className="flex">
                                <h5>Estado:</h5>
                                <input type="text" />
                            </div>
                            </Col>
                
            </div>
            
            <Button id="btn_editar_perfil" href="/editar_perfil"> Salvar </Button>
            <Button id="btn_editar_perfil" href="/editar_perfil"> Cancelar </Button>

        </div>

        </div>
        );
    }

export default function Editar_Perfil() {
    document.getElementById("btn_editar_perfil").hidden = true;
    document.getElementById("div_editar_perfil").append(Barra_Editar_perfil());
}