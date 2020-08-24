'use strict';

module.exports = function (sequelize, DataTypes) {
  var Experience = sequelize.define('Experience', {
    year: DataTypes.INTEGER
  }, {});

  Experience.associate = function (models) {};

  return Experience;
};