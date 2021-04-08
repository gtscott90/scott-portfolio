import React from "react";
import "./style.css";

function Footer() {
    return (
      <footer className="footer">
        <div className="listedContact">
                    <a href="https://www.linkedin.com/in/greg-scott-4a94b783/"><i className="fab fa-linkedin-in"> Linked In</i></a> &emsp; <a href="https://github.com/gtscott90"><i className="fab fa-github"> Github Profile</i></a>
                    <p>gtscott90@gmail.com &emsp; (937) 974-2843</p>
                    <a href="files/Scott_Gregory_Resume.pdf" download>Resume</a>
                </div>
      </footer>
    );
  }
  
  export default Footer;