import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Bullet = (props) => {
  const { icon, description } = props;

  return (
    <div className="Bullet">
      <FontAwesomeIcon icon={icon} className="bullet-icon" />
      <p className="bullet-description">{description}</p>
    </div>
  );
};

Bullet.propTypes = {
  icon: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
};

export default Bullet;
