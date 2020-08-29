import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  NotFound,
  Login,
  Galerie,
  ResumePage,
  NewArtwork,
  Projets,
  EditProject,
  EditExperience,
  NewProject,
  NewExperience,
  MyProfile
} from 'components/pages';
import { Swipeable } from 'components/shared';

import InitPage from 'components/initPage';
export default [
  {
    path: '/',
    component: () => (
      <InitPage>
        <Swipeable hidenavfoot home child={<Projets current_tabs={0} />} />
      </InitPage>
    )
  },
  {
    path: '/luc_bachelerie',
    component: () => (
      <InitPage>
        <Swipeable children={<ResumePage />} />
      </InitPage>
    )
  },
  {
    path: '/illustrations',
    component: () => (
      <InitPage>
        <Swipeable children={<Galerie />} />
      </InitPage>
    )
  },
  {
    path: '/login',
    component: () => (
      <InitPage>
        <Login />
      </InitPage>
    )
  },
  {
    access: 'private',
    path: '/edit/project/:projectName',
    component: () => (
      <InitPage>
        <EditProject />
      </InitPage>
    )
  },
  {
    access: 'private',
    path: '/edit/projects',
    component: () => (
      <InitPage>
        <Projets edit={true} />
      </InitPage>
    )
  },
  {
    access: 'private',
    path: '/project/new',
    component: () => (
      <InitPage>
        <NewProject />
      </InitPage>
    )
  },
  {
    access: 'private',
    path: '/edit/experience/:company',
    component: () => (
      <InitPage>
        <EditExperience />
      </InitPage>
    )
  },
  {
    access: 'private',
    path: '/edit/experience',
    component: () => (
      <InitPage>
        <ResumePage edit />
      </InitPage>
    )
  },
  {
    access: 'private',
    path: '/experience/new/:id',
    component: () => (
      <InitPage>
        <NewExperience />
      </InitPage>
    )
  },
  {
    access: 'private',
    path: '/add/illustration',
    component: () => (
      <InitPage>
        <NewArtwork />
      </InitPage>
    )
  },
  {
    access: 'private',
    path: '/edit/profile/',
    component: () => (
      <InitPage>
        <MyProfile />
      </InitPage>
    )
  },
  {
    path: '/notFound',
    component: () => (
      <InitPage>
        <NotFound />
      </InitPage>
    )
  },
  {
    component: () => <Redirect to="/notFound" />
  }
];
