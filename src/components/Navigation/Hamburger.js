import React from "react";
import PropTypes from "prop-types";

const Hamburger = (props) => {
  const { toggleNavlinks } = props;

  return (
    <button
      onClick={toggleNavlinks}
      className="Hamburger"
      aria-label="toggle navigation"
    >
      <span className="hamburger-icon"></span>
    </button>
  );
};

Hamburger.propTypes = {
  toggleNavlinks: PropTypes.func.isRequired,
};

export default Hamburger;
