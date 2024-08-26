import {Sequelize} from 'sequelize-typescript';

import config from '../server/config';

/**
 * @see https://www.npmjs.com/package/sequelize-typescrip */
let sequelizeInstance = null as Sequelize;

function getConnection(): Sequelize {
  if (sequelizeInstance) {
    return sequelizeInstance;
  }
  const {host, port, database, username, password} = config.db;
  const uri = `postgresql://${username}:${password}@${host}:${port}/${database}`;
  sequelizeInstance = new Sequelize(uri, {
    models: [__dirname + '/models'],
    dialect: 'postgres',
    // storage: ':memory:',
    // timezone: 'utc',
    pool: {
      max: 5,
      min: 0,
      acquire: 30_000,
      idle: 10_000,
    },
  });

  return sequelizeInstance;
}

export default getConnection;
