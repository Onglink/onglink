'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header_home from "@/src/app/components/header_home";
import '@/src/app/CSS/home.css'
import '@/src/app/CSS/header_alt.css'
import { CepResponse, getCepData } from '../services/cep';
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { ErrorMessage } from "formik";

const validationSchema = Yup.object().shape({
    razao_social: Yup.string().required('Campo obrigatório'),
    cnpj: Yup.string().required('Campo Obrigatório'),
    email: Yup.string().email('Digite o email válido').required('Campo Obrigatório'),
    telefone_01: Yup.string().required('Campo Obrigatório'),
    pessoa_responsavel: Yup.string().required('Campo Obrigatório'),
    cpf: Yup.string().required('Campo Obrigatório'),
    cep: Yup.string().required('Campo Obrigatório'),
    cidade: Yup.string().required('Campo Obrigatório'),
    estado: Yup.string().required('Campo Obrigatório'),
    endereco: Yup.string().required('Campo Obrigatório'),
    num_rua: Yup.string().required('Campo Obrigatório'),
    bairro: Yup.string().required('Campo Obrigatório'),
});

type FormEndereco = {
    complemento?: string;
    numero?: number;
} & Partial<CepResponse>;

export default function Cad_pj() {
    const router = useRouter();
    const initialValues = {
        razao_social: '',
        cnpj: '',
        email: '',
        telefone_01: '',
        telefone_02: '',
        pessoa_responsavel: '',
        cpf: '',
        cep: '',
        cidade: '',
        estado: '',
        endereco: '',
        num_rua: '',
        bairro: '',
        complemento: '',
        sobre: ''
    };

    const handleBuscarCep = async (cep: string, setFieldValue: (field: string, value: any) => void) => {
        try {
            const cepDados = await getCepData(cep.replace(/\D/g, ''));
            
            // Atualiza os campos do formulário com os dados do CEP
            setFieldValue('cidade', cepDados.localidade);
            setFieldValue('estado', cepDados.uf);
            setFieldValue('endereco', cepDados.logradouro);
            setFieldValue('bairro', cepDados.bairro);
            
        } catch (error) {
            console.error("Erro ao buscar CEP:", error);
        }
    };


    return (
        <>
        <Header_home/>
        <body className='bg-verde1'>
            <main className="bg-verde2 min-h-screen flex items-center justify-center p-4 mt-4 mb-4">
                <div className="bg-white rounded-3xl border-4 p-6 w-full max-w-4xl">   
                    <h1 className="text-center">Cadastro</h1>
                    <Formik 
                        initialValues={initialValues}
                        onSubmit={values => {
                            console.log(values);
                            router.push('/cad_ong_empresa');
                        }}
                        validationSchema={validationSchema}
                    >
                        {({ handleSubmit, setFieldValue, values }) => (
                            <Form onSubmit={handleSubmit}>  
                                <div>
                                    {/* Razão Social */}
                                    <div className="mb-4">
                                        <label htmlFor="razao_social" className="block mb-1">
                                            Razão Social <span className="text-red-500">*</span>
                                        </label>
                                        <Field 
                                            type="text" 
                                            name="razao_social" 
                                            placeholder="Razão Social"
                                            className="border-1 rounded w-full p-2 border-gray-600"
                                        />
                                        <ErrorMessage name="razao_social" component="div" className="error"/>
                                    </div>

                                    {/* Email e CNPJ */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label htmlFor="cnpj" className="block mb-1">
                                                CNPJ <span className="text-red-500">*</span>
                                            </label>
                                            <Field 
                                                type="text" 
                                                name="cnpj" 
                                                maxLength={18}
                                                placeholder="00.000.000/0000-00"
                                                className="border-1 rounded w-full p-2 border-gray-600"
                                            />
                                            <ErrorMessage name="cnpj" component="div" className="error"/>
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
                                                className="border-1 rounded w-full p-2 border-gray-600"
                                            />
                                            <ErrorMessage name="email" component="div" className="error"/>
                                        </div>
                                    </div>

                                    {/* Telefones */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label htmlFor="telefone_01" className="block mb-1">
                                                Telefone 1 <span className="text-red-500">*</span>
                                            </label>
                                            <Field 
                                                type="text" 
                                                name="telefone_01" 
                                                maxLength={14}
                                                placeholder="(00)00000-0000"
                                                className="border-1 rounded w-full p-2 border-gray-600"
                                            />
                                            <ErrorMessage name="telefone_01" component="div" className="error"/>
                                        </div>

                                        <div>
                                            <label htmlFor="telefone_02" className="block mb-1">
                                                Telefone 2
                                            </label>
                                            <Field 
                                                type="text" 
                                                name="telefone_02" 
                                                maxLength={14}
                                                placeholder="(00)00000-0000"
                                                className="border-1 rounded w-full p-2 border-gray-600"
                                            />
                                        </div>
                                    </div>

                                    {/* Pessoa Responsável e CPF */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label htmlFor="pessoa_responsavel" className="block mb-1">
                                                Pessoa Responsável <span className="text-red-500">*</span>
                                            </label>
                                            <Field 
                                                type="text" 
                                                name="pessoa_responsavel"
                                                className="border-1 rounded w-full p-2 border-gray-600"
                                            />
                                            <ErrorMessage name="pessoa_responsavel" component="div" className="error"/>
                                        </div>
                                        <div>
                                            <label htmlFor="cpf" className="block mb-1">
                                                CPF <span className="text-red-500">*</span>
                                            </label>
                                            <Field 
                                                type="text" 
                                                name="cpf" 
                                                maxLength={14}
                                                placeholder="000.000.000-00"
                                                className="border-1 rounded w-full p-2 border-gray-600"
                                            />
                                            <ErrorMessage name="cpf" component="div" className="error"/>
                                        </div>
                                    </div>

                                    {/* CEP, Cidade e Estado */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                        <div>
                                            <label htmlFor="cep" className="block mb-1">
                                                CEP <span className="text-red-500">*</span>
                                            </label>
                                            <Field 
                                                type="text" 
                                                name="cep" 
                                                placeholder="00000-000"
                                                className="border-1 rounded w-full p-2 border-gray-600"
                                                onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                                                    const cep = e.target.value.replace(/\D/g, '');
                                                    if (cep.length === 8) {
                                                        handleBuscarCep(cep, setFieldValue);
                                                    }
                                                }}
                                            />
                                            <ErrorMessage name="cep" component="div" className="error"/>
                                        </div>
                                        <div>
                                            <label htmlFor="cidade" className="block mb-1">
                                                Cidade <span className="text-red-500">*</span>
                                            </label>
                                            <Field 
                                                type="text" 
                                                name="cidade"
                                                className="border-1 rounded w-full p-2 border-gray-600"
                                            />
                                            <ErrorMessage name="cidade" component="div" className="error"/>
                                        </div>
                                        <div>
                                            <label htmlFor="estado" className="block mb-1">
                                                Estado <span className="text-red-500">*</span>
                                            </label>
                                            <Field 
                                                type="text" 
                                                name="estado"
                                                className="border-1 rounded w-full p-2 border-gray-600"
                                            />
                                            <ErrorMessage name="estado" component="div" className="error"/>
                                        </div>
                                    </div>

                                    {/* Endereço e Número */}
                                    <div className="flex flex-cols-2 md:grid-cols-2 gap-4 mb-4 ">
                                        <div className='w-full'>
                                            <label htmlFor="endereco" className="block mb-1">
                                                Endereço <span className="text-red-500">*</span>
                                            </label>
                                            <Field 
                                                type="text" 
                                                name="endereco"
                                                className="border-1 rounded w-full p-2 border-gray-600"
                                            />
                                            <ErrorMessage name="endereco" component="div" className="error"/>
                                        </div>

                                        {/* Numero da Rua */}
                                        <div className='w-25'>
                                            <label htmlFor="num_rua" className="block mb-1">
                                                Nº <span className="text-red-500">*</span>
                                            </label>
                                            <Field 
                                                type="text" 
                                                name="num_rua"
                                                className="border-1 rounded w-full p-2 border-gray-600"
                                            />
                                            <ErrorMessage name="num_rua" component="div" className="error"/>
                                        </div>
                                    </div>

                                    {/* Bairro e Complemento */}
                                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-4">
                                        {/* Bairro */} 
                                        <div>
                                            <label htmlFor="bairro" className="block mb-1">
                                                Bairro <span className="text-red-500">*</span>
                                            </label>
                                            <Field 
                                                type="text" 
                                                name="bairro"
                                                className="border-1 rounded w-full p-2 border-gray-600"
                                            />
                                            <ErrorMessage name="bairro" component="div" className="error"/>
                                        </div>

                                        {/* Complemento */}
                                        <div>
                                            <label htmlFor="complemento" className="block mb-1">
                                                Complemento
                                            </label>
                                            <Field 
                                                type="text" 
                                                name="complemento"
                                                className="border-1 rounded w-full p-2 border-gray-600"
                                            />
                                        </div>
                                    </div>

                                    {/* Sobre a Empresa */}
                                    <div className="mb-6">
                                        <label htmlFor="sobre" className="block mb-1">
                                            Conte-nos mais sobre sua empresa ou ONG <span className="text-red-500">*</span>
                                        </label>
                                        <Field 
                                            as="textarea" 
                                            name="sobre"
                                            className="bg-white border-1 rounded w-full p-2 border-gray-600 mb-3"
                                            
                                            rows={4}
                                        />
                                        <ErrorMessage name="sobre" component="div" className="error"/>
                                    </div>

                                    {/* Botão de Enviar */}
                                    <div className="text-center">
                                        <button 
                                            type="submit" 
                                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                                        >
                                            Enviar
                                        </button>
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