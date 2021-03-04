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
        <li key={section}><a className="navItems" href={"#" + section} key={section}>{section}</a></li>        
      );
    });

    const dropDownMenu=()=>{
      let getNavElements=document.getElementById("navElements");
      if (getNavElements.className==="navGroup") {
        getNavElements.className +=" responsive";
      } else {
        getNavElements.className ="navGroup";
      }
    }
    
    return (  
        <nav>
          <div className="navTop">
          <h1>ANDREA PINEDA</h1>
          <button className="menuIcon" onClick={dropDownMenu}><MenuIcon/></button>
          <ul className="navGroup" id="navElements">
            {navLinks}
          </ul>
        </div>
        </nav>
    );
  }
}

export default Navigation;