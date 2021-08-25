import React from "react";

const Navbar = () => {
  return (
      <div className="navbar">
          <div className ="container">
              <div className ="navbar_container">
              <div className ="nav_left">
                  <div className ="nav_left-logo">
                     <h2 className ="logo_brand">Slavia Furtado</h2> 
                  </div>
              </div>
              <ul className="nav_right">
                  <li>
                      <a href="">Home</a>
                  </li>
                  <li>
                      <a href="">About</a>
                  </li>
                  <li>
                      <a href="">Skills</a>
                  </li>
                  <li>
                      <a href="">Projects</a>
                  </li>
                  <li>
                      <a href="">Contact</a>
                  </li>
                  <li>
                      <a href="">Education</a>
                  </li>
              </ul>
              </div>
              </div>
          </div>
   
  )
}

export default Navbar


