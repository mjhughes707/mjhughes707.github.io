import React, { useState } from "react";
import "./Navigation/Navigation.css";
import Navbar from "./Navigation/Navbar";
import Navlinks from "./Navigation/Navlinks";

const Header = () => {
  const [navlinks, setNavlinks] = useState(false);

  const toggleNavlinks = () => {
    setNavlinks(!navlinks);
  };

  return (
    <div>
      <Navbar toggleNavlinks={toggleNavlinks} />
      <Navlinks
        toggleNavlinks={toggleNavlinks}
        visibility={navlinks ? "show-navlinks" : "hide-navlinks"}
      />
    </div>
  );
};

export default Header;
