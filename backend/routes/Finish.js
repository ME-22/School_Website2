const express = require('express')
const config = require('../utils/config')
const app = express()
var router = express.Router();

const options = config.DATABASE_OPTIONS;

const knex = require('knex')(options);
app.use(express.json());

router.put('/finish', async (req, res) => {
  const { cart, deliveryInfo } = req.body;

  try {
    let user = await knex('users')
      .where({
        username: deliveryInfo.name,
        street_address: deliveryInfo.street_address,
        postal_code: deliveryInfo.postal_code,
        post_office_location: deliveryInfo.post_office_location
      })
      .first();

    let user_id;

    if (user) {
      user_id = user.user_id;
      console.log('User already exists with ID:', user_id);
      console.log('Existing user found:', user.username);
    } else {
      const [newUserId] = await knex('users').insert({
        username: deliveryInfo.name,
        password: '',
        street_address: deliveryInfo.street_address,
        postal_code: deliveryInfo.postal_code,
        post_office_location: deliveryInfo.post_office_location,
        created_at: new Date(),
        updated_at: new Date()
      });

      user_id = newUserId;
      console.log('New user created:', user_id);
    }

    const [order_id] = await knex('orders').insert({
      status: 'Pending',
      user_id: user.user_id,
      created_at: new Date(),
      updated_at: new Date()
    });

    console.log('Order created with ID:', order_id);

    const orderedItems = cart.map(item => ({
      product_id: item.product_id,
      order_id: order_id,
      quantity: item.quantity
    }));

    await knex('ordered_item').insert(orderedItems);

    console.log('Ordered items inserted:', orderedItems);

    res.status(201).send({ message: 'Order successfully placed!' });

  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while placing the order.' });
  }
});



module.exports = router;