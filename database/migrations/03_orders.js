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
    .createTable('orders', t => {
        t.increments('order_id').primary()
        t.string('status').notNullable()
        t.integer('user_id').unsigned().notNullable()
        t.foreign('user_id').references('user_id').inTable('users')
        t.timestamps(false, true)
    })
};
exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('orders')
};