/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('ordered_item').del()
    await knex('ordered_item').insert([
      {ordered_item_id: 1, product_id: 1, order_id: 1, quantity:1}
    ]);
  };