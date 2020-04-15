import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialRow = (props) => {
  const { label, icon, url, username } = props;

  return (
    <div className="SocialRow">
      <div className="social-label">{`${label}:`}</div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <FontAwesomeIcon icon={icon} />
        <span className="social-description">{username}</span>
      </a>
    </div>
  );
};

SocialRow.propTypes = {
  icon: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};

export default SocialRow;
