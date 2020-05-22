import { get_AllProjects, get_ProjectByname, createProject, updatProject } from '../../Services/Project/project_Db';

export async function getAllProjects(req, res) {
	const projects = await get_AllProjects();
	if (projects) {
		return res.status(200).json({ projects });
	} else return null;
}
export async function getProjectByName(req, res) {
	const name = req.params.ProjectName;
	const projects = await get_ProjectByname(name);
	if (projects) {
		return res.status(200).json({ projects });
	} else return null;
}
export async function create_Project(req, res) {
	let img = req.file;
	const { linkWebsite, linkCode, title, description, techno } = req.body;

	if (req.file) img = req.file.path;

	const projects = await createProject({ img, linkWebsite, linkCode, title, description, techno });
	if (projects) {
		return res.status(200).json({ projects });
	} else return null;
}
export async function update_Project(req, res) {
	let img = req.file;
	const id = req.params.id;
	const { linkWebsite, linkCode, title, description, techno } = req.body;

	if (img) img = '/img/' + req.file.originalname;

	const project = await updatProject({ img, linkWebsite, linkCode, title, description, techno, id });
	if (project) return res.status(200).json({ message: 'Project has been update' });

	return null;
}
