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
    .createTable('products', t => {
        t.increments('product_id').primary()
        t.string('name').notNullable()
        t.string('description').notNullable()
        t.string('img').notNullable()
        t.string('price').notNullable()
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('products')
};