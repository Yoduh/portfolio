import React, {useEffect, useRef, useState} from 'react';
import Typed from 'typed.js';
import { MDBTypography } from 'mdbreact'

const Header = () => {
    const title1 = useRef(null);
    const title2 = useRef(null);
    // const title3 = useRef(null);
    const [typed, setTyped] = useState(null);
    useEffect(() => {
        var options = {
            strings: ['Alex Handlovits'],
            typeSpeed: 40,
            backSpeed: 30,
            backDelay: 100,
            onComplete: (self) => {  
                self.cursor.remove();
                setTyped(new Typed(title2.current, {...options, strings: ['Problem Solver', 'Critical Thinker', 'Web Developer'], onComplete:()=>{}}));
                // , onComplete: (self) => {
                //     self.cursor.remove()
                //     setTyped(new Typed(title3.current, {...options, strings: ['Raleigh, NC'], onComplete:()=>{}}))
                // }
            }
          };
        setTyped(new Typed(title1.current, options));
    }, []);

    useEffect(() => {
        if (typed != null)
            typed.start();
    }, [typed])

    return (
        <div id="topwrapper" name="top">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div className="header">
                <MDBTypography tag='h1' variant="display-1" align="center">
                    <span ref={title1}/>&nbsp;
                </MDBTypography>
                <MDBTypography tag='h3' variant="display-4" align="center">
                    <span ref={title2}/>&nbsp;
                </MDBTypography>
                <a className="scrollDown" href="#aboutme">
                    <i className="fas fa-angle-down"></i>
                </a>
            </div>
        </div>
    )
}

export default Header;