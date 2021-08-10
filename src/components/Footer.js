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
                      
                  </div>
        </footer>
    );

  }
  
  export default Footer;

  // <footer className="footer">
  //       <div className="listedContact">
  //                   <a href="https://www.linkedin.com/in/greg-scott-4a94b783/"><i className="fab fa-linkedin-in"> Linked In</i></a> &emsp; <a href="https://github.com/gtscott90"><i className="fab fa-github"> Github Profile</i></a>
  //                   <p>gtscott90@gmail.com &emsp; (937) 974-2843</p>
  //                   <Link to="/files/Scott_Gregory_Full Stack Resume.pdf" target="_blank" download>Resume</Link>
  //               </div>
  //     </footer>