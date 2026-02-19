// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'mysql2',
  connection: {
    user: 'root',
    password: 'mypass123',
    database: 'database'
  }
}