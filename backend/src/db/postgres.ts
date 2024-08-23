import {type Express} from 'express';

import events from '../server/events';
import logger from '../utils/logger';
import getConnection from './connection';

async function connectDb(app: Express) {
  const sequelize = getConnection();

  return sequelize
    .authenticate()
    .then(() => {
      logger.info('🐘 Postgres is connected');
      app.emit(events.SERVER_READY);
    })
    .catch(err => {
      logger.error('🐘 Postgres connection failed.');
      throw Error(err);
    });
}

export default connectDb;
