var express = require('express');
var path = require('path');
var logger = require('morgan');
require('dotenv').config()

const config = require('./utils/config')

var productRouter = require('./routes/productRouter');
var cartRouter = require('./routes/cartRouter')
var orderRouter = require('./routes/ordersRouter')
var finish = require('./routes/Finish')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', productRouter,cartRouter,orderRouter,finish);

// app.listen(config.PORT, () => {
//     console.log(`Server running on port ${config.PORT}`);
// });

module.exports = app;
