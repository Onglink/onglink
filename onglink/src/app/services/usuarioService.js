import api from './api';

const usuarioSevice = {
    listarUsuario: async () => (await api.get('/')).data,
    buscarPorId: async (id) => (await api.get(`/${id}`)).data,
    cadastrarUsuario: async () => (await api.post('/',data)).data,
    atualizarUsuario: async(id) => (await api.put(`/${id}`,data)).data,
    deletarUsuario: async(id) => (await api.delete(`/${id}`)).data,
};
export default usuarioSevice;
