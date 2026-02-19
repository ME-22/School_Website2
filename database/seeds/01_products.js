/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('products').del()
    await knex('products').insert([
      {
        product_id: 1,
        name: "Granite",
        description: "A rugged, natural granite rock with a powerful presence. Perfect for decoration, landscaping, or gifting to someone who appreciates raw nature.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Texture_de_Granites_sous_le_pont_d%27Athi%C3%A9m%C3%A9_02.jpg/960px-Texture_de_Granites_sous_le_pont_d%27Athi%C3%A9m%C3%A9_02.jpg?20230610141424",
        price: 29.99
      },
      {
        product_id: 2,
        name: "Basalt",
        description: "Dark volcanic basalt with a smooth texture and deep charcoal tones. Great for minimalist displays or collectors.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ice_Springs_basalt_Utah.jpg/960px-Ice_Springs_basalt_Utah.jpg?20210525011413",
        price: 34.50
      },
      {
        product_id: 3,
        name: "Quartz",
        description: "A beautiful quartz stone featuring natural crystal veins that shimmer under light.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Aschamalmite_and_quartz_01.jpg/960px-Aschamalmite_and_quartz_01.jpg?20240402120658",
        price: 24.90
      },
      {
        product_id: 4,
        name: "River Stone",
        description: "Smooth, water-shaped river rock with soft curves and a calming aesthetic.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Stones_River_McFaddenFord_P8160137_Stones_River_McFaddenFord.JPG/960px-Stones_River_McFaddenFord_P8160137_Stones_River_McFaddenFord.JPG?20160108190028",
        price: 18.75
      },
      {
        product_id: 5,
        name: "Agate",
        description: "A polished agate stone with natural green moss-like inclusions. Ideal for collectors and decor enthusiasts.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Blue_Lace_Agate_from_Namibia_%28polished%29.jpg/960px-Blue_Lace_Agate_from_Namibia_%28polished%29.jpg?20250216164253",
        price: 39.00
      }
    ]);
  };