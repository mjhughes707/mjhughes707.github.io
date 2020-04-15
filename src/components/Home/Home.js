import React from "react";
import PropTypes from "prop-types";
import "./Home.css";
import Button from "./Button";

const Home = (props) => {
  const { navlinks } = props;
  const height = navlinks
    ? "calc(100vh - (56px + 151px))"
    : "calc(100vh - 56px)";

  return (
    <div className="Home" style={{ height: height }}>
      <h1 className="home-title">Hi, I'm Matt,</h1>
      <h2 className="home-subtitle">
        a freelance software engineer based out of Windsor, California.
      </h2>
      <Button name="PROJECTS" />
      <Button name="RESUME" />
    </div>
  );
};

Home.propTypes = {
  navlinks: PropTypes.bool.isRequired,
};

export default Home;
