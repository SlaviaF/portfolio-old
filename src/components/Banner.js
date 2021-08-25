import React from "react";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";

const Banner = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="header_content">
            <div className="header_section">
              <ul className="header_ul">
                <li>
                  <a
                    href="https://www.linkedin.com/in/slavia-furtado-00b649169/"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/SlaviaF" target="_blank">
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/slavia.furtado/"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </a>
                </li>
              </ul>
              <h1>Hey, I am Slavia Furtado</h1>
              <div className="text">
                <span>And, I'm a </span>
              </div>
              <div className="typing-text">
                <span>Web developer</span>
              </div>
            </div>
 
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
