const { postgresUrl } = require('./config/db_info')

module.exports = {
    client: 'postgresql',
    connection: postgresUrl,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};