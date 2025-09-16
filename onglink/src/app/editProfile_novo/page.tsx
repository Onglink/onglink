'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Tipos para os dados dos formulários
interface BasicFormValues {
  nome: string;
  email: string;
  telefone: string;
  dataNascimento: string;
}

interface AddressFormValues {
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
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
  const validationSchema = Yup.object({
    nome: Yup.string().required('Nome é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    telefone: Yup.string().required('Telefone é obrigatório'),
    dataNascimento: Yup.date().required('Data de nascimento é obrigatória'),
  });

  const formik = useFormik<BasicFormValues>({
    initialValues: {
      nome: '',
      email: '',
      telefone: '',
      dataNascimento: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="form-container">
      <h2>Informações Básicas</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome Completo</label>
          <input
            id="nome"
            name="nome"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nome}
          />
          {formik.touched.nome && formik.errors.nome ? (
            <div className="error">{formik.errors.nome}</div>
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
          <label htmlFor="telefone">Telefone</label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.telefone}
          />
          {formik.touched.telefone && formik.errors.telefone ? (
            <div className="error">{formik.errors.telefone}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="dataNascimento">Data de Nascimento</label>
          <input
            id="dataNascimento"
            name="dataNascimento"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dataNascimento}
          />
          {formik.touched.dataNascimento && formik.errors.dataNascimento ? (
            <div className="error">{formik.errors.dataNascimento}</div>
          ) : null}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

// Componente do formulário de endereço
const AddressForm: React.FC = () => {
  const validationSchema = Yup.object({
    cep: Yup.string().required('CEP é obrigatório'),
    logradouro: Yup.string().required('Logradouro é obrigatório'),
    numero: Yup.string().required('Número é obrigatório'),
    bairro: Yup.string().required('Bairro é obrigatório'),
    cidade: Yup.string().required('Cidade é obrigatória'),
    estado: Yup.string().required('Estado é obrigatório'),
  });

  const formik = useFormik<AddressFormValues>({
    initialValues: {
      cep: '',
      logradouro: '',
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cep}
          />
          {formik.touched.cep && formik.errors.cep ? (
            <div className="error">{formik.errors.cep}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="logradouro">Logradouro</label>
          <input
            id="logradouro"
            name="logradouro"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.logradouro}
          />
          {formik.touched.logradouro && formik.errors.logradouro ? (
            <div className="error">{formik.errors.logradouro}</div>
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
          <select
            id="estado"
            name="estado"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.estado}
          >
            <option value="">Selecione</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
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
    <div className="container">
      <div className="header">
        <div className="nav-buttons">
          <button 
            className={`nav-button ${activeTab === 'basico' ? 'active' : ''}`}
            onClick={() => setActiveTab('basico')}
          >
            Básico
          </button>
          <button 
            className={`nav-button ${activeTab === 'endereco' ? 'active' : ''}`}
            onClick={() => setActiveTab('endereco')}
          >
            Endereço
          </button>
          <button 
            className={`nav-button ${activeTab === 'social' ? 'active' : ''}`}
            onClick={() => setActiveTab('social')}
          >
            Rede Social
          </button>
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
  );
};

export default FormPage;