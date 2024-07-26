import {type Express} from 'express';
import {type Options, Sequelize} from 'sequelize';

import config from '../server/config';
import events from '../server/events';
import logger from '../utils/logger';

const options: Options = {
  pool: {
    max: 5,
    min: 0,
    acquire: 30_000,
    idle: 10_000,
  },
};

async function connectDb(app: Express) {
  const {host, port, database, username, password} = config.db;
  const uri = `postgresql://${username}:${password}@${host}:${port}/${database}`;
  const sequelize = new Sequelize(uri, {...options, dialect: 'postgres'});

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
