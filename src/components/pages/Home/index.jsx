import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import useWindowDimensions from 'utils/useWindowDimensions';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Loader, Button } from 'components/shared';
import './style.scss';
import './stars.css';

const propTypes = {
  activeTab: PropTypes.func
};

const BannerHeader = ({ activeTab }) => {
  const { width } = useWindowDimensions();

  useEffect(() => {
    const timer = setInterval(() => {
      if (width >= 1024) {
        activeTab(1);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [activeTab, width]);

  return (
    <>
      <Helmet>
        <title>...::: bachelart :::...</title>
        <meta property="og:title" content="Bachelart"></meta>
        <meta property="og:url" content="https://bachelart.fr/"></meta>
      </Helmet>

      <div className="absolute w-full z-40 top-O flex text-center h-screen bg-gradient-t-home">
        <div className="flex overflow-hidden h-screen relative w-full" onClick={() => activeTab(1)}>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div className="flex items-center justify-center flex-col m-auto ">
            <img className="FadeSize sm:px-4" src="img/LOGO7.png" alt="logo" />
            <h1 className="text-white font-bold my-5 text-2xl FadeSize animationD-1s">Développeur Fullstack Js</h1>
            {width >= 1024 ? (
              <Loader bg={'bg-white'} />
            ) : (
              <Button
                large
                textPrimary
                type="button"
                className="inline-flex items-center rounded-full FadeSize animationD-2s"
              >
                <span>Balayer</span>
                <IoIosArrowRoundForward className="text-2xl" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

BannerHeader.propTypes = propTypes;

export default BannerHeader;
