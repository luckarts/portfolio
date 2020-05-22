import React from 'react';
import NotFound from 'components/template/NotFound';
import Swipeable from 'components/molecules/Swipeable';
import Login from 'components/template/Login';
import Galerie from 'components/template/Galerie';
import Resume from 'components/template/Resume';
import NewArtwork from 'components/template/NewArtwork';
import Projets from 'components/template/Projets';
import EditProjet from 'components/template/EditProject';
import EditExperience from 'components/template/EditExperience';
import NewProject from 'components/template/NewProject';
import NewExperience from 'components/template/NewExperience';
import { Redirect } from 'react-router-dom';
import Profile from 'components/template/MyProfile';
export default [
	{
		path: '/',
		component: () => <Swipeable home child={<Projets current_tabs={1} />} />,
	},
	{
		path: '/luc_bachelerie',
		component: () => <Swipeable children={<Resume />} />,
	},
	{
		path: '/illustrations',
		component: () => <Swipeable children={<Galerie />} />,
	},
	{
		path: '/login',
		component: Login,
	},
	{ access: 'private', path: '/edit/project/:projectName', component: () => <EditProjet /> },
	{ access: 'private', path: '/edit/projects', component: () => <Projets edit /> },
	{ access: 'private', path: '/project/new', component: () => <NewProject /> },
	{ access: 'private', path: '/edit/experience/:company', component: () => <EditExperience /> },
	{ access: 'private', path: '/edit/experience', component: () => <Resume edit /> },
	{ access: 'private', path: '/experience/new/:id', component: () => <NewExperience /> },
	{ access: 'private', path: '/add/illustration', component: () => <NewArtwork /> },
	{ access: 'private', path: '/edit/profile/', component: () => <Profile /> },
	{ path: '/notFound', component: () => <NotFound /> },
	{
		component: () => <Redirect to="/notFound" />,
	},
];
