'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header_home from "@/app/components/header_home";
import '@/app/CSS/home.css'
import '@/app/CSS/cadastro.css'
import '@/app/CSS/header_alt.css'
import { Button } from 'react-bootstrap';
import { CepResponse, getCepData } from '../services/cep';
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { ErrorMessage } from "formik";

const validationSchema = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório'),
    cpf: Yup.string().required('Campo Obrigatório'),
    email: Yup.string().email('Digite o email válido').required('Campo Obrigatório'),
    senha: Yup.string().required('Campo Obrigatório'),
    confirmarSenha: Yup.string().required('Campo Obrigatório')
   
    
});



export default function CadastroSimplesPessoaFisica() {
    const router = useRouter();
    const initialValues = {
        nome: '',
        cpf: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    };

    


    return (
        <>
        <Header_home/>
        <body className='bg-verde1'>
            <main id='bg_cadastro' className="min-h-screen flex items-center justify-center">
                <div id='caixa_cadastro' className="bg-white rounded-3xl p-6 w-full max-w-4xl">   
                    <h1 className="text-center" id='h1_cadastro'>Cadastro</h1>
                    <Formik 
                        initialValues={initialValues}
                        onSubmit={values => {
                            console.log(values);
                            // Redireciona para a página de login após o cadastro
                            router.push('/login');
                        }}
                        validationSchema={validationSchema}
                    >
                        {({ handleSubmit, setFieldValue, values }) => (
                            <Form className='p-3' onSubmit={handleSubmit}>  
                                <div>
                                    {/* Nome do Usuário */}
                                    <div className="mb-4">
                                        <label htmlFor="nome" className="block mb-1">
                                            Nome do usuario <span className="text-red-500">*</span>
                                        </label>
                                        <Field 
                                            type="text" 
                                            name="nome" 
                                            placeholder="Exemplo: João da Silva"
                                            className="border-2 form-control"
                                        />
                                        <ErrorMessage name="nome" component="div" className="error"/>
                                    </div>

                                    {/* Email e CPF */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label htmlFor="cpf" className="block mb-1">
                                                CPF <span className="text-red-500">*</span>
                                            </label>
                                            <Field 
                                                type="text" 
                                                name="cpf" 
                                                maxLength={11}
                                                placeholder="000.000.000-00"
                                                className="border-2 form-control"
                                            />
                                            <ErrorMessage name="cpf" component="div" className="error"/>
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block mb-1">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <Field 
                                                type="email" 
                                                name="email" 
                                                placeholder="exemplo@email.com"
                                                className="border-2 form-control"
                                            />
                                            <ErrorMessage name="email" component="div" className="error"/>
                                        </div>
                                    </div>

                                    {/* Senha */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label htmlFor="senha" className="block mb-1">
                                                Senha <span className="text-red-500">*</span>
                                            </label>
                                            <Field 
                                                type="password" 
                                                name="senha" 
                                                
                                                className="border-2 form-control"
                                            />
                                            <ErrorMessage name="password" component="div" className="error"/>
                                        </div>

                                        {/*Confirmar senha */}
                                        <div>
                                            <label htmlFor="confirmarSenha" className="block mb-1">
                                                Confirmar Senha <span className="text-red-500">*</span>
                                            </label>
                                            <Field 
                                                type="password" 
                                                name="confirmarSenha" 
                                                
                                                className="border-2 form-control"
                                            />
                                            <ErrorMessage name="password" component="div" className="error"/>
                                        </div>

                                        
                                    </div>

                                

                                    {/* Botão de Enviar */}
                                    <div className="text-center pt-3">
                                        <Button
                                            type="submit" 
                                            id="btn_enviar_cad"
                                        >
                                            Enviar
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </main>
        </body>            
        </>
    );
}