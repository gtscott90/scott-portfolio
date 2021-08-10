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
      <Navbar.Brand href="/portfolio-test/">Greg Scott</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/portfolio-test/about" 
            className={
              "nav-link"}> 
              {addressCard}
              About
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/portfolio-test/portfolio" 
            className={
              "nav-link"}>
              {stream}
              Portfolio
        </Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
  </Navbar.Collapse>
    </Navbar>
      
      
    );
  }
  
  export default NavBar;