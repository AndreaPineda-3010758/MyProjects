import React, {Component} from 'react';
import {NavDropdown, Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import MenuIcon from '@material-ui/icons/Menu';
import './Navigation.css'


class Navigation extends Component {
  render() {
    const sections = [
      "Home",
      "About",
      "Skills",
      "Experience",
      "Projects",
      "Contact",
    ];
    const navLinks = sections.map((section) => {
      return (
        <NavDropdown.Item href={"#" + section} key={section}>{section}</NavDropdown.Item>        
      );
    });
    const navDropdownTitle = <MenuIcon/>;
    
    return (  
        <div className="navContainer">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home" style={{fontSize: 30, fontWeight:'bold'}}>Andrea Pineda</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">   
        <Nav className="mr-auto"></Nav>       
          <Nav>
            <NavDropdown  title={navDropdownTitle} id="basic-nav-dropdown">            
                {navLinks}                
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>
    );
  }
}

export default Navigation;