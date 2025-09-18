'use client';
import { global } from "styled-jsx/css";
import Image from 'next/image';
import logo_instagram from '@/src/app/img/icons/instagram_6422200.png';
import logo_twitter from '@/src/app/img/icons/twitter_5968830.png';
import logo_facebook from '@/src/app/img/icons/social_12942738.png';
import logo_linkedin from '@/src/app/img/icons/linkedin_3536569.png';
import { useState, useRef, ChangeEvent } from 'react';
import { Button } from "react-bootstrap";
import Header_home from "@/src/app/components/header_home";
import '@/src/app/CSS/home.css'
import '@/src/app/CSS/header_alt.css'
import Input from '../components/inputFormulario';
import { useRouter } from "next/navigation";

const Cadastro_02 = () => {
    // Hook para navegação entre páginas
    const router = useRouter();
    
    // Estados para controlar o formulário
    const [tipoCadastro, setTipoCadastro] = useState<number | null>(null); // 1 = Empresa, 2 = ONG
    const [logoEmpresa, setLogoEmpresa] = useState<File | null>(null); // Arquivo do logo da empresa
    const [logoOng, setLogoOng] = useState<File | null>(null); // Arquivo do logo da ONG
    const [pdf1Ong, setPdf1Ong] = useState<File | null>(null); // Ata de criação da ONG (PDF)
    const [pdf2Ong, setPdf2Ong] = useState<File | null>(null); // Estatuto social da ONG (PDF)
    const [previewLogoEmpresa, setPreviewLogoEmpresa] = useState<string | null>(null); // Preview do logo da empresa
    const [previewLogoOng, setPreviewLogoOng] = useState<string | null>(null); // Preview do logo da ONG
    const [causaSelecionada, setCausaSelecionada] = useState<number | null>(null); // Causa selecionada para ONG
    const [areaAtuacaoEmpresa, setAreaAtuacaoEmpresa] = useState<string>(''); // Área de atuação da empresa
    const fileInputRef = useRef<HTMLInputElement>(null); // Referência para o input de arquivo

    // Função para lidar com a mudança no tipo de cadastro (Empresa/ONG)
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        
        // Limpa os campos quando alternar entre Empresa e ONG
        if (value === 1) { // Se selecionou Empresa
            setLogoOng(null);
            setPdf1Ong(null);
            setPdf2Ong(null);
            setPreviewLogoOng(null);
            setCausaSelecionada(null);
        } else if (value === 2) { // Se selecionou ONG
            setLogoEmpresa(null);
            setPreviewLogoEmpresa(null);
            setAreaAtuacaoEmpresa('');
        }
        
        setTipoCadastro(value);
    };

    // Função para lidar com a seleção de causa (ONG)
    const handleCausaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCausaSelecionada(parseInt(e.target.value));
    };

    // Função para lidar com a mudança na área de atuação (Empresa)
    const handleAreaAtuacaoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAreaAtuacaoEmpresa(e.target.value);
    };

    // Função para lidar com a seleção do logo da empresa
    const handleLogoEmpresaChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setLogoEmpresa(file);
            
            // Cria um preview da imagem para exibição
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewLogoEmpresa(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    // Função para lidar com a seleção do logo da ONG
    const handleLogoOngChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setLogoOng(file);
            
            // Cria um preview da imagem para exibição
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewLogoOng(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    // Função para lidar com a seleção do PDF 1 (Ata de criação) da ONG
    const handlePdf1OngChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setPdf1Ong(e.target.files[0]);
        }
    };

    // Função para lidar com a seleção do PDF 2 (Estatuto social) da ONG
    const handlePdf2OngChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setPdf2Ong(e.target.files[0]);
        }
    };

    // Função para lidar com o clique no botão Confirmar
    const handleConfirmar = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        
        // VALIDAÇÃO PRINCIPAL DO FORMULÁRIO
        
        // Verifica se algum tipo de cadastro foi selecionado
        if (!tipoCadastro) {
            alert('Por favor, selecione o tipo de cadastro (Empresa ou ONG)');
            return;
        }
        
        // Validações específicas para cadastro de Empresa
        if (tipoCadastro === 1) {
            // Verifica se o logo da empresa foi selecionado
            if (!logoEmpresa) {
                alert('Por favor, selecione o logo da empresa');
                return;
            }
            
            // Verifica se a área de atuação foi preenchida
            if (!areaAtuacaoEmpresa.trim()) {
                alert('Por favor, informe a área de atuação da empresa');
                return;
            }
        } 
        // Validações específicas para cadastro de ONG
        else if (tipoCadastro === 2) {
            // Verifica se o logo da ONG foi selecionado
            if (!logoOng) {
                alert('Por favor, selecione o logo da ONG');
                return;
            }
            
            // Verifica se ambos os documentos (PDFs) foram enviados
            if (!pdf1Ong || !pdf2Ong) {
                alert('Por favor, envie ambos os documentos (Ata de Criação e Estatuto Social)');
                return;
            }
            
            // Verifica se uma causa foi selecionada
            if (!causaSelecionada) {
                alert('Por favor, selecione a causa principal da sua organização');
                return;
            }
        }
        

        
        // Redireciona para a página de login após o cadastro
        router.push('/login');
    };

    return (
        <>
            {/* Componente de cabeçalho */}
            <Header_home/>

            <body className='bg-verde1'>
                <main className="bg-verde2 min-h-screen flex items-center justify-center p-4 mt-4 mb-4">
                    <div className="bg-white rounded-3xl border-4 p-6 w-full max-w-4xl">
                        <div><h1 className="text-center">Cadastro</h1></div>
                        
                        <form>

                            {/* Seção de links de redes sociais */}
                                <div className="w-99 justify-self-center ">
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
                                                <label htmlFor="campoInstagram" className="mt-1">Link do Instagram</label>
                                            </div>
                                            <Input 
                                                name="campoInstagram" 
                                                type="text" 
                                                id="campoInstagram" 
                                                placeholder="Instagram"
                                                value=""
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
                                                <label htmlFor="campoFacebook" className="mt-1">Link do Facebook</label>
                                            </div>
                                            <Input 
                                                name="campoFacebook" 
                                                type="text" 
                                                id="campoFacebook" 
                                                placeholder="Facebook"
                                                value=""
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
                                                <label htmlFor="campoX" className="mt-1">Link do X</label>
                                            </div>
                                            <Input
                                                name="campoX" 
                                                type="text" 
                                                   id="campoX" 
                                                placeholder="@"
                                                value=""
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
                                                <label htmlFor="campoLinkedin" className="mt-1">Link do LinkedIn</label>
                                            </div>
                                            <Input 
                                                name="campoLinkedin" 
                                                type="text" 
                                                id="campoLinkedin" 
                                                placeholder="Linkedin"
                                                value=""
                                                className="bg-white border-1 rounded w-full p-2 border-gray-600 mb-3"
                                            />
                                        </div>
                                    </div>      
                                </div>
                            
                            {/* Seleção do tipo de cadastro (Empresa/ONG) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-center">
                                <div>
                                    <label htmlFor="rbEmpresa" className="ml-5 mr-3">Empresa</label>
                                    <input 
                                        type="radio" 
                                        name="rbEscolha" 
                                        id="rbEmpresa" 
                                        value={1}
                                        onChange={handleRadioChange}
                                        checked={tipoCadastro === 1}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="rbOng" className="ml-5 mr-3">ONG</label>
                                    <input 
                                        type="radio" 
                                        name="rbEscolha" 
                                        id="rbOng" 
                                        value={2}
                                        onChange={handleRadioChange}
                                        checked={tipoCadastro === 2}
                                    />
                                </div>
                            </div>

                            {/* Formulário específico para Empresa */}
                            {tipoCadastro === 1 && (
                                <div className="mb-6 text-center">
                                    <h3 className="text-lg font-semibold mb-3">Logo da Empresa</h3>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleLogoEmpresaChange}
                                        className="hidden"
                                        id="logo-empresa"
                                    />
                                    <label
                                        htmlFor="logo-empresa"
                                        className="block px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 text-center mb-3"
                                    >
                                        Selecionar Logo
                                    </label>
                                    {/* Exibe o preview do logo se existir */}
                                    {previewLogoEmpresa && (
                                        <div className="flex justify-center">
                                            <div className="relative w-32 h-32 border rounded overflow-hidden">
                                                <Image
                                                    src={previewLogoEmpresa}
                                                    alt="Preview do logo da empresa"
                                                    fill
                                                    style={{ objectFit: 'contain' }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                    {/* Campo de área de atuação (obrigatório) */}
                                    <div className="w-50 justify-self-center">
                                        <h3 className="text-lg font-semibold mb-3">Área de atuação</h3>
                                        <input 
                                            type="text" 
                                            name="campoAtuacaoEmpresa" 
                                            id="campoAtuacaoEmpresa" 
                                            className="bg-white border rounded w-full p-2 border-gray-300 mb-3"
                                            value={areaAtuacaoEmpresa}
                                            onChange={handleAreaAtuacaoChange}
                                            required
                                        />
                                    </div>
                                    <Button className="justify-self-center" onClick={handleConfirmar}>Confirmar</Button>
                                </div>
                            )}

                            {/* Formulário específico para ONG */}
                            {tipoCadastro === 2 && (
                                <div className="mb-6 space-y-4 text-center">
                                    {/* Upload do logo da ONG */}
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Logo da ONG</h3>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleLogoOngChange}
                                            className="hidden"
                                            id="logo-ong"
                                        />
                                        <label
                                            htmlFor="logo-ong"
                                            className="block px-4 py-2 bg-header text-white rounded cursor-pointer hover:bg-green-600 text-center mb-3"
                                        >
                                            Selecionar Logo
                                        </label>
                                        {/* Exibe o preview do logo se existir */}
                                        {previewLogoOng && (
                                            <div className="flex justify-center">
                                                <div className="relative w-32 h-32 border rounded overflow-hidden">
                                                    <Image
                                                        src={previewLogoOng}
                                                        alt="Preview do logo da ONG"
                                                        fill
                                                        style={{ objectFit: 'contain' }}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Upload da Ata de Criação (PDF obrigatório) */}
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Ata de Criação (PDF)</h3>
                                        <input
                                            type="file"
                                            accept=".pdf"
                                            onChange={handlePdf1OngChange}
                                            className="hidden"
                                            id="pdf1-ong"
                                        />
                                        <label
                                            htmlFor="pdf1-ong"
                                            className="block px-4 py-2 bg-header text-white rounded cursor-pointer hover:bg-green-600 text-center mb-3"
                                        >
                                            Selecionar PDF
                                        </label>
                                        {/* Exibe o nome do arquivo selecionado */}
                                        {pdf1Ong && (
                                            <p className="text-center text-sm text-gray-600">
                                                {pdf1Ong.name}
                                            </p>
                                        )}
                                    </div>

                                    {/* Upload do Estatuto Social (PDF obrigatório) */}
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Estatuto Social (PDF)</h3>
                                        <input
                                            type="file"
                                            accept=".pdf"
                                            onChange={handlePdf2OngChange}
                                            className="hidden"
                                            id="pdf2-ong"
                                        />
                                        <label
                                            htmlFor="pdf2-ong"
                                            className="block px-4 py-2 bg-header text-white rounded cursor-pointer hover:bg-green-600 text-center mb-3"
                                        >
                                            Selecionar PDF
                                        </label>
                                        {/* Exibe o nome do arquivo selecionado */}
                                        {pdf2Ong && (
                                            <p className="text-center text-sm text-gray-600">
                                                {pdf2Ong.name}
                                            </p>
                                        )}
                                    </div>
                                    
                                    {/* Seleção de causa (obrigatório) */}
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Escolha a causa principal da sua organização:</h3>
                                        
                                        <div className="flex flex-wrap justify-center gap-3 mb-4">
                                            <div>
                                                <input 
                                                    type="radio" 
                                                    name="escCausa" 
                                                    id="causaAmbiental" 
                                                    value={1}
                                                    onChange={handleCausaChange}
                                                    checked={causaSelecionada === 1}
                                                    className="mr-1"
                                                />
                                                <label htmlFor="causaAmbiental">Ambiental</label>
                                            </div>
                                            
                                            <div>
                                                <input 
                                                    type="radio" 
                                                    name="escCausa" 
                                                    id="causaAnimal" 
                                                    value={2}
                                                    onChange={handleCausaChange}
                                                    checked={causaSelecionada === 2}
                                                    className="mr-1"
                                                />
                                                <label htmlFor="causaAnimal">Animal</label>
                                            </div>
                                            
                                            <div>
                                                <input 
                                                    type="radio" 
                                                    name="escCausa" 
                                                    id="causaEducacao" 
                                                    value={3}
                                                    onChange={handleCausaChange}
                                                    checked={causaSelecionada === 3}
                                                    className="mr-1"
                                                />
                                                <label htmlFor="causaEducacao">Educação</label>
                                            </div>
                                            
                                            <div>
                                                <input 
                                                    type="radio" 
                                                    name="escCausa" 
                                                    id="causaSaude" 
                                                    value={4}
                                                    onChange={handleCausaChange}
                                                    checked={causaSelecionada === 4}
                                                    className="mr-1"
                                                />
                                                <label htmlFor="causaSaude">Saúde</label>
                                            </div>
                                            
                                            <div>
                                                <input 
                                                    type="radio" 
                                                    name="escCausa" 
                                                    id="causaSocial" 
                                                    value={5}
                                                    onChange={handleCausaChange}
                                                    checked={causaSelecionada === 5}
                                                    className="mr-1"
                                                />
                                                <label htmlFor="causaSocial">Social</label>
                                            </div>
                                        </div>
                                    </div>

                                    <Button className="justify-self-center" onClick={handleConfirmar}>Confirmar</Button>
                                </div>
                            )}
                        </form>
                    </div>
                </main>
            </body>
        </>

    );
};

export default Cadastro_02;