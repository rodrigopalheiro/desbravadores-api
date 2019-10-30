const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const UserPhoto = require('../models/UserPhoto');
const HonorCategory = require('../models/HonorCategory');
const Honor = require('../models/Honor');

const connection = new Sequelize(dbConfig);

User.init(connection);
UserPhoto.init(connection);
HonorCategory.init(connection);
Honor.init(connection);

User.associate(connection.models);
UserPhoto.associate(connection.models);
HonorCategory.associate(connection.models);
Honor.associate(connection.models);

module.exports = connection;