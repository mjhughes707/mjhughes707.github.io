import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavLink = (props) => {
  const { toggleNavLinks, name } = props;
  const link = name.replace(" ", "").toLowerCase();

  return (
    <li className="NavLink">
      <Link to={`/${link}`} onClick={toggleNavLinks}>
        {name}
      </Link>
    </li>
  );
};

NavLink.propTypes = {
  toggleNavLinks: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavLink;
