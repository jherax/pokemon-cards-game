const SequelizeMock = require('sequelize-mock');
const DBConnectionMock = new SequelizeMock();

/**
 * Jest-Timers
 * @see https://jestjs.io/docs/timer-mocks
 *
 * You can call jest.useFakeTimers() or jest.useRealTimers() from anywhere
 * (top level, inside an it block, etc.), but it is a global operation and
 * will affect other tests within the same file.
 *
 * Additionally, you need to call jest.useFakeTimers() to reset internal
 * counters before each test. By default jest uses "modern" timers, then
 * if you want to inspect setTimeout or setInterval you will need to call
 * spyOn() upon those methods. If you use "legacy", that won't be required.
 *
 * @example
 *
 * beforeEach(() => jest.useFakeTimers('legacy'|'modern'))
 * afterEach(() => jest.useRealTimers())
 */

// ---------------------------------
// Jest mock is hoisted before any module import

jest.mock('../src/server/config', () => {
  return {
    app: {
      HOST: 'localhost',
      PORT: 8888,
      public: {
        images: '/public/img/',
        html: '/public/html/',
        docs: '/public/docs/',
      },
      maxRequests: 5,
    },
    db: {
      host: 'localhost',
      port: 9999,
      database: 'test-db',
      username: 'contoso',
      password: 'costoso',
    },
    JWT_SECRET: 'my-secret-hash',
    JWT_EXPIRE: 3600, // 1 hour
    isDev: false,
    isProd: false,
    isTest: true,
  };
});

// Mock Sequelize Connection
jest.mock('../src/db/connection', () => {
  return {
    __esModule: true,
    default: () => DBConnectionMock,
  };
});
