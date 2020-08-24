import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Typography } from 'components/shared';

const propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string
};

const Paragraphe = ({ className, title, text }, props) => {
  console.log(props, text);
  return (
    <div className={className}>
      <Typography variante="h3" className=" pt-2">
        {title}
      </Typography>
      <Typography className=" pt-2">{text}</Typography>
    </div>
  );
};
Paragraphe.propTypes = propTypes;
export default Paragraphe;
