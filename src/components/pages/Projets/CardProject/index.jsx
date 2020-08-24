import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { Button, Typography } from 'components/shared';

const propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  techno: PropTypes.string,
  description: PropTypes.string,
  linkCode: PropTypes.string,
  linkWebsite: PropTypes.string,
  edit: PropTypes.bool,
  id: PropTypes.number
};

const CardProject = ({ keyID, title, img, techno, description, linkCode, linkWebsite, edit, id }) => {
  let link;

  if (edit) {
    let slug = title.toLowerCase();
    link = `/edit/project/${slug}`;
  }

  return (
    <div className={`mb-6 ${keyID % 2 === 0 ? 'md:pr-4' : ''} `} data-testid="cardProjet">
      <div className="border border-gray-400 bg-white rounded-xlg shadow hover:shadow-md ">
        <a className="cursor-pointer " href={linkWebsite}>
          <div className="overflow-hidden relative rounded-t-xlg ">
            <div
              className="bg-cover bg-center w-full  transition duration-500 ease-in-out hover:scale-110"
              style={{ backgroundImage: 'url(' + img + ')', height: '250px' }}
            ></div>
          </div>
        </a>
        <div className="p-4 md:h-72 xl:h-64 flex justify-between flex-col">
          <Typography primary variante="h3" className=" py-2 ">
            {title}
          </Typography>
          {description && <p className=" text-gray-700">{parse(description)}</p>}

          <Typography variante="p" className="mb-4 py-2 text-gray-800">
            Techno: <span className="font-bold">{techno}</span>
          </Typography>
          <div>
            {edit && (
              <Button className={`${linkCode && 'mr-4'}`} link={link} border textSecondary small hover rounded>
                <span> Edit</span>
              </Button>
            )}
            {linkCode && (
              <Button href={linkCode} border textSecondary small hover rounded>
                <span> Code</span>
              </Button>
            )}
            {linkWebsite && (
              <Button className={`${linkCode && 'ml-4'}`} href={linkWebsite} border textSecondary small hover rounded>
                <span>Demo</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
CardProject.propTypes = propTypes;
export default CardProject;
