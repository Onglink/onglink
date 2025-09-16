import axios from "axios";


export type CepResponse = {

    cep: string;
    logradouro?: string;
    bairro?: string;
    localidade: string;
    uf: string;
};

export async function getCepData(cep:string) {
    
    return(
        await axios.get<CepResponse>(
            `https://viacep.com.br/ws/${cep.replace("-", "")}/json`
        )
    ).data;
}