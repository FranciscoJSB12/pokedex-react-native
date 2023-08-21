import { API_HOST } from "../utils/constants";

export const getPokemonsApi = async () => {
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        const res = await fetch(url);
        const data = res.json();
        return data;
    } catch (err) {
        throw err;
    }
}