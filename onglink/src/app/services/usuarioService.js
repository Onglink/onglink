import api from './api';


const usuarioSevice = {
    listarUsuario: async () => (await api.get('/usuarios')).data,
    buscarPorId: async (id) => (await api.get(`/usuarios/${id}`)).data,
    cadastrarUsuario: async (data) => (await api.post('/usuarios',data)).data,
    atualizarUsuario: async(id, data) => (await api.put(`/usuarios/${id}`,data)).data,
    deletarUsuario: async(id) => (await api.delete(`/usuarios/${id}`)).data,
    loginUsuario: async(data) => (await api.post('/usuarios/login',data)).data,
};
export default usuarioSevice;
