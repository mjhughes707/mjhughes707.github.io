import React from "react";
import PropTypes from "prop-types";
import Technology from "./Technology";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = (props) => {
  const {
    project: {
      dates,
      name,
      caption,
      description,
      technologies,
      website,
      github,
      thumbnail,
      backupThumbnail,
      altText,
    },
  } = props;

  return (
    <div className="Project">
      <div className="project-dates">{dates}</div>
      <div className="project-contents">
        <h2 className="project-name">{name}</h2>
        <p className="project-caption">{caption}</p>
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="project-thumbnail"
        >
          <picture>
            <source
              type="image/webp"
              srcSet={require(`../../img/${thumbnail}`)}
            />
            <img
              src={require(`../../img/backup/${backupThumbnail}`)}
              alt={altText}
            />
          </picture>
        </a>
        <p className="project-description">{description}</p>

        <div className="project-links">
          <a
            href={website}
            aria-label={`FontAwesome Icon: ${faDesktop.iconName}`}
            target="_blank"
            rel="noopener noreferrer"
            className="Social"
          >
            <FontAwesomeIcon icon={faDesktop} className="fa-lg" />
          </a>

          <a
            href={github}
            aria-label={`FontAwesome Icon: ${faGithub.iconName}`}
            target="_blank"
            rel="noopener noreferrer"
            className="Social"
          >
            <FontAwesomeIcon icon={faGithub} className="fa-lg" />
          </a>
        </div>

        <h4 className="technologies-title">Technologies:</h4>
        <div className="technologies-container">
          {technologies.map((tech, index) => (
            <Technology key={index} name={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
