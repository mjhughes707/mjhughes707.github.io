import React from "react";
import PropTypes from "prop-types";

const Technology = (props) => {
  const { name } = props;

  return <div className="Technology">{name}</div>;
};

Technology.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Technology;
