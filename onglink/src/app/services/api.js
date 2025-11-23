import axios from 'axios';

const api = axios.create({
  //baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://onglink-backend.vercel.app/api',
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL= 'http://localhost:4000/api',
  headers:{
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY || 'fcf87fe4-7793-477d-b765-620c5cdbcf4f',
  }
});
api.interceptors.request.use(
    (config) => {
        
        // 'authToken' deve ser a mesma chave que você usou no login!
        const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

        // Se tiver token, adiciona no cabeçalho Authorization
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
