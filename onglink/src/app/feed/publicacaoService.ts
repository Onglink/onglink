import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api', // ou URL do deploy
});

export async function listarPublicacoes() {
  const response = await api.get('/publicacoes');
  return response.data;
}

export async function criarPublicacao(dados: any) {
  const response = await api.post('/publicacoes', dados);
  return response.data;
}

export async function atualizarPublicacao(id: string, dados: any) {
  const response = await api.put(`/publicacoes/${id}`, dados);
  return response.data;
}

export async function deletarPublicacao(id: string) {
  const response = await api.delete(`/publicacoes/${id}`);
  return response.data;
}