import { API_HOST } from '../utils/constants';

export const getPokemonsApi = async (endpointUrl) => {
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        const res = await fetch(endpointUrl || url);
        const data = res.json();
        return data;
    } catch (err) {
        throw err;
    }
}

export const getPokemonDetailsByUrlApi = async (url) => {
    try {
        const res = await fetch(url);
        const result = await res.json();
        return result;
    } catch (err) {
        throw err;
    }
}