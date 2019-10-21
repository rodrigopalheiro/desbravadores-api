const express = require('express');

const UserController = require('./controllers/UserController');
const HonorController = require('./controllers/HonorController');
const HonorCategoryController = require('./controllers/HonorCategoryController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json( { message: 'Ok' } );
});

routes.post('/users', UserController.store);

routes.get('/honor_categories', HonorCategoryController.index);

routes.get('/honors', HonorController.index);
routes.post('/honors/:honor_category_abbr/create', HonorController.store);


module.exports = routes;