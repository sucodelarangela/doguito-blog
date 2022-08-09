import axios from 'axios';

// url base do banco de dados json-server
export const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export const busca = async (url, setDado) => {
    const resposta = await api.get(url);
    setDado(resposta.data);
};