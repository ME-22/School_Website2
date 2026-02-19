const express = require('express')
const config = require('../utils/config')
const app = express()
var router = express.Router();

const options = config.DATABASE_OPTIONS;

const knex = require('knex')(options);
app.use(express.json());

app.get('/api', (req, res) => {
  const userId = 1;
  knex('ordered_item')
    .join('products', 'ordered_item.product_id', '=', 'products.product_id')
    .select('products.product_id', 'products.name', 'products.price', 'ordered_item.quantity')
    .where({ order_id: userId })
    .then((rows) => {
      console.log('Cart Rows:', rows);
      res.json(rows);
    })
    .catch((err) => {
      console.error('Cart Query Error:', err);
      res.status(500).json({ error: err });
    });
});



  module.exports = router;