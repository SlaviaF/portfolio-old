import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <div className="navbar">
        <div className="container">
          <div className="navbar_container">
            <div className="nav_left">
              <div className="nav_left-logo">
                <h2 className="logo_brand">Slavia Furtado</h2>
              </div>
            </div>
            <div className="nav-column">
              <ul className="nav_right">
                <li>
                  <a href="#header">Home</a>
                </li>

                <li>
                  <a href="#about">About</a>
                </li>

                <li>
                  <a href="#skills">Skills</a>
                </li>

                <li>
                  <a href="#projects">Projects</a>
                </li>

                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
