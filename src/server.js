require('dotenv').config();
   
const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');
const path = require('path');

require('./database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/static', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads' )));

app.use(routes);

app.listen(3000);