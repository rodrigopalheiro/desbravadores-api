const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const HonorCategory = require('../models/HonorCategory');
const Honor = require('../models/Honor');

const connection = new Sequelize(dbConfig);

User.init(connection);
HonorCategory.init(connection);
Honor.init(connection);

HonorCategory.associate(connection.models);
Honor.associate(connection.models);

module.exports = connection;