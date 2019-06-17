import axios from 'axios';

export function fetchExchangeRates(table) {
    return axios.get(`/${table}/`).then(response => response.data);
}