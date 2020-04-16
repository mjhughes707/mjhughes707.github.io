import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Sidelinks = (props) => {
  const { name } = props;
  const link = name.replace(" ", "").toLowerCase();

  return (
    <li className="Sidelink">
      <Link to={`/${link}`}>{name}</Link>
    </li>
  );
};

Sidelinks.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Sidelinks;
