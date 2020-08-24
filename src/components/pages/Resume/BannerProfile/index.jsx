import React from 'react';
import './style.scss';
import Typography from 'components/shared/Typography';
const BannerHeader = ({ user }) => {
  const IconStyle = 'rounded-full w-8 h-auto my-4 mx-2 hover:scale-125 transition duration-300 ease-in-out ';
  return (
    <div className="rounded-xlg  w-3/5 sm:w-11/12 my-16 pt-2 mx-auto border border-gray-300 bg-white  animationD-60s fadeSlide ">
      <div className=" flex p-8 justify-around items-center sm:flex-col">
        <img
          className="pb-2 my-3 rounded-xlg icon-profile"
          style={{ maxWidth: '200px' }}
          src={'/img/character.png'}
          alt="img"
        />

        <div className=" flex flex-col items-center  ">
          <Typography variante="h1" primary className="pt-2 text-center">
            Bachelerie Luc
          </Typography>
          <Typography
            variante="h2"
            custom
            primary
            className="text-1-5xl text-center pl-6 pr-6 pb-4 border-b-2 border-gray-300"
          >
            Développeur Front end Javascript <br />
          </Typography>
          <div className="flex flex-wrap mt-4">
            {user && (
              <a className="link-icon" href={'/upload/' + user.cv} target="_self" rel="noopener noreferrer">
                <img className={IconStyle} src="/img/logocv.jpg" alt="cv" />
              </a>
            )}

            <a
              className="link-icon"
              href="https://www.linkedin.com/in/luc-bachelerie-developperjs/"
              rel="noopener noreferrer"
            >
              <img className={IconStyle} src="/img/linkedlin.jpg" alt="linkedlin" />
            </a>
            <a className="link-icon" href="mailto:luc.bachelerieart@gmail.com">
              <img className={IconStyle} src="/img/email.jpg" alt="email" />
            </a>
            <a className="link-icon" href="tel:0771073054">
              <img className={IconStyle} src="/img/tel.jpg" alt="tel" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHeader;
