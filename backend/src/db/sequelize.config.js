require('ts-node/register');

const {default: config} = require('../server/config.ts');
const {default: getConnection} = require('./connection');

/**
 * @see https://dev.to/maliksamad/sequelize-cli-typescript-4ff0
 * @see https://dev.to/nedsoft/getting-started-with-sequelize-and-postgres-emp
 */
module.exports = {
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
  host: config.db.host,
  port: config.db.port,
  dialect: 'postgres',
  sequelize: getConnection(),
};
