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
};

export default config;
