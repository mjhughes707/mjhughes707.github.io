import React from "react";
import "./Home.css";
import Button from "./Button";

const Home = () => {
  return (
    <div className="Home">
      <h1 className="home-title">Hi, I'm Matt,</h1>
      <h2 className="home-subtitle">
        a freelance software engineer based out of Sonoma County, California
      </h2>
      <Button name="PROJECTS" />
      <Button name="RESUME" />
    </div>
  );
};

export default Home;
