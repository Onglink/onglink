// parceiroSevice.js (CÓDIGO CORRIGIDO COM TRATAMENTO DE ERRO)

import api from './api';


const parceiroSevice = {
    listarParceiro: async () => {
        try {
            // Tenta obter os dados da API
            const response = await api.get('/parceiros');
            
            // Verifica se a resposta foi bem-sucedida (status 2xx)
            if (response.status >= 200 && response.status < 300) {
                 return response.data;
            } else {
                 // Trata respostas não-2xx (como 404 ou 500)
                 console.error('Resposta da API não foi bem-sucedida:', response.status);
                 return []; // Retorna um array vazio para não quebrar a aplicação
            }

        } catch (error) {
            // Captura falhas de rede, timeouts ou erros no Axios/Fetch
            console.error('Erro ao buscar parceiros na camada de serviço:', error.message);
            // IMPORTANTE: Retorna um array vazio para evitar que o componente trave
            return []; 
        }
    }
};

export default parceiroSevice;