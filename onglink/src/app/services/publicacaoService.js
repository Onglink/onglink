import api from './api';
//import axios from 'axios';

const publicacaoSevice = {
    listarPublicacao: async () => (await api.get('/publicacoes')).data,
    buscarPublicacao: async (id) => (await api.get(`/publicacoes/${id}`)).data,
    cadastrarPublicacao: async (formData) => (await api.post('/publicacoes',formData)).data,
    atualizarPublicacao: async(id,data) => (await api.put(`/publicacoes/${id}`,data)).data,
    deletarPublicacao: async(id) => (await api.delete(`/publicacoes/${id}`)).data,
};
export default publicacaoSevice;