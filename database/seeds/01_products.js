/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('products').del()
    await knex('products').insert([
      {product_id: 1, name: 'Test', description: 'test', img:'https://kuviasuomesta.fi/wp-content/uploads/2022/02/orava-kuviasuomesta.fi-roine-piirainen.jpg:', price:'20'}
    ]);
  };