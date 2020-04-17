import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Aside from "./components/Aside/Aside";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";

function App() {
  const [navlinks, setNavlinks] = useState(false);

  const toggleNavlinks = () => {
    setNavlinks(!navlinks);
  };

  return (
    <div className="App">
      <Header navlinks={navlinks} toggleNavlinks={toggleNavlinks} />
      <Aside />
      <Switch>
        <Route exact path="/">
          <Home navlinks={navlinks} />
        </Route>
        <Route exact path="/aboutme">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
