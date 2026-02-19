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
    .createTable('ordered_item', t => {
        t.increments('ordered_item_id').primary()
        t.integer('product_id').unsigned().notNullable()
        t.foreign('product_id').references('product_id').inTable('products')
        t.integer('order_id').unsigned().notNullable()
        t.foreign('order_id').references('order_id').inTable('orders')
        t.integer('quantity').nullable
    })
};
exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('ordered_item')
};
