const config = {
  POKEMON_API_URL: validateKey('REACT_APP_POKEMON_API_URL'),
  POKEMON_API_KEY: process.env['REACT_APP_POKEMON_API_KEY'], // not required for dev
};

function validateKey(key: string): string {
  const keyValue = process.env[key];
  if (keyValue == null || keyValue === '') {
    throw TypeError(`Wrong value for ${key} = ${keyValue}`);
  }
  return String(keyValue);
}

export default config;
