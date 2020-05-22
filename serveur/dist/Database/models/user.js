'use strict';

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    "id": {
      "type": DataTypes.INTEGER(11),
      "allowNull": false,
      "autoIncrement": true,
      "primaryKey": true
    },
    "email": {
      "type": DataTypes.STRING(30),
      "allowNull": false,
      "lowercase": true,
      "trim": true,
      "unique": true,
      "required": true
    },
    "password": {
      "type": DataTypes.STRING(500),
      "allowNull": false,
      "required": true
    },
    "imgProfile": {
      "type": DataTypes.STRING(150),
      "allowNull": false,
      "required": true
    },
    "description": {
      "type": DataTypes.STRING(),
      "allowNull": false,
      "required": true
    },
    "cv": {
      "type": DataTypes.STRING(80),
      "allowNull": false,
      "required": true
    }
  }, {});

  User.associate = function (models) {// associations can be defined here
  };

  return User;
};