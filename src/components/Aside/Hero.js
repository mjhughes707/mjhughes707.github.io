import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="Hero">
      <Link to="/" rel="noopener noreferrer" className="hero-headshot">
        <picture>
          <source
            type="image/webp"
            srcSet={require(`../../img/headshot.webp`)}
          />
          <img
            src={require(`../../img/backup/headshot.png`)}
            alt="Headshot of Matt at the Ngorogoron Crater"
          />
        </picture>
      </Link>
      <h1 className="hero-title">Matthew J. Hughes</h1>
      <h2 className="hero-subtitle">Software Engineer</h2>
    </div>
  );
};

export default Hero;
