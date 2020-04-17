import React from "react";
import PropTypes from "prop-types";
import Navlink from "./Navlink";

const Navlinks = (props) => {
  const { toggleNavlinks, visibility } = props;

  return (
    <ul className={`Navlinks ${visibility}`}>
      <Navlink toggleNavlinks={toggleNavlinks} name="ABOUT ME" />
      <Navlink toggleNavlinks={toggleNavlinks} name="PROJECTS" />
      <Navlink toggleNavlinks={toggleNavlinks} name="RESUME" />
      <Navlink toggleNavlinks={toggleNavlinks} name="CONTACT" />
    </ul>
  );
};

Navlinks.propTypes = {
  toggleNavlinks: PropTypes.func.isRequired,
  visibility: PropTypes.string.isRequired,
};

export default Navlinks;
