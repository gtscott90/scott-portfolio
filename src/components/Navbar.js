import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faStream} from '@fortawesome/free-solid-svg-icons';
import "./style.css";

const addressCard = <FontAwesomeIcon icon={faAddressCard} />
const stream = <FontAwesomeIcon icon={faStream} />
const mobile = <FontAwesomeIcon icon={faMobileAlt} />

function NavBar() {
    return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/scott-portfolio/">Greg Scott</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link 
          as={Link}
          to="/scott-portfolio/about" 
            className={
              window.location.pathname === "/scott-portfolio/" || window.location.pathname === "/scott-portfolio/about" ? "nav-link active" : "nav-link"}> 
              {addressCard}
              About
              </Nav.Link>
        <Nav.Link 
          as={Link}
          to="/scott-portfolio/portfolio" 
            className={
              window.location.pathname === "/scott-portfolio/portfolio" ? "nav-link active" : "nav-link"}>
              {stream}
              Portfolio
              </Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
      
      
    );
  }
  
  export default NavBar;

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        
        </button>
        <Link className="navbar-brand" to="/">
          Greg Scott
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/about"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              > {addressCard}
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
              >{stream}
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
              > {mobile}
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/files/Scott_Gregory_Full Stack Resume.pdf" 
                target="_blank" 
                download>
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </nav>