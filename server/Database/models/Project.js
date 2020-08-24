'use strict';

export default (Sequelize, DataTypes) => {
	const Project = Sequelize.define(
		'Project',
		{
			img: DataTypes.STRING,
			title: DataTypes.STRING,
			description: DataTypes.STRING,
			techno: DataTypes.STRING,
			linkCode: DataTypes.STRING,
			linkWebsite: DataTypes.STRING,
			position: DataTypes.INTEGER,
		},
		{}
	);

	return Project;
};
