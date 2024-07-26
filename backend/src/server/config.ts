import env from 'dotenv';

env.config();

const config = {
  app: {
    HOST: process.env.APP_HOST || 'localhost',
    PORT: process.env.APP_PORT || 3004,
    public: {
      images: '/public/img/',
      html: '/public/html/',
      docs: '/public/docs/',
    },
    maxRequests: +process.env.MAX_REQUESTS_PER_WINDOW || 100,
  },
  db: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  },
};

export default config;
