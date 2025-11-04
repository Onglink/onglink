import api from './api';

const denunciaSevice = {
    listarDeuncia: async () => (await api.get('/')).data,
    buscarDenuncia: async (id) => (await api.get(`/${id}`)).data,
    cadastrarDenuncia: async () => (await api.post('/',data)).data,
    deletarDenuncia: async(id) => (await api.delete(`/${id}`)).data,
};
export default denunciaSevice;