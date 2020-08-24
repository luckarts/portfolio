'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Experiences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER
      },
      "experience_detailsId_left": {
        type: Sequelize.INTEGER
      },
      "experience_detailsId_right": {
        type: Sequelize.INTEGER
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Experiences');
  }
};