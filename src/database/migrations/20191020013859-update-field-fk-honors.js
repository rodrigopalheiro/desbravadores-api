'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('honors', 'category_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'honor_categories', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('honors', 'category_id');
  }
};