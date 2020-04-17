import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <iframe
      src={require(`./resume.pdf`)}
      title="resume"
      className="resume-iframe"
    />
  );
};

export default Resume;
