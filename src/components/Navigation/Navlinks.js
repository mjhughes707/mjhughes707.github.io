import React from "react";
import PropTypes from "prop-types";
import NavLink from "./NavLink";

const NavLinks = (props) => {
  const { toggleNavLinks, visibility } = props;

  return (
    <ul className={`NavLinks ${visibility}`}>
      <NavLink toggleNavLinks={toggleNavLinks} name="ABOUT ME" />
      <NavLink toggleNavLinks={toggleNavLinks} name="PROJECTS" />
      <NavLink toggleNavLinks={toggleNavLinks} name="RESUME" />
      <NavLink toggleNavLinks={toggleNavLinks} name="CONTACT" />
    </ul>
  );
};

NavLinks.propTypes = {
  toggleNavLinks: PropTypes.func.isRequired,
  visibility: PropTypes.string.isRequired,
};

export default NavLinks;
