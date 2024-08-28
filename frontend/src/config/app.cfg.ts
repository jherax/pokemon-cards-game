const config = {
  POKEMON_API_URL: validateKey('REACT_APP_POKEMON_API_URL'),
  POKEMON_API_KEY: process.env['REACT_APP_POKEMON_API_KEY'], // not required for dev
  // Base URL and JWT used for the backend endpoints
  BACKEND_BASE_URL: validateKey('REACT_APP_BACKEND_BASE_URL'),
  BACKEND_JWT_TOKEN: validateKey('REACT_APP_BACKEND_JWT_TOKEN'),
};

function validateKey(key: string): string {
  const keyValue = process.env[key];
  if (keyValue == null || keyValue === '') {
    throw TypeError(`Wrong value for ${key} = ${keyValue}`);
  }
  return String(keyValue);
}

export default config;
