"use client";
import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col, Alert } from "react-bootstrap";
import ongService from "@/app/services/ongService";

// Tipagem dos dados (igual ao seu MenuLat)
type OngData = {
  _id: string;
  nomeFantasia: string;
  razaoSocial?: string;
  causaSocial: string;
  descricao: string;
  telefone: string;
  email: string;
  logo?: string; // Vamos tratar upload de logo separadamente se necessário
  endereco: {
    rua: string;
    numeroEnd: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  redeSocial: {
    instagram: string;
    facebook: string;
    site: string;
  };
};

interface ModalEditarOngProps {
  show: boolean;
  onHide: () => void;
  ongData: OngData;
  onSuccess: () => void; // Função para recarregar a página/menu após salvar
}

export default function ModalEditarOng({ show, onHide, ongData, onSuccess }: ModalEditarOngProps) {
  const [formData, setFormData] = useState<OngData>(ongData);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  // Atualiza o form se os dados de entrada mudarem
  useEffect(() => {
    if (ongData) setFormData(ongData);
  }, [ongData]);

  // Função genérica para atualizar campos de texto simples
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Função para atualizar campos aninhados (Endereço)
  const handleEnderecoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      endereco: { ...prev.endereco, [name]: value },
    }));
  };

  // Função para atualizar campos aninhados (Redes Sociais)
  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      redeSocial: { ...prev.redeSocial, [name]: value },
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setErro(null);
    try {
      // Chama o serviço de atualização
      await ongService.atualizarOng(formData._id, formData);
      alert("Dados atualizados com sucesso!");
      onSuccess(); // Recarrega dados no pai
      onHide();    // Fecha modal
    } catch (err: any) {
      console.error(err);
      setErro("Erro ao atualizar. Verifique os dados.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton className="bg-light">
        <Modal.Title>Editar Informações da ONG</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {erro && <Alert variant="danger">{erro}</Alert>}
        
        <Form>
          {/* SEÇÃO 1: DADOS GERAIS */}
          <h5 className="text-primary mb-3">Dados Gerais</h5>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Nome Fantasia</Form.Label>
                <Form.Control 
                    name="nomeFantasia" 
                    value={formData.nomeFantasia} 
                    onChange={handleChange} 
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Causa Social</Form.Label>
                <Form.Select 
                    name="causaSocial" 
                    value={formData.causaSocial} 
                    onChange={handleChange as any}
                >
                    <option value="Ambiental">Ambiental</option>
                    <option value="Animal">Animal</option>
                    <option value="Educacao">Educação</option>
                    <option value="Saude">Saúde</option>
                    <option value="Social">Social</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Descrição (Sobre a ONG)</Form.Label>
            <Form.Control 
                as="textarea" 
                rows={3} 
                name="descricao" 
                value={formData.descricao} 
                onChange={handleChange} 
            />
          </Form.Group>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Telefone</Form.Label>
                <Form.Control 
                    name="telefone" 
                    value={formData.telefone} 
                    onChange={handleChange} 
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>E-mail de Contato</Form.Label>
                <Form.Control 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                />
              </Form.Group>
            </Col>
          </Row>

          <hr />

          {/* SEÇÃO 2: ENDEREÇO */}
          <h5 className="text-primary mb-3">Endereço</h5>
          <Row className="mb-2">
             <Col md={3}>
                <Form.Group>
                    <Form.Label>CEP</Form.Label>
                    <Form.Control name="cep" value={formData.endereco?.cep || ''} onChange={handleEnderecoChange} />
                </Form.Group>
             </Col>
             <Col md={7}>
                <Form.Group>
                    <Form.Label>Rua</Form.Label>
                    <Form.Control name="rua" value={formData.endereco?.rua || ''} onChange={handleEnderecoChange} />
                </Form.Group>
             </Col>
             <Col md={2}>
                <Form.Group>
                    <Form.Label>Nº</Form.Label>
                    <Form.Control name="numeroEnd" value={formData.endereco?.numeroEnd || ''} onChange={handleEnderecoChange} />
                </Form.Group>
             </Col>
          </Row>
          <Row className="mb-3">
             <Col md={4}>
                <Form.Group>
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control name="bairro" value={formData.endereco?.bairro || ''} onChange={handleEnderecoChange} />
                </Form.Group>
             </Col>
             <Col md={4}>
                <Form.Group>
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control name="cidade" value={formData.endereco?.cidade || ''} onChange={handleEnderecoChange} />
                </Form.Group>
             </Col>
             <Col md={4}>
                <Form.Group>
                    <Form.Label>Estado</Form.Label>
                    <Form.Control name="estado" value={formData.endereco?.estado || ''} onChange={handleEnderecoChange} />
                </Form.Group>
             </Col>
          </Row>

          <hr />

          {/* SEÇÃO 3: REDES SOCIAIS */}
          <h5 className="text-primary mb-3">Redes Sociais</h5>
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Instagram (URL)</Form.Label>
                <Form.Control 
                    name="instagram" 
                    value={formData.redeSocial?.instagram || ''} 
                    onChange={handleSocialChange} 
                    placeholder="https://instagram.com/..."
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Facebook (URL)</Form.Label>
                <Form.Control 
                    name="facebook" 
                    value={formData.redeSocial?.facebook || ''} 
                    onChange={handleSocialChange} 
                    placeholder="https://facebook.com/..."
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Site Oficial</Form.Label>
                <Form.Control 
                    name="site" 
                    value={formData.redeSocial?.site || ''} 
                    onChange={handleSocialChange} 
                    placeholder="https://..."
                />
              </Form.Group>
            </Col>
          </Row>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="success" onClick={handleSubmit} disabled={loading}>
          {loading ? "Salvando..." : "Salvar Alterações"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}