import React from "react";
import PropTypes from "prop-types";
import Navlink from "./Navlink";

const Navlinks = (props) => {
  const { visibility } = props;

  return (
    <ul className={`Navlinks ${visibility}`}>
      <Navlink name="ABOUT ME" />
      <Navlink name="PROJECTS" />
      <Navlink name="CONTACT" />
    </ul>
  );
};

Navlinks.propTypes = {
  visibility: PropTypes.string.isRequired,
};

export default Navlinks;
