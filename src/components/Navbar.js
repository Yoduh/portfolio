import React, {useState, useEffect} from 'react';
import {
    MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import github from './images/icons/github.svg';
import linkedin from './images/icons/linkedin.svg';
import resume from './images/icons/resume.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    // hide navbar when scrolling down. show if scrolling up
    useEffect(() => {
      var prev = window.pageYOffset;
      window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        if (prev > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-56px";
        }
        prev = currentScrollPos;
      }
    }, [])

    return (
    <Router>
      <MDBNavbar id="navbar" dark expand="md" className="sticky">
        {/* <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand> */}
        <MDBNavbarToggler onClick={() => toggleCollapse()} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
                <Link activeClass="active" className="top" to="top" spy={true} smooth={true} duration={0}>
                    <MDBNavLink to="#">Home</MDBNavLink>
                </Link>
            </MDBNavItem>
            <MDBNavItem>
                <Link activeClass="active" className="aboutme" to="aboutme" spy={true} smooth={true} duration={0}>
                    <MDBNavLink to="#">About</MDBNavLink>
                </Link>
            </MDBNavItem>
            <MDBNavItem>
                <Link activeClass="active" className="portfolio" to="portfolio" spy={true} smooth={true} duration={0}>
                    <MDBNavLink to="#">Portfolio</MDBNavLink>
                </Link>
            </MDBNavItem>
            <MDBNavItem>
                <Link activeClass="active" className="contact" to="contact" spy={true} smooth={true} duration={0}>
                    <MDBNavLink to="#">Contact</MDBNavLink>
                </Link>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <a href="https://github.com/Yoduh"><img src={github} className="nav-icon mx-1"/></a>
              <a href="https://www.linkedin.com/in/alex-handlovits/"><img src={linkedin} className="nav-icon mx-1"/></a>
              <a href="https://drive.google.com/file/d/1TtbUHgV0eJlULC9BkydLZLSF2n3YNLVa/view?usp=sharing"><img src={resume} className="nav-icon mx-1"/></a>
              {/* <Link to="/media/Handlovits_Resume.pdf" target="_blank" download>Download</Link> */}
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
}

export default Navbar;