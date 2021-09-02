import React from "react";
import {FaFacebookF, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  return (
    <div id = "contact"className="common-animation">
      <div className="container">
      <div className="common">
                <h1 className="mainHeader">Contact Me At</h1>
              <p>
                If you are looking for someone who is a quick learner and doesn't hesitate to dive into new challenges and oppotunities. Please contact me at
              </p>
              <ul className="contactCircles">
                <li>
                <a href="https://www.linkedin.com/in/slavia-furtado-00b649169/" target="_blank"><FaLinkedin/> </a>
                </li>
                <li>
                <a href="https://github.com/SlaviaF" target="_blank"><FaGithub /></a>
                </li>
                <li>
                <a href="https://www.facebook.com/slavia.furtado/" target="_blank"><FaFacebookF /></a>
                </li>         
              </ul>
              </div>
            </div>
      </div>
  );
};

export default Contact;
