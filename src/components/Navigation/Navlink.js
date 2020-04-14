import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navlink = (props) => {
  const { name } = props;
  const link = name.replace(" ", "").toLowerCase();

  return (
    <li className="Navlink">
      <Link to={`/${link}`}>{name}</Link>
    </li>
  );
};

Navlink.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Navlink;
