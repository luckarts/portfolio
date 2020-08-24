'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(Sequelize, DataTypes) {
  var Project = Sequelize.define('Project', {
    img: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    techno: DataTypes.STRING,
    linkCode: DataTypes.STRING,
    linkWebsite: DataTypes.STRING
  }, {});
  return Project;
};

exports.default = _default;