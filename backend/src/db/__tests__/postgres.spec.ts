import {NodeServer} from '../../server';
import events from '../../server/events';
import logger from '../../utils/logger';
import getConnection from '../connection';

describe('Connect database using Postgres and Sequelize', () => {
  jest.spyOn(NodeServer.prototype, 'start').mockImplementation(jest.fn());
  const sequelizeConn = getConnection();
  let emitter: jest.SpyInstance;
  let appInstance: NodeServer;

  // prevent the logger methods from writting the terminal
  const logError = jest.spyOn(logger, 'error').mockImplementation(jest.fn());
  const logInfo = jest.spyOn(logger, 'info').mockImplementation(jest.fn());

  beforeAll(async () => {
    appInstance = new NodeServer();
    emitter = jest.spyOn(appInstance.app, 'emit');
  });

  afterAll(() => {
    appInstance.server.close();
  });

  beforeEach(() => {
    logInfo.mockClear();
    emitter.mockClear();
  });

  // Database connection is successfully established with Postgres
  it('should emit SERVER_READY event when database connection is successful', async () => {
    const authenticateMock = jest
      .spyOn(sequelizeConn, 'authenticate')
      .mockResolvedValueOnce();

    await appInstance.startDB();
    expect(authenticateMock).toHaveBeenCalled();
    expect(logInfo).toHaveBeenCalledWith('🐘 Postgres is connected');
    expect(emitter).toHaveBeenCalledWith(events.SERVER_READY);
  });

  // Invalid database credentials result in connection failure
  it('should log error when database connection fails', async () => {
    const rejection = new Error('Invalid credentials');
    const authenticateMock = jest
      .spyOn(sequelizeConn, 'authenticate')
      .mockRejectedValueOnce(rejection);

    try {
      await appInstance.startDB();
    } catch (error) {
      expect(error.message).toMatch(rejection.message);
      expect(logError).toHaveBeenCalledWith('🐘 Postgres connection failed.');
      expect(authenticateMock).toHaveBeenCalled();
      expect(emitter).not.toHaveBeenCalled();
    }
  });
});
