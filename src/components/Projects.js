import React from 'react'
import projectsData from './projectData';
const Projects = () => {
  return (
    <div className="projects common-animation">
      <div className="container">
          <div className="common">
            <h3 className="heading">PROJECTS</h3>
            <h1 className="mainHeader">My Projects</h1>
            <p className="mainContent">I have done many projects while I was student at HYF. Below are the few projects I have worked really hard for them, so please be kind </p>
            <div className="commonBorder"></div>
          </div>
          <div className = "row">
            {projectsData.map(project => {
              return(
                <div className="card" style={{width: "30rem", margin:"2em 5em", padding:"1em 1em"}}>
                <img src={project.img} className="card-img-top" alt={project.title}/>
                <div className="card-body">
                <p className="card-text"> <a href={project.source} target="_blank">Source  code</a> <div><p>{project.title}</p></div></p>
                </div>
            </div>
              )
            })}
            </div>
            </div>
        </div>
  );
};

export default Projects;
