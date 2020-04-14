import React from "react";
import PropTypes from "prop-types";
import Socials from "./Socials";
import Hamburger from "./Hamburger";

const Navbar = (props) => {
  const { toggleNavlinks } = props;

  return (
    <nav className="Navbar">
      <Socials />
      <Hamburger toggleNavlinks={toggleNavlinks} />
    </nav>
  );
};

Navbar.propTypes = {
  toggleNavlinks: PropTypes.func.isRequired,
};

export default Navbar;
