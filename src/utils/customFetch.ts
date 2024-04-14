import axios from 'axios';

const productionUrl = 'https://fakestoreapi.com/';

export const customFetch = axios.create({
  baseURL: productionUrl,
});
