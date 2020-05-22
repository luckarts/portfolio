'use strict';
module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define('Experience', {
    year: DataTypes.INTEGER
  }, {});
  Experience.associate = (models) => {

  };

  return Experience;
};