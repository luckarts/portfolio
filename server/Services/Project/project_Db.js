import db from '../../Database/models';
import {Op} from 'sequelize';

export async function get_AllProjects() {
	const projects = db.Project.findAll({
		order: [['id', 'DESC']],
	});
	if (projects) {
		return projects;
	}
	return null;
}
export async function get_ProjectByname(name) {
	const projects = db.Project.findOne({
		where: { title: name },
	});
	if (projects) {
		return projects;
	}
	return null;
}
export async function get_ProjectsByTag(tag) {
	const projects = db.Project.findAll({
		order: [['id', 'DESC']],
		where: {

				[Op.or]: [
				  {
					techno: {
					  [Op.like]: `%${tag}%`
					}
				  }
				]
			}
		});

	if (projects) {
		return projects;
	}
	return null;
}
export async function createProject(arg) {
	const projects = db.Project.create({
		img: arg.img,
		linkWebsite: arg.linkWebsite,
		linkCode: arg.linkCode,
		title: arg.title,
		description: arg.description,
		techno: arg.techno,
	});
	if (projects) {
		return projects;
	}
	return null;
}
export async function updatProject(arg) {
	const projects = db.Project.update(
		{
			img: arg.img,
			linkWebsite: arg.linkWebsite,
			linkCode: arg.linkCode,
			title: arg.title,
			description: arg.description,
			techno: arg.techno,
		},
		{ returning: true, where: { id: arg.id } }
	);
	if (projects) {
		return projects;
	}
	return null;
}
