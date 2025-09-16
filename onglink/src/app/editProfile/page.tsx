'use client';
//import '@/src/app/CSS/header_alt.css'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo_instagram from '@/img/icons/instagram_6422200.png';
import logo_twitter from '@/img/icons/twitter_5968830.png';
import logo_facebook from '@/img/icons/social_12942738.png';
import logo_linkedin from '@/img/icons/linkedin_3536569.png';
import { CepResponse, getCepData } from '@/services/cep';
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { ErrorMessage } from "formik";
import dados_usuarios from '@/APIs/dados_usuarios.json';

// Definição de tipos
interface Usuario {
    id: string;
    razao_social: string;
    cnpj: string;
    email: string;
    telefone_01: string;
    telefone_02: string;
    pessoa_responsavel: string;
    cpf: string;
    cep: string;
    cidade: string;
    estado: string;
    endereco: string;
    num_rua: string;
    bairro: string;
    complemento: string;
    sobre: string;
    instagram: string;
    facebook: string;
    x_twitter: string;
    linkedin: string;
}

interface UsuariosData {
    usuario: Usuario[];
}

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

export default function editProfilePage() {
    const router = useRouter();
    const [initialValues, setInitialValues] = useState<Usuario>({
        id: '',
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
        sobre: '',
        instagram: '',
        facebook: '',
        x_twitter: '',
        linkedin: ''
    });

    // Carrega os dados do usuário do JSON
    useEffect(() => {
        // Assume que queremos pegar o primeiro usuário (que tem dados preenchidos)
        const usuarioData = (dados_usuarios as UsuariosData).usuario[0];
        setInitialValues(usuarioData);
    }, []);

    const handleBuscarCep = async (cep: string, setFieldValue: (field: string, value: any) => void) => {
        try {
            const cepDados = await getCepData(cep.replace(/\D/g, ''));
            
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
            
            <body className='bg-verde1'>
                <main className="bg-verde2 min-h-screen flex items-center justify-center p-4 mt-4 mb-4">
                    <div className="bg-white rounded-3xl border-4 p-6 w-full max-w-4xl">   
                        <h1 className="text-center">Editar Perfil</h1>
                        <Formik 
                            initialValues={initialValues}
                            onSubmit={values => {
                                console.log(values);
                                router.push('/perfil');
                            }}
                            validationSchema={validationSchema}
                            enableReinitialize // Permite que o Formik reinitialize quando initialValues muda
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
                                        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-2">
                                            {/* Bairro */} 
                                            <div>
                                                <label htmlFor="bairro" className="block mb-1">
                                                    Bairro <span className="text-red-500">*</span>
                                                </label>
                                                <Field 
                                                    type="text" 
                                                    name="bairro"
                                                    className="bg-white border-1 rounded w-full p-2 border-gray-600 mb-3"
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
                                                    className="bg-white border-1 rounded w-full p-2 border-gray-600 mb-3"
                                                />
                                            </div>
                                        </div>

                                        
                                        {/* Seção de links de redes sociais */}
                                        <div className="w-100 justify-self-center ">
                                            {/* Instagram e Facebook */}
                                            <div className="flex row-cols-2  ">
                                                {/* Instagram */}
                                                <div className="mr-2 justify-content-center">   
                                                    <div className="flex">
                                                        <Image src={logo_instagram}
                                                            alt="Logo Instagram"
                                                            width={24}
                                                            height={24}
                                                            className="shadow-md mt-1 mb-1 mr-2"
                                                        />
                                                        <label htmlFor="instagram" className="mt-1">Link do Instagram</label>
                                                    </div>
                                                    <Field 
                                                        name="instagram" 
                                                        type="text" 
                                                        id="instagram" 
                                                        placeholder="Instagram"
                                                        className="bg-white border-1 rounded w-full p-2 border-gray-600 mb-3"
                                                    />
                                                </div>
                                            
                                    
                                                {/* Facebook */}
                                                <div className="mr-2">
                                                    <div className="flex">
                                                        <Image src={logo_facebook}
                                                            alt="Logo Facebook"
                                                            width={24}
                                                            height={24}
                                                            className="shadow-md mt-1 mb-1 mr-2"
                                                        />
                                                        <label htmlFor="facebook" className="mt-1">Link do Facebook</label>
                                                    </div>
                                                    <Field 
                                                        name="facebook" 
                                                        type="text" 
                                                        id="facebook" 
                                                        placeholder="Facebook"
                                                        className="bg-white border-1 rounded w-full p-2 border-gray-600 mb-3"
                                                    />
                                                </div>
                                            </div>

                                            {/* X e Linkedin */}        
                                            <div className="flex row-cols-2  ">        
                                                {/* X | Twitter */}
                                                <div className="mr-2">
                                                    <div className="flex">
                                                        <Image src={logo_twitter}
                                                            alt="Logo Twitter"
                                                            width={24}
                                                            height={24}
                                                            className="shadow-md mt-1 mb-1 mr-2"
                                                        />
                                                        <label htmlFor="x_twitter" className="mt-1">Link do X</label>
                                                    </div>
                                                    <Field
                                                        name="x_twitter" 
                                                        type="text" 
                                                        id="x_twitter" 
                                                        placeholder="@"
                                                        className="bg-white border-1 rounded w-full p-2 border-gray-600 mb-3"
                                                    />
                                                </div>
                                        
                                                {/* LinkedIn */}
                                                <div className="mr-2">
                                                    
                                                    <div className="flex">
                                                        <Image src={logo_linkedin}
                                                            alt="Logo LinkedIn"
                                                            width={24}
                                                            height={24}
                                                            className="shadow-md mt-1 mb-1 mr-2"
                                                        />
                                                        <label htmlFor="linkedin" className="mt-1">Link do LinkedIn</label>
                                                    </div>
                                                    <Field 
                                                        name="linkedin" 
                                                        type="text" 
                                                        id="linkedin" 
                                                        placeholder="Linkedin"
                                                        className="bg-white border-1 rounded w-full p-2 border-gray-600 mb-3"
                                                    />
                                                    
                                                </div>
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