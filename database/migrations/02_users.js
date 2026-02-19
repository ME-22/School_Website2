/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('users', t => {
        t.increments('user_id').primary()
        t.string('username').notNullable().unique()
        t.string('password').notNullable()
        t.string('street_address').notNullable()
        t.string('postal_code').notNullable()
        t.string('post_office_location').notNullable()
        t.timestamps(false, true)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('users')
  };
