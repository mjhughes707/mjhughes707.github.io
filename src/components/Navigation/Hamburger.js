import React from "react";
import PropTypes from "prop-types";

const Hamburger = (props) => {
  const { toggleNavLinks } = props;

  return (
    <button
      onClick={toggleNavLinks}
      className="Hamburger"
      aria-label="toggle navigation"
    >
      <span className="hamburger-icon"></span>
    </button>
  );
};

Hamburger.propTypes = {
  toggleNavLinks: PropTypes.func.isRequired,
};

export default Hamburger;
