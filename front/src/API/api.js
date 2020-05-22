import axios from 'axios';
const headers = { Authorization: 'Bearer ' + localStorage.getItem('token') };

export default {
	user: {
		signup: (user) => axios.post('api/users/signup', user).then((res) => res.data),
		login: (user) => axios.post('api/users/signin', user).then((res) => res.data),
		update: (user) => axios.put(`/api/users/update`, user, { headers }).then((res) => res.data),
		fetchCurrentUser: () => axios.get('/api/users/me', { headers }).then((res) => res.data),
	},

	project: {
		createProject: (project) => axios.post('/api/projects/post/project', project, { headers }).then((res) => res.data),
		updateProject: (project) => axios.put(`/api/projects/update/${project.id}`, project.formdata, { headers }).then((res) => res.data),
	},
	experience: {
		createListExperience: (listExperience) => axios.post('/api/experiences/post/listexperience', listExperience, { headers }).then((res) => res.data),
		createExperience: (experience) => axios.post('/api/experiences/post/experience', experience, { headers }).then((res) => res.data),
		updateExperience: (experience) =>
			axios.put(`/api/experiences/update/${experience.id}`, experience.experience, { headers }).then((res) => res.data),
	},
	artwork: {
		createProject: (artwork) => axios.post('/api/gallery/post/gallery', artwork, { headers }).then((res) => res.data),
	},
};
