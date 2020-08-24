import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from 'components/shared/Typography';

const propTypes = {
  className: PropTypes.string,
  experience: PropTypes.object
};

const CardExperience = ({ edit, date, fonction, link, company, list_experience }) => {
  const component = (
    <div className={' mt-4 p-4 '}>
      <Typography variante="p">{date}</Typography>
      <Typography variante="h4" primary custom className="xsl:text-1-5xl  font-bold xs:text-xl">
        {fonction}
      </Typography>

      <Typography variante="a" href={link} primary className="text-xl font-medium mb-10 xs:text-lg">
        {company}
      </Typography>

      {list_experience && list_experience.length > 0 && (
        <ul className=" ml-4 list-disc mt-3">
          {list_experience.map((listExp, index) => (
            <li key={index} className="text-secondary">
              <Typography variante="p">{parse(listExp.description)}</Typography>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return edit ? <Link to={`/edit/experience/${company}`}> {component}</Link> : component;
};
CardExperience.propTypes = propTypes;
export default CardExperience;
