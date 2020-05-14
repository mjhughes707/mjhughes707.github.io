import React from "react";
import PropTypes from "prop-types";
import "./Navigation/Navigation.css";
import Navbar from "./Navigation/Navbar";
import NavLinks from "./Navigation/NavLinks";

const Header = (props) => {
  const { isNavLinksOpen, toggleNavLinks } = props;

  return (
    <header>
      <Navbar toggleNavLinks={toggleNavLinks} />
      <NavLinks
        toggleNavLinks={toggleNavLinks}
        visibility={isNavLinksOpen ? "show-navlinks" : "hide-navlinks"}
      />
    </header>
  );
};

Header.propTypes = {
  isNavLinksOpen: PropTypes.bool.isRequired,
  toggleNavLinks: PropTypes.func.isRequired,
};

export default Header;
