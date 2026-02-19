/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('orders').del()
    await knex('orders').insert([
      {order_id: 1, user_id:1, status:'open', created_at:'2024-09-25 12:14:13', updated_at:'2024-09-25 12:14:13'}
    ]);
  };