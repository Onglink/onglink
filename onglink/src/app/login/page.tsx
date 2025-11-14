// "use client"

// import Image from "next/image";
// import Link from "next/link"
// import {Button, Col, Row, Form} from "react-bootstrap"
// import React from "react";
// import '@/app/CSS/header_alt.css'
// import '@/app/CSS/menu.css'
// import '@/app/CSS/main.css'
// import '@/app/CSS/body.css'
// import '@/app/CSS/cadastro.css'
// import Header_home from "@/app/components/header_home"
// import '@/app/CSS/feed.css'

// export default function Login() {
   
//     return (
//         <>
        
//         {/*<!--Header--> */}
          
//       <Header_home/>
  
      
        
//       <main id="bg_login" className="min-h-screen flex items-center justify-center">
//         {/* <!--Main--> */}
        
      
//                     {/*<!--Formulario de  cadastro de ONG--> */}
//       <div id="caixa_login" className="bg-white rounded-3xl p-6 w-full max-w-4xl">

//         <div className="m-4" id="div_login">
//           <h1 id="h1_login">Faça seu Login</h1>
             
          
//           {/* <!--Divisão email/senha--> */}
//           <div className="rowlogin">
//               <div id="div_email">
//                 <Form.Label htmlFor="email">Digite seu e-mail:</Form.Label>
//                 <p></p>
//                 <Form.Control className="border-2" type="text" name="nemail" id="email"></Form.Control>
//               </div>
//           </div>

//             <div className="rowlogin">
//               <div id="div_senha">
//                 <Form.Label htmlFor="senha">Digite Senha:</Form.Label>
//                 <Form.Control className="border-2" type="text" name="senha" id="senha" ></Form.Control>
//                 <a id="esqueci_senha" href="/recuperar_senha">Esqueci minha senha</a>
//               </div>
//             </div>
    
//             <div className="rowlogin">
//               <div className="col-1"></div>
//               <div className="col-10" id="div_esqueci">
                
//               </div>
//               <div className="col-1"></div>
//             </div>
    
    
//           <div className="row" id="div_entrar">
//             <div className="col-1"> </div>
    
//             <div className="col-10" id="div_btn_entrar">
            
//               <Link href={"/feed"}> <Button id="btn_entrar">Entrar</Button> </Link>
//             </div>
//           </div>

//         </div>

//       </div>

//       </main>
      
//       </>
//     )
// }
    

// novo login abaixo:
"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, Alert, Spinner, Form as BootstrapForm } from 'react-bootstrap'; // Renomeei Form para evitar conflito com Formik
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from 'yup';
import Link from "next/link";

 import Header_home from "@/app/components/header_home";
 import '@/app/CSS/header_alt.css'
 import '@/app/CSS/menu.css'
 import '@/app/CSS/main.css'
 import '@/app/CSS/body.css'
 import '@/app/CSS/cadastro.css'
 import '@/app/CSS/feed.css'
 import usuarioService from "@/app/services/usuarioService";
// =====================================================================

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
    senha: Yup.string().required('Campo obrigatório')
});

export default function Login() {
    const router = useRouter();
    const [loginError, setLoginError] = useState(null);

    const handleLogin = async (values: any, { setSubmitting }: any) => {
        setLoginError(null);
        try {
            const response = await usuarioService.loginUsuario(values);
            console.log("Login bem-sucedido:", response);

            // Salva os dados do usuário no localStorage
            localStorage.setItem('authToken', response.token); // O token      
            localStorage.setItem('usuarioLogado', JSON.stringify(response.usuario));
            
            // Redireciona para o Feed
            router.push('/feed'); 

        } catch (error:any) {
            console.error("Erro no login:", error);
            const mensagem = error.response?.data?.error || error.response?.data?.message || "Falha ao realizar login.";
            setLoginError(mensagem);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
        <Header_home/>
        
        <main id="bg_login" className="min-h-screen flex items-center justify-center" style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#D0E2E9'}}>
            <div id="caixa_login" className="bg-white rounded-4 p-3 shadow w-100" style={{maxWidth: '500px'}}>
                
                <div className="m-4" id="div_login">
                    <h1 id="h1_login" className="text-center mb-4 fw-bold ">Faça seu Login</h1>
                    
                    {loginError && <Alert variant="danger" onClose={() => setLoginError(null)} dismissible>{loginError}</Alert>}

                    <Formik 
                        initialValues={{ email: '', senha: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleLogin}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                {/* Email */}
                                <div className="rowlogin mb-3">
                                    <div id="div_email" className="w-100">
                                        <BootstrapForm.Label htmlFor="email" className="fw-semibold">Digite seu e-mail:</BootstrapForm.Label>
                                        <Field 
                                            as={BootstrapForm.Control} 
                                            className="border-2 form-control-lg" 
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            placeholder="seu@email.com"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-danger small mt-1"/>
                                    </div>
                                </div>

                                {/* Senha */}
                                <div className="rowlogin mb-4">
                                    <div id="div_senha" className="w-100">
                                        <BootstrapForm.Label htmlFor="senha" className="fw-semibold">Digite sua senha:</BootstrapForm.Label>
                                        <Field 
                                            as={BootstrapForm.Control} 
                                            className="border-2 form-control-lg" 
                                            type="password" 
                                            name="senha" 
                                            id="senha" 
                                            placeholder="********" 
                                        />
                                        <ErrorMessage name="senha" component="div" className="text-danger small mt-1"/>
                                        <div className="text-end mt-2">
                                            <Link id="esqueci_senha" href="/recuperar_senha" className="text-success text-decoration-none small">
                                                Esqueci minha senha
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                    
                                {/* Botão Entrar */}
                                <div className="row" id="div_entrar">
                                    <div className="col-12" id="div_btn_entrar">
                                        <Button 
                                            type="submit" 
                                            id="btn_entrar" 
                                            variant="success" 
                                            size="lg" 
                                            className="w-100 fw-bold" 
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                                                    Entrando...
                                                </>
                                            ) : (
                                                "Entrar"
                                            )}
                                        </Button>
                                    </div>
                                </div>

                            </Form>
                        )}
                    </Formik>

                </div>
            </div>
        </main>
        </>
    )
}