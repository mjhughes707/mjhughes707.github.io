import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = (props) => {
  const { name } = props;
  const link = name.replace(" ", "").toLowerCase();

  return (
    <button className="home-button">
      <Link to={`/${link}`}>{name}</Link>
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
