'use strict';
export default (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    img: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    techno: DataTypes.STRING,
    linkCode: DataTypes.STRING,
    linkWebsite: DataTypes.STRING
  }, {});

  return Project;
};