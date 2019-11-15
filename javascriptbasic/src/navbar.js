import React from 'react';
import './App.css';
import { Button,  ButtonGroup, DropdownButton, MenuItem, Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Navigation extends React.Component {
    render() {
      return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">JavaScript Basics</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Variable" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Variable Overview</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">String and Number</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Array</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Boolean</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Undefined and Null</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">Object</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Variable Playground</NavDropdown.Item>
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