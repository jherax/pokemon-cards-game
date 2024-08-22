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
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRE: +process.env.JWT_EXPIRE || 86400, // 1 DAY
  isDev: ['development', 'dev'].includes(process.env.NODE_ENV),
  isProd: ['production', 'prod'].includes(process.env.NODE_ENV),
  isTest: process.env.NODE_ENV === 'test',
};

export default config;
