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
        <a href={"#" + section} key={section}>{section}</a>        
      );
    });
    
    return (  
        <div class="nav">
          <h1>ANDREA PINEDA</h1>
          <div>
            {navLinks}
          </div>
        </div>
    );
  }
}

export default Navigation;