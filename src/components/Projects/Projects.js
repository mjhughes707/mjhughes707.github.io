import React from "react";
import "./Projects.css";
import Project from "./Project";
import data from "../../data.json";

const Projects = () => {
  const projects = data.Projects;

  return (
    <div className="Projects section-container">
      <h1 className="section-title">PROJECTS</h1>
      {projects.map((project, index) => {
        return <Project key={index} project={project} />;
      })}
    </div>
  );
};

export default Projects;
