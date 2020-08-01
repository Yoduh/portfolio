import React, {useState, useEffect} from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
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

    useEffect(() => {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
          });
      
          Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
          });
    }, [])
    const scrollTo = () => {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    // useEffect(() => {
    //     window.scroll(function () {
    //         //if you hard code, then use console
    //         //.log to determine when you want the 
    //         //nav bar to stick.  
    //         console.log(window.scrollTop())
    //       if (window.scrollTop() > 280) {
    //         $('#navbar').addClass('navbar-fixed');
    //       }
    //       if (window.scrollTop() < 281) {
    //         $('#navbar').removeClass('navbar-fixed');
    //       }
    //     });
    // }, []);

    return (
    <Router>
      <MDBNavbar color="indigo" dark expand="md" className="sticky">
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
              <a href="#github"><img src={github} className="nav-icon mx-1"/></a>
              <a href="#linkedin"><img src={linkedin} className="nav-icon mx-1"/></a>
              <a href="#resume"><img src={resume} className="nav-icon mx-1"/></a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
}

export default Navbar;