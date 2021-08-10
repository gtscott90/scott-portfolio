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
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/scott-portfolio/about" 
            className={
              "nav-link"}> 
              {addressCard}
              About
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/scott-portfolio/portfolio" 
            className={
              "nav-link"}>
              {stream}
              Portfolio
        </Nav.Link>
        <Nav.Link 
          as={Link}
          to="/scott-portfolio/contact" 
            className={
              "nav-link"}>
              {mobile}
              Contact
        </Nav.Link>
      </Nav>
  </Navbar.Collapse>
    </Navbar>
      
      
    );
  }
  
  export default NavBar;