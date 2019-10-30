const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const UserController = require('./controllers/UserController');
const UserPhotoController = require('./controllers/UserPhotoController');
const HonorController = require('./controllers/HonorController');
const HonorCategoryController = require('./controllers/HonorCategoryController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json( { message: 'Ok' } );
});

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/photos', UserPhotoController.index);
routes.post('/users/:user_id/photos', multer(multerConfig).single('file'), UserPhotoController.store);
routes.delete('/users/:user_id/photos', UserPhotoController.destroyAll);

routes.get('/honor_categories', HonorCategoryController.index);

routes.get('/honors', HonorController.index);
routes.post('/honors/:honor_category_abbr/create', HonorController.store);


module.exports = routes;