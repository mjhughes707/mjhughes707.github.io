import React from "react";
import "./Aside.css";
import Hero from "./Hero";
import Sidelinks from "./Sidelinks";
import SideSocials from "./SideSocials";

const Aside = () => {
  return (
    <div className="Aside">
      <Hero />
      <Sidelinks />
      <SideSocials />
    </div>
  );
};

export default Aside;
