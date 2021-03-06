import React from 'react';

const Footer = () => {
  const IconStyle = 'rounded-full w-8 h-auto mx-2';
  return (
    <footer className="border-t border-gray-400 absolute  w-full h-24  mb-4 sm:mb-24">
      <div className={`flex relative items-center  justify-center`}>
        <div className=" flex flex-col items-center">
          <h5 className="text-gray-600 font-portfolio text-center text-1-5xl font-bold pt-2 ">Bachelerie Luc</h5>

          <div className="flex flex-wrap mt-4">
            <a className="link-icon" href={'/upload/'} target="_self" rel="noopener noreferrer">
              <img className={IconStyle} src="/img/logocv.jpg" alt="cv" />
            </a>
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
    </footer>
  );
};

export default Footer;
