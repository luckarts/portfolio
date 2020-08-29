'use strict';
module.exports = (sequelize, DataTypes) => {
  const List_experience = sequelize.define('List_experience', {
    description: DataTypes.STRING,
    experienceDetailId: DataTypes.INTEGER
  }, {});
  List_experience.associate = function (models) {

    List_experience.belongsTo(models.Experience_detail, { as: 'Experience_detail', foreignKey: 'experienceDetailId', targetKey: "id" });

  };
  return List_experience;
};