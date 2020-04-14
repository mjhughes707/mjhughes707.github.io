import React from "react";
import "./Home.css";
import Button from "./Button";

const Home = () => {
  return (
    <div className="Home">
      <h1>Hi, I'm Matt,</h1>
      <h2>a freelance software engineer based out of Windsor, California.</h2>
      <Button name="PROJECTS" />
      <Button name="RESUME" />
    </div>
  );
};

export default Home;
