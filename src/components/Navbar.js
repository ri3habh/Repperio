import React from "react";
import "../App.css";
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter,
    BrowserRouter as Router, Link
} from 'react-router-dom';

{/*Remember to change footer and navbar to purple, change it later.*/}
const Navbar = () => {
    return(
        <div className="App">
        <>
        
        <ReactBootStrap.Navbar variant="dark" bg="dark" expand="md"> 
    <Link to="/Home">
    <ReactBootStrap.Navbar.Brand href="#home"><b>Reperio</b></ReactBootStrap.Navbar.Brand>
    </Link>
    <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
      <ReactBootStrap.Nav className="mr-auto">
        <Link to="/Products">
        <ReactBootStrap.Nav.Link href="#products">Products</ReactBootStrap.Nav.Link>
        </Link>
        <Link to="/Resources">
        <ReactBootStrap.Nav.Link href="#resources">Resources</ReactBootStrap.Nav.Link>
        </Link>
        <Link to="/Contact">
        <ReactBootStrap.Nav.Link href="#contact"> UsContact</ReactBootStrap.Nav.Link>
        </Link>
    

        <ReactBootStrap.NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Divider />
          <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
      </ReactBootStrap.Nav>
      <ReactBootStrap.Form inline>
        <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <ReactBootStrap.Button variant="outline-success">Search</ReactBootStrap.Button>
      </ReactBootStrap.Form>
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Navbar>
    
  
  </>
      </div>
    )
}

export default Navbar; 
