import React, { useState } from 'react';
// Certifique-se que o caminho do import está correto para sua estrutura de pastas
import denunciaService from '@/app/services/denunciaService';

interface ModalDenunciaProps {
  isOpen: boolean;
  onClose: () => void;
  postId: string;
}

const TIPOS_DENUNCIA = [
  'Conteudo sensível',
  'Conteúdo sexual',
  'Conteúdo violento ou repulsivo',
  'incitação ao ódio',
  'Desinformação',
  'Abuso infantil'
];

export default function ModalDenuncia({ isOpen, onClose, postId }: ModalDenunciaProps) {
  const [tipo, setTipo] = useState(TIPOS_DENUNCIA[0]);
  const [motivo, setMotivo] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Prepara o objeto conforme o Model do Back-end exige
      const novaDenuncia = {
        tipoDenuncia: tipo,
        motivo: motivo,
        assignedTo: [postId] 
      };

      // Usa o service (já autenticado pelo api.js)
      await denunciaService.cadastrarDenuncia(novaDenuncia);

      alert('Denúncia enviada com sucesso!');
      setMotivo(''); // Limpa o campo
      onClose(); // Fecha o modal
    } catch (error: any) {
      console.error(error);
      const msgErro = error.response?.data?.error || 'Erro ao enviar denúncia.';
      alert(msgErro);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999
    }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '90%', maxWidth: '500px' }}>
        <h2 className="text-xl font-bold mb-4 text-black">Denunciar Publicação</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <label className="flex flex-col text-black">
            <span className="font-semibold">Tipo de violação:</span>
            <select 
              value={tipo} 
              onChange={(e) => setTipo(e.target.value)}
              className="border p-2 rounded mt-1 bg-white"
            >
              {TIPOS_DENUNCIA.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col text-black">
            <span className="font-semibold">Descreva o motivo:</span>
            <textarea 
              required
              value={motivo} 
              onChange={(e) => setMotivo(e.target.value)}
              className="border p-2 rounded mt-1 bg-white"
              rows={4}
              placeholder="Explique por que isso viola as regras..."
            />
          </label>

          <div className="flex justify-end gap-2 mt-4">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              disabled={loading}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              {loading ? 'Enviando...' : 'Enviar Denúncia'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}