const express = require('express')
const config = require('../utils/config')
const app = express()
var router = express.Router();

const options = config.DATABASE_OPTIONS;

const knex = require('knex')(options);
app.use(express.json());

app.get('/orders',(req,res)=>{
    const userId = 1 // Hardcoded user_id for lazynes
    knex('orders').select('*')
      .where('status','open')
      .andWhere('user_id',userId)
      .then((rows) => {
        // console.log(rows)
        res.json(rows)
    })
    .catch((err) => {
      console.log('SELECT * orders failed')
      res.status(500).json({ error: err })
    })
  })
module.exports = router;