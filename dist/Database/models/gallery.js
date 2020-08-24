'use strict';

module.exports = function (sequelize, DataTypes) {
  var Gallery = sequelize.define('Gallery', {
    image: DataTypes.STRING
  }, {});

  Gallery.associate = function (models) {// associations can be defined here
  };

  return Gallery;
};