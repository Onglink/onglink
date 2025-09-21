'use client';

import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import StepButton from '@/app/components/formulario/StepButton';
import FormInput from '@/app/components/formulario/FormInput';
import FormRadioGroup from '@/app/components/formulario/FormRadioGroup';
import FileUpload from '@/app/components/formulario/FileUpload';
import { getCepData } from '@/app/services/cep';

// Interfaces dos formulários
interface BasicFormValues {
  razaoSocial: string;
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
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
}

interface SocialFormValues {
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
}

interface UploadFormValues {
  arquivo1: File | null;
  arquivo2: File | null;
}

interface FormData {
  basico?: BasicFormValues;
  endereco?: AddressFormValues;
  social?: SocialFormValues;
  upload?: UploadFormValues;
}

const CadastroCompleto: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('basico');
  const [formData, setFormData] = useState<FormData>({});
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('cadastroData');
    if (saved) {
      const parsed = JSON.parse(saved);
      setFormData(parsed);
      setFile1(parsed.upload?.arquivo1 || null);
      setFile2(parsed.upload?.arquivo2 || null);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cadastroData', JSON.stringify(formData));
  }, [formData]);

  const steps = [
    { id: 'basico', label: '1 - Básico' },
    { id: 'endereco', label: '2 - Endereço' },
    { id: 'social', label: '3 - Rede Social' },
    { id: 'upload', label: '4 - Upload PDF' },
  ];

  const handleNextStep = () => {
    const idx = steps.findIndex(s => s.id === activeTab);
    if (idx < steps.length - 1) setActiveTab(steps[idx + 1].id);
  };

  const handlePrevStep = () => {
    const idx = steps.findIndex(s => s.id === activeTab);
    if (idx > 0) setActiveTab(steps[idx - 1].id);
  };

  // ---------------- FORM 1 - BÁSICO ----------------
  const formikBasico = useFormik<BasicFormValues>({
    initialValues: formData.basico || {
      razaoSocial: '',
      cnpj: '',
      email: '',
      pessoaResponsavel: '',
      telefone01: '',
      telefone02: '',
      causaSocial: '',
      sobreOng: '',
    },
    validationSchema: Yup.object({
      razaoSocial: Yup.string().required('Obrigatório'),
      cnpj: Yup.string().required('Obrigatório'),
      email: Yup.string().email('Email inválido').required('Obrigatório'),
      pessoaResponsavel: Yup.string().required('Obrigatório'),
      telefone01: Yup.string().required('Obrigatório'),
      causaSocial: Yup.string().required('Obrigatório'),
    }),
    onSubmit: values => {
      setFormData({ ...formData, basico: values });
      handleNextStep();
    },
  });

  const causaOptions = [
    { label: 'Ambiental', value: 'Ambiental' },
    { label: 'Animal', value: 'Animal' },
    { label: 'Educação', value: 'Educacao' },
    { label: 'Saúde', value: 'Saude' },
    { label: 'Social', value: 'Social' },
  ];

  // ---------------- FORM 2 - ENDEREÇO ----------------
  const formikEndereco = useFormik<AddressFormValues>({
    initialValues: formData.endereco || {
      cep: '',
      endereco: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
    },
    validationSchema: Yup.object({
      cep: Yup.string().required('Obrigatório'),
      endereco: Yup.string().required('Obrigatório'),
      numero: Yup.string().required('Obrigatório'),
      bairro: Yup.string().required('Obrigatório'),
      cidade: Yup.string().required('Obrigatório'),
      estado: Yup.string().required('Obrigatório'),
    }),
    onSubmit: values => {
      setFormData({ ...formData, endereco: values });
      handleNextStep();
    },
  });

  const handleBuscarCep = async (cep: string) => {
    try {
      const cepDados = await getCepData(cep.replace(/\D/g, ''));
      formikEndereco.setFieldValue('cidade', cepDados.localidade);
      formikEndereco.setFieldValue('estado', cepDados.uf);
      formikEndereco.setFieldValue('endereco', cepDados.logradouro);
      formikEndereco.setFieldValue('bairro', cepDados.bairro);
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  };

  // ---------------- FORM 3 - SOCIAL ----------------
  const formikSocial = useFormik<SocialFormValues>({
    initialValues: formData.social || {
      facebook: '',
      instagram: '',
      twitter: '',
      linkedin: '',
    },
    validationSchema: Yup.object({
      facebook: Yup.string().url('URL inválida'),
      instagram: Yup.string().url('URL inválida'),
      twitter: Yup.string().url('URL inválida'),
      linkedin: Yup.string().url('URL inválida'),
    }),
    onSubmit: values => {
      setFormData({ ...formData, social: values });
      handleNextStep();
    },
  });

  // ---------------- FORM 4 - UPLOAD ----------------
  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ ...formData, upload: { arquivo1: file1, arquivo2: file2 } });
    alert('Cadastro finalizado! Todos os dados foram salvos.');
    console.log('Dados completos:', { ...formData, upload: { arquivo1: file1, arquivo2: file2 } });
  };

  // ---------------- RENDERIZAÇÃO DOS FORMULÁRIOS ----------------
  const renderForm = () => {
    switch (activeTab) {
      case 'basico':
        return (
          <form onSubmit={formikBasico.handleSubmit}>
            <h2>Informações Básicas</h2>
            <FormInput
              label="Razão Social"
              name="razaoSocial"
              value={formikBasico.values.razaoSocial}
              onChange={formikBasico.handleChange}
              onBlur={formikBasico.handleBlur}
              error={formikBasico.touched.razaoSocial ? formikBasico.errors.razaoSocial : undefined}
            />
            <FormInput
              label="CNPJ"
              name="cnpj"
              value={formikBasico.values.cnpj}
              onChange={formikBasico.handleChange}
              onBlur={formikBasico.handleBlur}
              error={formikBasico.touched.cnpj ? formikBasico.errors.cnpj : undefined}
            />
            <FormInput
              label="Email"
              type="email"
              name="email"
              value={formikBasico.values.email}
              onChange={formikBasico.handleChange}
              onBlur={formikBasico.handleBlur}
              error={formikBasico.touched.email ? formikBasico.errors.email : undefined}
            />
            <FormInput
              label="Pessoa Responsável"
              name="pessoaResponsavel"
              value={formikBasico.values.pessoaResponsavel}
              onChange={formikBasico.handleChange}
              onBlur={formikBasico.handleBlur}
              error={formikBasico.touched.pessoaResponsavel ? formikBasico.errors.pessoaResponsavel : undefined}
            />
            <FormInput
              label="Telefone 01"
              name="telefone01"
              value={formikBasico.values.telefone01}
              onChange={formikBasico.handleChange}
              onBlur={formikBasico.handleBlur}
              error={formikBasico.touched.telefone01 ? formikBasico.errors.telefone01 : undefined}
            />
            <FormInput
              label="Telefone 02"
              name="telefone02"
              value={formikBasico.values.telefone02}
              onChange={formikBasico.handleChange}
              onBlur={formikBasico.handleBlur}
            />
            <FormRadioGroup
              label="Causa Social"
              name="causaSocial"
              options={causaOptions}
              selectedValue={formikBasico.values.causaSocial}
              onChange={value => formikBasico.setFieldValue('causaSocial', value)}
            />
            {formikBasico.touched.causaSocial && formikBasico.errors.causaSocial && (
              <div className="text-red-500 text-sm">{formikBasico.errors.causaSocial}</div>
            )}
            <div className="form-group">
              <label htmlFor="sobreOng">Conte mais sobre a ONG</label>
              <textarea
                id="sobreOng"
                name="sobreOng"
                value={formikBasico.values.sobreOng}
                onChange={formikBasico.handleChange}
                onBlur={formikBasico.handleBlur}
                rows={4}
              />
            </div>
            <div className="flex justify-end mt-4">
              <button type="submit">Próximo</button>
            </div>
          </form>
        );

      case 'endereco':
        return (
          <form onSubmit={formikEndereco.handleSubmit}>
            <h2>Endereço</h2>
            <FormInput
              label="CEP"
              name="cep"
              value={formikEndereco.values.cep}
              onChange={formikEndereco.handleChange}
              onBlur={e => {
                formikEndereco.handleBlur(e);
                const cep = e.target.value.replace(/\D/g, '');
                if (cep.length === 8) handleBuscarCep(cep);
              }}
              error={formikEndereco.touched.cep ? formikEndereco.errors.cep : undefined}
            />
            <FormInput
              label="Endereço"
              name="endereco"
              value={formikEndereco.values.endereco}
              onChange={formikEndereco.handleChange}
              onBlur={formikEndereco.handleBlur}
              error={formikEndereco.touched.endereco ? formikEndereco.errors.endereco : undefined}
            />
            <FormInput
              label="Número"
              name="numero"
              value={formikEndereco.values.numero}
              onChange={formikEndereco.handleChange}
              onBlur={formikEndereco.handleBlur}
              error={formikEndereco.touched.numero ? formikEndereco.errors.numero : undefined}
            />
            <FormInput
              label="Complemento"
              name="complemento"
              value={formikEndereco.values.complemento}
              onChange={formikEndereco.handleChange}
              onBlur={formikEndereco.handleBlur}
            />
            <FormInput
              label="Bairro"
              name="bairro"
              value={formikEndereco.values.bairro}
              onChange={formikEndereco.handleChange}
              onBlur={formikEndereco.handleBlur}
              error={formikEndereco.touched.bairro ? formikEndereco.errors.bairro : undefined}
            />
            <FormInput
              label="Cidade"
              name="cidade"
              value={formikEndereco.values.cidade}
              onChange={formikEndereco.handleChange}
              onBlur={formikEndereco.handleBlur}
              error={formikEndereco.touched.cidade ? formikEndereco.errors.cidade : undefined}
            />
            <FormInput
              label="Estado"
              name="estado"
              value={formikEndereco.values.estado}
              onChange={formikEndereco.handleChange}
              onBlur={formikEndereco.handleBlur}
              error={formikEndereco.touched.estado ? formikEndereco.errors.estado : undefined}
            />
            <div className="flex justify-between mt-4">
              <button type="button" onClick={handlePrevStep}>Voltar</button>
              <button type="submit">Próximo</button>
            </div>
          </form>
        );

      case 'social':
        return (
          <form onSubmit={formikSocial.handleSubmit}>
            <h2>Redes Sociais</h2>
            <FormInput
              label="Facebook"
              name="facebook"
              value={formikSocial.values.facebook}
              onChange={formikSocial.handleChange}
              onBlur={formikSocial.handleBlur}
            />
            <FormInput
              label="Instagram"
              name="instagram"
              value={formikSocial.values.instagram}
              onChange={formikSocial.handleChange}
              onBlur={formikSocial.handleBlur}
            />
            <FormInput
              label="Twitter"
              name="twitter"
              value={formikSocial.values.twitter}
              onChange={formikSocial.handleChange}
              onBlur={formikSocial.handleBlur}
            />
            <FormInput
              label="LinkedIn"
              name="linkedin"
              value={formikSocial.values.linkedin}
              onChange={formikSocial.handleChange}
              onBlur={formikSocial.handleBlur}
            />
            <div className="flex justify-between mt-4">
              <button type="button" onClick={handlePrevStep}>Voltar</button>
              <button type="submit">Próximo</button>
            </div>
          </form>
        );

      case 'upload':
        return (
          <form onSubmit={handleUploadSubmit}>
            <h2>Upload de Arquivos PDF</h2>
            <FileUpload label="Primeiro Arquivo" file={file1} setFile={setFile1} />
            <FileUpload label="Segundo Arquivo" file={file2} setFile={setFile2} />
            <div className="flex justify-between mt-4">
              <button type="button" onClick={handlePrevStep}>Voltar</button>
              <button type="submit">Finalizar</button>
            </div>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl mb-6">Cadastro Completo</h1>
      <div className="flex justify-center space-x-4 mb-6">
        {steps.map(step => (
          <StepButton
            key={step.id}
            active={activeTab === step.id}
            label={step.label}
            onClick={() => setActiveTab(step.id)}
          />
        ))}
      </div>
      <div>{renderForm()}</div>
    </div>
  );
};

export default CadastroCompleto;
