import api from './api';

const denunciaService = {
    listarDeuncia: async () => (await api.get('/denuncia')).data,
    buscarDenuncia: async (id) => (await api.get(`/denuncia/${id}`)).data,
    cadastrarDenuncia: async (data) => (await api.post('/denuncia',data)).data,
    deletarDenuncia: async(id) => (await api.delete(`/denuncia/${id}`)).data,
};
export default denunciaService;