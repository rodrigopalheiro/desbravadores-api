require('dotenv').config();
   
const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

require('./database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/static', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads' )));

app.use(routes);

app.listen(process.env.PORT || 3000);