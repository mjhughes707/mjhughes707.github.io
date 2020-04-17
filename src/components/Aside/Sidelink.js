import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Sidelinks = (props) => {
  const { name } = props;
  const link = name.replace(" ", "").toLowerCase();

  return (
    <li className="Sidelink">
      <NavLink to={`/${link}`} activeClassName="selected">
        {name}
      </NavLink>
    </li>
  );
};

Sidelinks.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Sidelinks;
