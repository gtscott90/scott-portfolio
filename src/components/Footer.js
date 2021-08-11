import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const falinkedIn = <FontAwesomeIcon icon={faLinkedin} />
const faGitHub = <FontAwesomeIcon icon={faGithub} />

function Footer() {
    return (
    <footer className="footer">
          <div className="listedContact">
                      <a href="https://www.linkedin.com/in/gregscottdev/" target="_blank">{falinkedIn} Linked In</a> &emsp; <a href="https://github.com/gtscott90" target="_blank">{faGitHub} Github Profile</a>
                      <p>gtscott90@gmail.com &emsp; (937) 974-2843</p>
                      <a href="https://dl.dropboxusercontent.com/s/cs7mq5csnekul3o/Scott_Gregory_Resume.pdf?dl=0" target="_blank" download>Resume</a>
                  </div>
        </footer>
    );

  }
  
  export default Footer;

 