import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://api.pokemontcg.io/v1/',
});

// Auth and token validation should be handled here

instance.interceptors.request.use(
  config => ({...config}),
  error => Promise.reject(error),
);

export const pokemonService = instance;
