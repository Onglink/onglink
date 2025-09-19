'use client';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CepResponse, getCepData } from '@/app/services/cep';
import Header_feed from '../components/header_feed';
import '@/app/CSS/header_alt.css'
import '@/app/CSS/cadastro.css'

// Tipos para os dados dos formulários
interface BasicFormValues {
  razãoSocial: string;
  cnpj: string;
  email: string;
  pessoaResponsavel: string;
  telefone01: string;
  telefone02: string;
  causaSocial: string;
  sobreOng: string;
}

interface AddressFormValues {
  cep: string;
  cidade: string;
  estado: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
}

interface SocialFormValues {
  linkedin: string;
  facebook: string;
  instagram: string;
  twitter: string;
}

interface UploadFormValues {
  arquivo1: File | null;
  arquivo2: File | null;
}

// Componente do formulário básico
const BasicForm: React.FC = () => {
    
  

  const [causaSelecionada, setCausaSelecionada] = useState<number | null>(null);

  const handleCausaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCausaSelecionada(parseInt(e.target.value));
  };

  const validationSchema = Yup.object({
    razãoSocial: Yup.string().required('Razão Social é obrigatória'),
    cnpj: Yup.string().required('CNPJ é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    pessoaResponsavel: Yup.string().required('Pessoa responsável é obrigatória'),
    telefone01: Yup.string().required('Telefone é obrigatório'),
    causaSocial: Yup.string().required('Causa social é obrigatória'),
  });

  const formik = useFormik<BasicFormValues>({
    initialValues: {
      razãoSocial: '',
      cnpj: '',
      email: '',
      pessoaResponsavel: '',
      telefone01: '',
      telefone02: '',
      causaSocial: '',
      sobreOng: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    
    <div className="form-container border-5 ">
      <h2>Informações Básicas</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="razãoSocial">Razão Social</label>
          <input
            id="razãoSocial"
            name="razãoSocial"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.razãoSocial}
          />
          {formik.touched.razãoSocial && formik.errors.razãoSocial ? (
            <div className="error">{formik.errors.razãoSocial}</div>
          ) : null}
        </div>
        
        <div className="form-group">
          <label htmlFor="cnpj">CNPJ</label>
          <input
            id="cnpj"
            name="cnpj"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cnpj}
          />
          {formik.touched.cnpj && formik.errors.cnpj ? (
            <div className="error">{formik.errors.cnpj}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="pessoaResponsavel">Pessoa Responsável</label>
          <input
            id="pessoaResponsavel"
            name="pessoaResponsavel"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pessoaResponsavel}
          />
          {formik.touched.pessoaResponsavel && formik.errors.pessoaResponsavel ? (
            <div className="error">{formik.errors.pessoaResponsavel}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="telefone01">Telefone 01</label>
          <input
            id="telefone01"
            name="telefone01"
            type="tel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.telefone01}
          />
          {formik.touched.telefone01 && formik.errors.telefone01 ? (
            <div className="error">{formik.errors.telefone01}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="telefone02">Telefone 02</label>
          <input
            id="telefone02"
            name="telefone02"
            type="tel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.telefone02}
          />
          {formik.touched.telefone02 && formik.errors.telefone02 ? (
            <div className="error">{formik.errors.telefone02}</div>
          ) : null}
        </div>

        {/* Seleção de causa (obrigatório) */}
        <div className="form-group">
          <h3 className="text-lg font-semibold mb-3">Escolha a causa principal da sua organização:</h3>
          
          <div className="causas-container flex justify-center items-center border-4 rounded-2xl space-x-5 p-4 ">
            <div className="causa-option">
              <input 
                type="radio" 
                name="causaSocial" 
                id="causaAmbiental" 
                value="1"
                onChange={handleCausaChange}
                checked={causaSelecionada === 1}
                className="mr-1"
              />
              <label htmlFor="causaAmbiental">Ambiental</label>
            </div>
            
            <div className="causa-option">
              <input 
                type="radio" 
                name="causaSocial" 
                id="causaAnimal" 
                value="2"
                onChange={handleCausaChange}
                checked={causaSelecionada === 2}
                className="mr-1"
              />
              <label htmlFor="causaAnimal">Animal</label>
            </div>
            
            <div className="causa-option">
              <input 
                type="radio" 
                name="causaSocial" 
                id="causaEducacao" 
                value="3"
                onChange={handleCausaChange}
                checked={causaSelecionada === 3}
                className="mr-1"
              />
              <label htmlFor="causaEducacao">Educação</label>
            </div>
            
            <div className="causa-option">
              <input 
                type="radio" 
                name="causaSocial" 
                id="causaSaude" 
                value="4"
                onChange={handleCausaChange}
                checked={causaSelecionada === 4}
                className="mr-1"
              />
              <label htmlFor="causaSaude">Saúde</label>
            </div>
            
            <div className="causa-option">
              <input 
                type="radio" 
                name="causaSocial" 
                id="causaSocial" 
                value="5"
                onChange={handleCausaChange}
                checked={causaSelecionada === 5}
                className="mr-1"
              />
              <label htmlFor="causaSocial">Social</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="sobreOng">Conte mais sobre a ONG</label>
          <textarea
            id="sobreOng"
            name="sobreOng"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sobreOng}
            rows={4}
          />
          {formik.touched.sobreOng && formik.errors.sobreOng ? (
            <div className="error">{formik.errors.sobreOng}</div>
          ) : null}
        </div>

        <button className=' border-2 rounded-5 bg-green-400 p-4' type="submit">Enviar</button>
      </form>
    </div>

  );
};

// Componente do formulário de endereço
const AddressForm: React.FC = () => {
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

  const validationSchema = Yup.object({
    cep: Yup.string().required('CEP é obrigatório'),
    endereco: Yup.string().required('Endereço é obrigatório'),
    numero: Yup.string().required('Número é obrigatório'),
    bairro: Yup.string().required('Bairro é obrigatório'),
    cidade: Yup.string().required('Cidade é obrigatória'),
    estado: Yup.string().required('Estado é obrigatório'),
  });

  const formik = useFormik<AddressFormValues>({
    initialValues: {
      cep: '',
      endereco: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="form-container">
      <h2>Endereço</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="cep">CEP</label>
          <input
            id="cep"
            name="cep"
            type="text"
            placeholder="00000-000"
            onChange={formik.handleChange}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
              formik.handleBlur(e);
              const cep = e.target.value.replace(/\D/g, '');
              if (cep.length === 8) {
                handleBuscarCep(cep, formik.setFieldValue);
              }
            }}
            value={formik.values.cep}
          />
          {formik.touched.cep && formik.errors.cep ? (
            <div className="error">{formik.errors.cep}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="endereco">Endereço</label>
          <input
            id="endereco"
            name="endereco"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endereco}
          />
          {formik.touched.endereco && formik.errors.endereco ? (
            <div className="error">{formik.errors.endereco}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="numero">Número</label>
          <input
            id="numero"
            name="numero"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.numero}
          />
          {formik.touched.numero && formik.errors.numero ? (
            <div className="error">{formik.errors.numero}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="complemento">Complemento</label>
          <input
            id="complemento"
            name="complemento"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.complemento}
          />
        </div>

        <div className="form-group">
          <label htmlFor="bairro">Bairro</label>
          <input
            id="bairro"
            name="bairro"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bairro}
          />
          {formik.touched.bairro && formik.errors.bairro ? (
            <div className="error">{formik.errors.bairro}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="cidade">Cidade</label>
          <input
            id="cidade"
            name="cidade"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cidade}
          />
          {formik.touched.cidade && formik.errors.cidade ? (
            <div className="error">{formik.errors.cidade}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="estado">Estado</label>
          <input
            id="estado"
            name="estado"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.estado}
          />
          {formik.touched.estado && formik.errors.estado ? (
            <div className="error">{formik.errors.estado}</div>
          ) : null}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

// Componente do formulário de redes sociais
const SocialForm: React.FC = () => {
  const validationSchema = Yup.object({
    linkedin: Yup.string().url('URL inválida'),
    facebook: Yup.string().url('URL inválida'),
    instagram: Yup.string().url('URL inválida'),
    twitter: Yup.string().url('URL inválida'),
  });

  const formik = useFormik<SocialFormValues>({
    initialValues: {
      linkedin: '',
      facebook: '',
      instagram: '',
      twitter: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="form-container">
      <h2>Redes Sociais</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="social-grid">
          <div className="form-group">
            <label htmlFor="linkedin">LinkedIn</label>
            <input
              id="linkedin"
              name="linkedin"
              type="url"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.linkedin}
              placeholder="https://linkedin.com/in/seu-perfil"
            />
            {formik.touched.linkedin && formik.errors.linkedin ? (
              <div className="error">{formik.errors.linkedin}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="facebook">Facebook</label>
            <input
              id="facebook"
              name="facebook"
              type="url"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.facebook}
              placeholder="https://facebook.com/seu-perfil"
            />
            {formik.touched.facebook && formik.errors.facebook ? (
              <div className="error">{formik.errors.facebook}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="instagram">Instagram</label>
            <input
              id="instagram"
              name="instagram"
              type="url"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.instagram}
              placeholder="https://instagram.com/seu-perfil"
            />
            {formik.touched.instagram && formik.errors.instagram ? (
              <div className="error">{formik.errors.instagram}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              id="twitter"
              name="twitter"
              type="url"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.twitter}
              placeholder="https://twitter.com/seu-perfil"
            />
            {formik.touched.twitter && formik.errors.twitter ? (
              <div className="error">{formik.errors.twitter}</div>
            ) : null}
          </div>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

// Componente do formulário de upload
const UploadForm: React.FC = () => {
  const [fileName1, setFileName1] = useState<string>('');
  const [fileName2, setFileName2] = useState<string>('');
  
  const formik = useFormik<UploadFormValues>({
    initialValues: {
      arquivo1: null,
      arquivo2: null
    },
    onSubmit: (values) => {
      alert('Arquivos selecionados:\n' + 
            (values.arquivo1 ? values.arquivo1.name : 'Nenhum') + '\n' + 
            (values.arquivo2 ? values.arquivo2.name : 'Nenhum'));
    },
  });
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, fieldName: keyof UploadFormValues, setFileName: React.Dispatch<React.SetStateAction<string>>) => {
    const file = event.currentTarget.files?.[0] || null;
    formik.setFieldValue(fieldName, file);
    setFileName(file ? file.name : '');
  };

  return (
    <div className="form-container">
      <h2>Upload de Arquivos PDF</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Primeiro Arquivo PDF</label>
          <div className="file-upload">
            <p>Arraste o arquivo ou clique para selecionar</p>
            <input
              id="arquivo1"
              name="arquivo1"
              type="file"
              accept=".pdf"
              className="file-input"
              onChange={(e) => handleFileChange(e, 'arquivo1', setFileName1)}
            />
            <label htmlFor="arquivo1" className="upload-button">Selecionar Arquivo</label>
            {fileName1 && <p className="file-name">Arquivo selecionado: {fileName1}</p>}
          </div>
        </div>

        <div className="form-group">
          <label>Segundo Arquivo PDF</label>
          <div className="file-upload">
            <p>Arraste o arquivo ou clique para selecionar</p>
            <input
              id="arquivo2"
              name="arquivo2"
              type="file"
              accept=".pdf"
              className="file-input"
              onChange={(e) => handleFileChange(e, 'arquivo2', setFileName2)}
            />
            <label htmlFor="arquivo2" className="upload-button">Selecionar Arquivo</label>
            {fileName2 && <p className="file-name">Arquivo selecionado: {fileName2}</p>}
          </div>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

// Componente principal
const FormPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('basico');

  const renderForm = () => {
    switch(activeTab) {
      case 'basico':
        return <BasicForm />;
      case 'endereco':
        return <AddressForm />;
      case 'social':
        return <SocialForm />;
      case 'upload':
        return <UploadForm />;
      default:
        return <BasicForm />;
    }
  };

  return (
    <> 
    <Header_feed/> 
    <div className="container text-center">
      
      
        <div className="flex justify-center items-center border-4 rounded-2xl space-x-5 p-4 ">

          <div className=' border-2 rounded-full bg-green-400 p-4' >
            <button 
            className={`nav-button ${activeTab === 'basico' ? 'active' : ''}` }
            onClick={() => setActiveTab('basico')}
          >
            Básico
          </button>
          </div>

          <div className=' border-2 rounded-full bg-green-400 p-4'>
          <button 
            className={`nav-button ${activeTab === 'endereco' ? 'active' : ''}`}
            onClick={() => setActiveTab('endereco')}
          >
            Endereço
          </button>
          </div>
          
          <div className=' border-2 rounded-full bg-green-400 p-4'>
          <button 
            className={`nav-button ${activeTab === 'social' ? 'active' : ''}`}
            onClick={() => setActiveTab('social')}
          >
            Rede Social
          </button>

          </div>

          <div className=' border-2 rounded-full bg-green-400 p-4'>
          <button 
            className={`nav-button ${activeTab === 'upload' ? 'active' : ''}`}
            onClick={() => setActiveTab('upload')}
          >
            Upload PDF
          </button>

          </div>
          
        </div>
      
      <div className="content">
        {renderForm()}
      </div>
    </div>
    </>
  );
};

export default FormPage;