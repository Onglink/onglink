import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://onglink-backend.vercel.app/api',
  headers:{
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY || 'fcf87fe4-7793-477d-b765-620c5cdbcf4f',
  }
});

export default api;
