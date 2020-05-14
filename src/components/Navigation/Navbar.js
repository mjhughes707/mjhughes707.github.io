import React from "react";
import PropTypes from "prop-types";
import Socials from "./Socials";
import Hamburger from "./Hamburger";

const Navbar = (props) => {
  const { toggleNavLinks } = props;

  return (
    <nav className="Navbar">
      <Socials />
      <Hamburger toggleNavLinks={toggleNavLinks} />
    </nav>
  );
};

Navbar.propTypes = {
  toggleNavLinks: PropTypes.func.isRequired,
};

export default Navbar;
