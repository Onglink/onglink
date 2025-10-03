"use client"

import Image from "next/image";
import Link from "next/link"
import {Button, Col, Row, Form} from "react-bootstrap"
import React from "react";
import '@/app/CSS/header_alt.css'
import '@/app/CSS/menu.css'
import '@/app/CSS/main.css'
import '@/app/CSS/body.css'
import '@/app/CSS/cadastro.css'
import Header_home from "@/app/components/header_home"

export default function Login() {
   
    return (
        <>
        
        {/*<!--Header--> */}
          
      <Header_home/>
  
      
        
      <main id="bg_login" className="min-h-screen flex items-center justify-center">
        {/* <!--Main--> */}
        
      
                    {/*<!--Formulario de  cadastro de ONG--> */}
      <div id="caixa_login" className="bg-white rounded-3xl p-6 w-full max-w-4xl">

        <div className="m-4" id="div_login">
          <h1 id="h1_login">Faça seu Login</h1>
             
          
          {/* <!--Divisão email/senha--> */}
          <div className="rowlogin">
              <div id="div_email">
                <Form.Label htmlFor="email">Digite seu e-mail:</Form.Label>
                <p></p>
                <Form.Control className="border-2" type="text" name="nemail" id="email"></Form.Control>
              </div>
          </div>

            <div className="rowlogin">
              <div id="div_senha">
                <Form.Label htmlFor="senha">Digite Senha:</Form.Label>
                <Form.Control className="border-2" type="text" name="senha" id="senha" ></Form.Control>
                <a id="esqueci_senha" href="/recuperar_senha">Esqueci minha senha</a>
              </div>
            </div>
    
            <div className="rowlogin">
              <div className="col-1"></div>
              <div className="col-10" id="div_esqueci">
                
              </div>
              <div className="col-1"></div>
            </div>
    
    
          <div className="row" id="div_entrar">
            <div className="col-1"> </div>
    
            <div className="col-10" id="div_btn_entrar">
            
              <Link href={"/feed"}> <Button id="btn_entrar">Entrar</Button> </Link>
            </div>
          </div>

        </div>

      </div>

      </main>
      
      </>
    )
}
    