import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <div className="navbar">
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
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/skills">Skills</Link>
                  </li>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Banner />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
