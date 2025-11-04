import api from './api';

const ongSevice = {
    listarOng: async () => (await api.get('/')).data,
    buscarOngPorId: async (id) => (await api.get(`/${id}`)).data,
    cadastrarOng: async () => (await api.post('/',data)).data,
    atualizarOng: async(id) => (await api.put(`/${id}`,data)).data,
    deletarOng: async(id) => (await api.delete(`/${id}`)).data,
};
export default ongSevice;