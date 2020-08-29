import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardProject from './CardProject';
import fetchData from 'utils/fetchData';
import { Loader, Typography, Button } from 'components/shared';
import './style.scss';
import api from '../../../API/api';

const propTypes = {
  editIcon: PropTypes.bool,
  edit: PropTypes.bool,
  isAuthenticated: PropTypes.object,
  addIcon: PropTypes.object,
  href: PropTypes.string,
  title: PropTypes.string
};

const ProjectPage = ({ edit, isAuthenticated }, ...props) => {
  const tags = ['React', 'TDD', 'NextJS', 'Angular', 'MongoDb', 'GraphQL'];

  const [tag, setTag] = useState('');
  const { loading, error, data } = fetchData(api.project.getProjects, tag);

  const scrollTop = () => {
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };
  const handleClick = tag => {
    setTag(tag);
    scrollTop();
  };

  return (
    <>
      <Typography variante="h2" primary className="text-center afterTitle animation-FadeUp animation-once">
        {edit ? ' Edit projets' : 'Mes projets'}
      </Typography>
      {edit && (
        <Typography addIcon variante="link" href="/project/new">
          Ajout d'un nouveau projet
        </Typography>
      )}
      {!edit && isAuthenticated && (
        <Typography variante="link" editIcon href="/edit/projects">
          Gerer mes projets
        </Typography>
      )}
      <div className="text-center pt-6 ">
        <Button
          transparent
          className={`${
            tag === '' ? 'text-white bg-secondary rounded-lg' : 'text-primary'
          } + ' px-2 py-1 mx-4 animation-FadeUp animation-once `}
          onClick={() => handleClick('')}
        >
          <span>All</span>
        </Button>
        {tags.length > 0 &&
          tags.map((tagg, index) => (
            <Button
              key={index}
              transparent
              className={`px-2 py-1 xsl:mx-4 sm:mx-2 fadeSlide animationD-${
                index === 0 ? 20 : (index / 5.0) * 100 + 20
              }s  ${tagg === tag ? 'text-white bg-secondary rounded-lg' : 'text-primary'}`}
              onClick={() => handleClick(tagg)}
            >
              <span>{tagg}</span>
            </Button>
          ))}
      </div>
      <div style={{ minHeight: '500px' }}>
        {loading ? (
          <div className={`my-40 text-center`}>
            <Loader bg="bg-primary " />
          </div>
        ) : error ? (
          <span data-testid="error" className="text-red-800 text-center w-full">
            {error}
          </span>
        ) : (
          <div className="max-w-screen-xl flex flex-wrap  mb-4 mx-auto md:p-12 sm:p-6 CardsDelay">
            {data &&
              data.projects &&
              data.projects.map((projet, index) => (
                <div className="md:w-1/2 sm:w-full " key={index}>
                  <CardProject keyID={index} {...projet} edit={edit} {...props} />
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export const mapStateToProps = state => ({
  isAuthenticated: state.user.user
});
ProjectPage.propTypes = propTypes;
export default connect(mapStateToProps)(ProjectPage);
