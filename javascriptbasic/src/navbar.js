import React from 'react';
import './App.css';
import {
  //  Button,  
  //  ButtonGroup, 
  //  DropdownButton, 
  //  MenuItem, 
   Navbar, 
   Nav, 
   NavDropdown } from 'react-bootstrap';

class Navigation extends React.Component {
    render() {
      return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">JavaScript Basics</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Variable" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/variable/variable-owerview">Variable Overview</NavDropdown.Item>
            <NavDropdown.Item href="/variable/stringandnumbers">String and Number</NavDropdown.Item>
            <NavDropdown.Item href="/variable/array">Array</NavDropdown.Item>
            <NavDropdown.Item href="/variable/boolean">Boolean</NavDropdown.Item>
            <NavDropdown.Item href="/variable/undefinedandnull">Undefined and Null</NavDropdown.Item>
            <NavDropdown.Item href="/variable/object">Object</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/variable/playground">Variable Playground</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#features">Functions</Nav.Link>
          {/* <Nav.Link href="#pricing">Features</Nav.Link> */}
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More Features</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    }
  }
  
  
export default  Navigation ;