'use client';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getCepData } from '@/app/services/cep';
import Header_feed from '../components/header_feed';
import '@/app/CSS/header_alt.css'
import '@/app/CSS/cadastro.css'

// =====================
// TIPAGEM GLOBAL DOS FORMULÁRIOS
// =====================
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

interface SocialFormValues { linkedin: string; facebook: string; instagram: string; twitter: string; }
interface UploadFormValues { arquivo1: File | null; arquivo2: File | null; }

interface FormData {
  basico: BasicFormValues;
  endereco: AddressFormValues;
  social: SocialFormValues;
  upload: UploadFormValues;
}

// =====================
// FORMULÁRIO BÁSICO
// =====================
const BasicForm: React.FC<{ values: BasicFormValues; onSave: (data: BasicFormValues) => void; onNextStep: () => void; }> = ({ values, onSave, onNextStep }) => {
  const validationSchema = Yup.object({
    razãoSocial: Yup.string().required('Razão Social é obrigatória'),
    cnpj: Yup.string().required('CNPJ é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    pessoaResponsavel: Yup.string().required('Pessoa responsável é obrigatória'),
    telefone01: Yup.string().required('Telefone é obrigatório'),
    causaSocial: Yup.string().required('Causa social é obrigatória'),
  });

  const formik = useFormik<BasicFormValues>({
    initialValues: values,
    enableReinitialize: true,
    validationSchema,
    onSubmit: (vals) => {
      onSave(vals);
      onNextStep();
    },
  });

  return (
    <div className="form-container">
      <h2>Informações Básicas</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group"><label>Razão Social</label><input {...formik.getFieldProps('razãoSocial')} /></div>
        <div className="form-group"><label>CNPJ</label><input {...formik.getFieldProps('cnpj')} /></div>
        <div className="form-group"><label>Email</label><input type="email" {...formik.getFieldProps('email')} /></div>
        <div className="form-group"><label>Pessoa Responsável</label><input {...formik.getFieldProps('pessoaResponsavel')} /></div>
        <div className="form-group"><label>Telefone 01</label><input {...formik.getFieldProps('telefone01')} /></div>
        <div className="form-group"><label>Telefone 02</label><input {...formik.getFieldProps('telefone02')} /></div>
        <div className="form-group">
          <label>Causa Social</label>
          <select {...formik.getFieldProps('causaSocial')}>
            <option value="">Selecione</option>
            <option value="Ambiental">Ambiental</option>
            <option value="Animal">Animal</option>
            <option value="Educação">Educação</option>
            <option value="Saúde">Saúde</option>
            <option value="Social">Social</option>
          </select>
        </div>
        <div className="form-group"><label>Conte mais sobre a ONG</label><textarea {...formik.getFieldProps('sobreOng')} rows={4} /></div>

        <div className="buttons">
          <button type="submit">Próximo</button>
        </div>
      </form>
    </div>
  );
};

// =====================
// FORMULÁRIO ENDEREÇO
// =====================
const AddressForm: React.FC<{ values: AddressFormValues; onSave: (data: AddressFormValues) => void; onNextStep: () => void; onPrevStep: () => void; }> = ({ values, onSave, onNextStep, onPrevStep }) => {
  const validationSchema = Yup.object({
    cep: Yup.string().required('CEP é obrigatório'),
    endereco: Yup.string().required('Endereço é obrigatório'),
    numero: Yup.string().required('Número é obrigatório'),
    bairro: Yup.string().required('Bairro é obrigatório'),
    cidade: Yup.string().required('Cidade é obrigatória'),
    estado: Yup.string().required('Estado é obrigatório'),
  });

  const formik = useFormik<AddressFormValues>({
    initialValues: values,
    enableReinitialize: true,
    validationSchema,
    onSubmit: (vals) => {
      onSave(vals);
      onNextStep();
    },
  });

  const buscarCep = async () => {
    if (formik.values.cep) {
      const data = await getCepData(formik.values.cep);
      formik.setFieldValue('cidade', data.localidade);
      formik.setFieldValue('estado', data.uf);
      formik.setFieldValue('endereco', data.logradouro);
      formik.setFieldValue('bairro', data.bairro);
    }
  };

  return (
    <div className="form-container">
      <h2>Endereço</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>CEP</label>
          <input {...formik.getFieldProps('cep')} />
          <button type="button" onClick={buscarCep}>Buscar CEP</button>
        </div>
        <div className="form-group"><label>Endereço</label><input {...formik.getFieldProps('endereco')} /></div>
        <div className="form-group"><label>Número</label><input {...formik.getFieldProps('numero')} /></div>
        <div className="form-group"><label>Complemento</label><input {...formik.getFieldProps('complemento')} /></div>
        <div className="form-group"><label>Bairro</label><input {...formik.getFieldProps('bairro')} /></div>
        <div className="form-group"><label>Cidade</label><input {...formik.getFieldProps('cidade')} /></div>
        <div className="form-group"><label>Estado</label><input {...formik.getFieldProps('estado')} /></div>

        <div className="buttons">
          <button type="button" onClick={() => { onSave(formik.values); onPrevStep(); }}>Voltar</button>
          <button type="submit">Próximo</button>
        </div>
      </form>
    </div>
  );
};

// =====================
// FORMULÁRIO SOCIAL
// =====================
const SocialForm: React.FC<{ values: SocialFormValues; onSave: (data: SocialFormValues) => void; onNextStep: () => void; onPrevStep: () => void; }> = ({ values, onSave, onNextStep, onPrevStep }) => {
  const validationSchema = Yup.object({
    linkedin: Yup.string().url('URL inválida'),
    facebook: Yup.string().url('URL inválida'),
    instagram: Yup.string().url('URL inválida'),
    twitter: Yup.string().url('URL inválida'),
  });

  const formik = useFormik<SocialFormValues>({
    initialValues: values,
    enableReinitialize: true,
    validationSchema,
    onSubmit: (vals) => {
      onSave(vals);
      onNextStep();
    },
  });

  return (
    <div className="form-container">
      <h2>Redes Sociais</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group"><label>LinkedIn</label><input {...formik.getFieldProps('linkedin')} /></div>
        <div className="form-group"><label>Facebook</label><input {...formik.getFieldProps('facebook')} /></div>
        <div className="form-group"><label>Instagram</label><input {...formik.getFieldProps('instagram')} /></div>
        <div className="form-group"><label>Twitter</label><input {...formik.getFieldProps('twitter')} /></div>

        <div className="buttons">
          <button type="button" onClick={() => { onSave(formik.values); onPrevStep(); }}>Voltar</button>
          <button type="submit">Próximo</button>
        </div>
      </form>
    </div>
  );
};

// =====================
// FORMULÁRIO UPLOAD
// =====================
const UploadForm: React.FC<{ values: UploadFormValues; onSave: (data: UploadFormValues) => void; onPrevStep: () => void; }> = ({ values, onSave, onPrevStep }) => {
  const formik = useFormik<UploadFormValues>({
    initialValues: values,
    enableReinitialize: true,
    onSubmit: (vals) => {
      onSave(vals);
      alert(`Arquivos:\n${vals.arquivo1?.name ?? 'Nenhum'}\n${vals.arquivo2?.name ?? 'Nenhum'}`);
    },
  });

  return (
    <div className="form-container">
      <h2>Upload de Arquivos PDF</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group"><label>Arquivo 1</label><input type="file" onChange={(e) => formik.setFieldValue('arquivo1', e.currentTarget.files?.[0])} /></div>
        <div className="form-group"><label>Arquivo 2</label><input type="file" onChange={(e) => formik.setFieldValue('arquivo2', e.currentTarget.files?.[0])} /></div>

        <div className="buttons">
          <button type="button" onClick={() => { onSave(formik.values); onPrevStep(); }}>Voltar</button>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

// =====================
// FORM PRINCIPAL
// =====================
const FormPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'basico' | 'endereco' | 'social' | 'upload'>('basico');

  const [formData, setFormData] = useState<FormData>({
    basico: { razãoSocial: '', cnpj: '', email: '', pessoaResponsavel: '', telefone01: '', telefone02: '', causaSocial: '', sobreOng: '' },
    endereco: { cep: '', endereco: '', numero: '', complemento: '', bairro: '', cidade: '', estado: '' },
    social: { linkedin: '', facebook: '', instagram: '', twitter: '' },
    upload: { arquivo1: null, arquivo2: null },
  });

  const handleSave = (step: keyof FormData, data: any) => {
    setFormData((prev) => ({ ...prev, [step]: data }));
  };

  const handleNextStep = () => {
    if (activeTab === 'basico') setActiveTab('endereco');
    else if (activeTab === 'endereco') setActiveTab('social');
    else if (activeTab === 'social') setActiveTab('upload');
  };

  const handlePrevStep = () => {
    if (activeTab === 'upload') setActiveTab('social');
    else if (activeTab === 'social') setActiveTab('endereco');
    else if (activeTab === 'endereco') setActiveTab('basico');
  };

  return (
    <>
      <Header_feed />
      <div className="container text-center">
        <h1>Cadastro ONG</h1>

        {/* Botões de navegação no topo */}
        <div className="flex justify-center items-center border-4 rounded-2xl space-x-5 p-4 ">
          <button className={`nav-button ${activeTab === 'basico' ? 'active' : ''}`} onClick={() => setActiveTab('basico')}>1 - Básico</button>
          <button className={`nav-button ${activeTab === 'endereco' ? 'active' : ''}`} onClick={() => setActiveTab('endereco')}>2 - Endereço</button>
          <button className={`nav-button ${activeTab === 'social' ? 'active' : ''}`} onClick={() => setActiveTab('social')}>3 - Social</button>
          <button className={`nav-button ${activeTab === 'upload' ? 'active' : ''}`} onClick={() => setActiveTab('upload')}>4 - Upload</button>
        </div>

        {/* Conteúdo do formulário */}
        <div className="content">
          {activeTab === 'basico' && <BasicForm values={formData.basico} onSave={(d) => handleSave('basico', d)} onNextStep={handleNextStep} />}
          {activeTab === 'endereco' && <AddressForm values={formData.endereco} onSave={(d) => handleSave('endereco', d)} onNextStep={handleNextStep} onPrevStep={handlePrevStep} />}
          {activeTab === 'social' && <SocialForm values={formData.social} onSave={(d) => handleSave('social', d)} onNextStep={handleNextStep} onPrevStep={handlePrevStep} />}
          {activeTab === 'upload' && <UploadForm values={formData.upload} onSave={(d) => handleSave('upload', d)} onPrevStep={handlePrevStep} />}
        </div>
      </div>
    </>
  );
};

export default FormPage;
