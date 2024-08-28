import Axios, {type AxiosRequestConfig} from 'axios';

import config from '../config/app.cfg';

// This Header is required only for PROD environments
const instanceConfig: AxiosRequestConfig = config.POKEMON_API_KEY
  ? {
      headers: {
        'X-Api-Key': `${config.POKEMON_API_KEY}`,
      },
    }
  : {};

const instance = Axios.create({
  baseURL: config.POKEMON_API_URL,
  ...instanceConfig,
});

/** @see https://blog.logrocket.com/using-axios-set-request-headers/#setting-conditional-headers */
instance.interceptors.request.use(
  // Auth and token validation should be handled here:
  // config.headers['Authorization'] = `Bearer ${TOKEN}`
  axiosConfig => axiosConfig,
  error => Promise.reject(error),
);

export const pokemonService = instance;
