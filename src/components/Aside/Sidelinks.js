import React from "react";
import Sidelink from "./Sidelink";

const Sidelinks = () => {
  return (
    <div className="Sidelinks">
      <Sidelink name="ABOUT ME" />
      <Sidelink name="PROJECTS" />
      <Sidelink name="RESUME" />
      <Sidelink name="CONTACT" />
    </div>
  );
};

export default Sidelinks;
