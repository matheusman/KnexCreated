// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: "mysql2",
    connection: {
      database: "jest",
      user: "root",
      password: "root",
    },
     migrations: {
    tableName: "knex_migrations",
    directory: `${__dirname}/src/database/migrations`,
  },
  },
 
    pool: {
      min: 2,
      max: 10,
    }
};
