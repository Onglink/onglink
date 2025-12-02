// [Frontend] parceiroSevice.js (Versão Robusta contra HTML)

import api from './api';

const parceiroSevice = {
    listarParceiro: async () => {
        try {
            const response = await api.get('/parceiros');
            
            // Verifica se a requisição foi um sucesso (Status 2xx)
            if (response.status >= 200 && response.status < 300) {
                 return response.data; // Retorna os dados JSON
            } else {
                 // Se for 4xx ou 5xx, trata como falha de dados
                 console.error('Resposta da API não foi bem-sucedida:', response.status);
                 throw new Error(`Falha na API com status ${response.status}.`);
            }

        } catch (error) {
            let errorMessage = "Erro de rede desconhecido.";

            if (error.response) {
                // O erro de "JSON inválido" ocorre aqui. Tentamos ler o corpo HTML
                
                // Se o corpo dos dados for uma string (que geralmente é HTML ou erro simples)
                if (typeof error.response.data === 'string') {
                    // Verificamos se a string é HTML
                    if (error.response.data.startsWith('<!DOCTYPE')) {
                        errorMessage = "Erro de Servidor (Express) - Retornou HTML em vez de JSON. Verifique o server.js.";
                    } else {
                        // Pode ser um erro simples não formatado (404/500)
                        errorMessage = `Erro HTTP ${error.response.status}: ${error.response.data.substring(0, 50)}...`;
                    }
                } else if (error.response.data && error.response.data.message) {
                    // Erros formatados em JSON (melhor cenário)
                    errorMessage = error.response.data.message;
                }
            } else {
                // Erro de rede (servidor Express/Backend desligado)
                errorMessage = "Falha de Rede: O servidor Backend não está acessível.";
            }

            console.error('Erro detalhado:', errorMessage);
            // IMPORTANTE: Lança o erro com a mensagem tratada para o componente capturar
            throw new Error(errorMessage);
        }
    }
};

export default parceiroSevice;