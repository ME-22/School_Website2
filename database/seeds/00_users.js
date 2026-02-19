/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('users').del()
    await knex('users').insert([
      {user_id: 1, username: 'Test', password: 'test',street_address: 'test',postal_code: '1234',post_office_location: 'test',created_at:'2024-09-25 12:14:13', updated_at:'2024-09-25 12:14:13'}

    ]);
  };