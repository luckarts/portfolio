import axios from 'axios';
const headers = { Authorization: 'Bearer ' + localStorage.getItem('token') };

export default {
  user: {
    signup: (user) => axios.post('api/users/signup', user).then((res) => res.data),
    login: (user) => axios.post('api/users/signin', user).then((res) => res.data),
    update: (user) => axios.put(`/api/users/update`, user, { headers }).then((res) => res.data),
    fetchCurrentUser: () => axios.get('/api/users/me', { headers }).then((res) => res.data)
  },
  userPublic: {
    getUser: () => axios.get('/api/users/user').then((res) => res.data)
  },

  project: {
    getProject: (projectName) => axios.get(`/api/projects/get/project/${projectName}`).then((res) => res.data),
    getProjects: (tag) => axios.get(`/api/projects/get/projects/${tag}`).then((res) => res.data),
    createProject: (project) => axios.post('/api/projects/post/project', project, { headers }).then((res) => res.data),
    updateProject: (project) =>
      axios.put(`/api/projects/update/${project.id}`, project.formdata, { headers }).then((res) => res.data)
  },
  experience: {
    getExperiences: () => axios.get('/api/experiences/get/experiences').then((res) => res.data),
    getExperience: (company) => axios.get(`/api/experiences/get/experiences/${company}`).then((res) => res.data),
    createListExperience: (listExperience) =>
      axios.post('/api/experiences/post/listexperience', listExperience, { headers }).then((res) => res.data),
    createExperience: (experience) =>
      axios.post('/api/experiences/post/experience', experience, { headers }).then((res) => res.data),
    updateExperience: (experience) =>
      axios.put(`/api/experiences/update/${experience.id}`, experience.experience, { headers }).then((res) => res.data)
  },
  artworks: {
    getArtworks: () => axios.get('/api/gallery/get/gallery').then((res) => res.data),
    createArtwork: (artwork) => axios.post('/api/gallery/post/gallery', artwork, { headers }).then((res) => res.data)
  }
};
