import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
const propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string
};

const Paragraphe = ({ className, title, text }) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
Paragraphe.propTypes = propTypes;
export default Paragraphe;
