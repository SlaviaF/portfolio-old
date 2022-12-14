import React from "react";
import projectsData from "./projectData";

const Projects = () => {
  return (
    <div id="projects" className=" common-animation bg">
      <div className="container">
        <div className="common">
          <h3 className="heading">PROJECTS</h3>
          <h1 className="mainHeader">My Projects</h1>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {projectsData.map((project) => {
            return (
              <div
                className="card"
                style={{
                  width: "50em",
                  margin: "2em auto",
                  padding: "1em 1em",
                
                }}
              >
                <img
                  src={project.img}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <p className="card-text">
                    <a href={project.source} target="_blank">
                      Source code
                    </a>
                    <br/>
                    <div>
                      <p>{project.title}</p>
                    </div>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
