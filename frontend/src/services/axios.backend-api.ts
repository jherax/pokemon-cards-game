import Axios from 'axios';

import config from '../config/app.cfg';

const {BACKEND_BASE_URL, BACKEND_JWT_TOKEN} = config;

const instance = Axios.create({
  baseURL: BACKEND_BASE_URL,
});

/** @see https://blog.logrocket.com/using-axios-set-request-headers/#setting-conditional-headers */
instance.interceptors.request.use(
  cfg => {
    cfg.headers['Authorization'] = `Bearer ${BACKEND_JWT_TOKEN}`;
    return cfg;
  },
  error => Promise.reject(error),
);

export const backendService = instance;
