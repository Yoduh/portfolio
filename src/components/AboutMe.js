import React, { useState, useCallback } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import TechSkills from './TechSkills';
import Navbar from './Navbar';
import headshot from './images/headshot.png';

const AboutMe = () => {
    const [headshotRect, setHeadshotRect] = useState({});
    const headshotRef = useCallback(node => {
        const handleResize = () => { // get size and position after any window resize
            setHeadshotRect({
                width: node.clientWidth, 
                height: node.clientHeight, 
                margin: node.parentNode.getBoundingClientRect().left, 
                rect: node.getBoundingClientRect()})
        }
        if (node !== null) {
            node.onload = () => { // get size and position on initialize
                setHeadshotRect({
                    width: node.clientWidth, 
                    height: node.clientHeight, 
                    margin: node.parentNode.getBoundingClientRect().left, 
                    rect: node.getBoundingClientRect()})
            }
            window.addEventListener('resize', handleResize);
        }
        return () => { window.removeEventListener('resize', handleResize) };
    }, []);

    return (
    <div id="aboutme" name="aboutme">
      <Navbar />
      {/* <div className="aboutme-content">
        <div className="card me-card d-flex rounded">
            <img className="card-img-top" src={headshot} alt="headshot" />
                <div className="card-body">
                    <h3 className="subtitle">
                    About Me
                    </h3>
                    <p>
                    My name is <strong>Alex Handlovits</strong>, and I'm a <strong>Software Developer</strong> currently living in Raleigh, NC. I have a <strong>passion</strong> for web development and I'm always working on new projects and learning new technologies across the full stack. I credit my past experience in QA into making me a <strong>perfectionist</strong>, and my experience in mobile app development for giving me an eye for <strong>mobile first</strong> design. I'm excited to find a company I can help grow and build products customers <strong>love</strong> to use. Outside of web development, I enjoy playing board games and video games, playing fetch with my two dogs, and watching old school horror movies.
                    </p>
                    <h3 className="subtitle">
                    Languages, Frameworks & Libraries
                    </h3>
                    <TechSkills />
                </div>
            </div>
        </div> */}
        
        <MDBContainer className="mt-3">
        <h1 className="text-center">-- About --</h1>
            <MDBRow>
                <MDBCol md="8" className="d-flex align-items-center justify-content-center p-0">
                    <img src={headshot} alt="headshot" id="headshot" ref={headshotRef} className="p-5" />
                    <TechSkills bounds={headshotRect}/>
                </MDBCol>
                <MDBCol md="4">
                    <h1>skills</h1>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>NodeJS + Express</li>
                        <li>JQuery</li>
                        <li>Javascript</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>mongoDB</li>
                        <li>SQLite</li>
                        <li>PostgreSQL</li>
                    </ul>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        
    </div>
    )
}

export default AboutMe;