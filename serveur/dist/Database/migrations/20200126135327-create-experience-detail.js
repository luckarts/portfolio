'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Experience_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      "function": {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      experiencesId: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Experience_details');
  }
};