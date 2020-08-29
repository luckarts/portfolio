import React from 'react';
import parse from 'html-react-parser';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import BannerProfile from './BannerProfile';
import ListExperience from './ListExperiences';
import { Loader, Typography } from 'components/shared';
import fetchData from 'utils/fetchData';
import api from '../../../API/api';

const ResumePage = ({ edit, isAuthenticated }) => {
  let id, lastIdExp, user, listExperiences;

  const userData = fetchData(api.userPublic.getUser);
  const experiences = fetchData(api.experience.getExperiences);

  user = userData.data ? userData.data.user : {};
  listExperiences = experiences.data ? experiences.data.listExperiences : [];

  id = listExperiences && listExperiences.length > 0 && listExperiences.length;
  lastIdExp = experiences.data.length > 0 && experiences.data && listExperiences[id - 1].id;

  return (
    <>
      <Helmet>
        <title>...::: Bachelart.fr :::... Luc Bachelerie</title>
        <meta property="og:title" content="Luc Bachelerie"></meta>
        <meta property="og:url" content="https://bachelart.fr/luc_bachelerie"></meta>
      </Helmet>

      <Typography variante="h1" primary className="text-center animation-FadeUp animation-once afterTitle">
        À propos
      </Typography>

      <BannerProfile user={userData.data && user} />

      {!edit && isAuthenticated && (
        <Typography editIcon variante="link" href="/edit/profile">
          Gerer mon profil
        </Typography>
      )}
      {userData.loading ? (
        <div className="my-24 text-center ">
          <Loader bg="bg-primary " />
        </div>
      ) : userData.error ? (
        <span data-testid="error" className="text-red-800 text-center w-full">
          {userData.error}
        </span>
      ) : (
        <div className="w-3/5 sm:w-11/12 m-auto fadeSlide animationD-1s">
          <Typography variante="h3" className=" pt-2">
            Information
          </Typography>
          <Typography className=" pt-2">{user && parse(user.description)}</Typography>
        </div>
      )}

      {edit && isAuthenticated && (
        <Typography variante="link" addIcon href={`/experience/new/${lastIdExp}`}>
          Ajoutez de nouvelles Experiences
        </Typography>
      )}
      {!edit && isAuthenticated && (
        <Typography variante="link" editIcon href="/edit/experience">
          Gerer mes experiences
        </Typography>
      )}
      {experiences && experiences.loading ? (
        <div className="my-24 text-center ">
          <Loader bg="bg-primary " />
        </div>
      ) : experiences.error ? (
        <span data-testid="error" className="text-red-800 text-center w-full">
          {experiences.error}
        </span>
      ) : (
        listExperiences && <ListExperience edit={edit} listExperience={listExperiences} />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.user
});
export default connect(mapStateToProps)(ResumePage);
