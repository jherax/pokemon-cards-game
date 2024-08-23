import {type Options, Sequelize} from 'sequelize';

import config from '../server/config';

const options: Options = {
  pool: {
    max: 5,
    min: 0,
    acquire: 30_000,
    idle: 10_000,
  },
};

let sequelizeInstance = null as Sequelize;

function getConnection(): Sequelize {
  if (sequelizeInstance) {
    return sequelizeInstance;
  }
  const {host, port, database, username, password} = config.db;
  const uri = `postgresql://${username}:${password}@${host}:${port}/${database}`;
  sequelizeInstance = new Sequelize(uri, {...options, dialect: 'postgres'});
  return sequelizeInstance;
}

export default getConnection;
