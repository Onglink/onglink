import api from './api';

const publicacaoSevice = {
    listarPublicacao: async () => (await api.get('/')).data,
    buscarPublicacao: async (id) => (await api.get(`/${id}`)).data,
    cadastrarPublicacao: async () => (await api.post('/',data)).data,
    atualizarPublicacao: async(id) => (await api.put(`/${id}`,data)).data,
    deletarPublicacao: async(id) => (await api.delete(`/${id}`)).data,
};
export default publicacaoSevice;