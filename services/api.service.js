import axios from 'axios';

export const getExchangeRates = async () => {
    const API_URL = 'https://cdn.cur.su/api/cbr.json';
    const {data} = await axios.get(API_URL);
    return data;
}