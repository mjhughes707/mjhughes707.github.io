import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Social = (props) => {
  const { icon, url } = props;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="Social">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

Social.propTypes = {
  icon: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};

export default Social;
