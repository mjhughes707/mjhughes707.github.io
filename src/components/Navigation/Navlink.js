import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navlink = (props) => {
  const { toggleNavlinks, name } = props;
  const link = name.replace(" ", "").toLowerCase();

  return (
    <li className="Navlink">
      <Link to={`/${link}`} onClick={toggleNavlinks}>
        {name}
      </Link>
    </li>
  );
};

Navlink.propTypes = {
  toggleNavlinks: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navlink;
