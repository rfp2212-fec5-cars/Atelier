require('dotenv').config();
const express = require('express');
const path = require('path');
const router = require('./route.js');
const morgan = require('morgan');

const app = express();

//static service and middle ware
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/', router);

//set Port
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
