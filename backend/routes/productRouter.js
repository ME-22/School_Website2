const express = require('express')
const config = require('../utils/config')
const app = express()
var router = express.Router();

const options = config.DATABASE_OPTIONS;

const knex = require('knex')(options);
app.use(express.json());

router.get('/products', (req, res) => {
    knex('products').select('*')
      .then((rows) => {
        // console.log(rows)
        res.json(rows)
      })
      .catch((err) => {
        console.error('SELECT * FROM products failed:', err);
        res.status(500).json({ error: err });
      })
  });



module.exports = router;