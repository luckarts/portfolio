'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('List_experiences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      experienceDetailId: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('List_experiences');
  }
};