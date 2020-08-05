import React, { useState, useCallback } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdbreact";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import TechSkills from './TechSkills';
import headshot from './images/headshot.png';

const AboutMe = () => {
    const [headshotRect, setHeadshotRect] = useState({});
    const headshotRef = useCallback(node => {
        const handleResize = () => { // get size and position after any window resize
            setHeadshotRect({
                width: node.clientWidth, 
                height: node.clientHeight, 
                leftMargin: node.parentNode.getBoundingClientRect().left, 
                topMargin: node.parentNode.getBoundingClientRect().top, 
                rect: node.getBoundingClientRect()})
        }
        if (node !== null) {
            node.onload = () => { // get size and position on initialize
                setHeadshotRect({
                    width: node.clientWidth, 
                    height: node.clientHeight, 
                    leftMargin: node.parentNode.getBoundingClientRect().left, 
                    topMargin: node.parentNode.getBoundingClientRect().top, 
                    rect: node.getBoundingClientRect()})
            }
            window.addEventListener('resize', handleResize);
        }
        return () => { window.removeEventListener('resize', handleResize) };
    }, []);

    return (
    <div id="aboutme" name="aboutme">
    <MDBContainer className="mt-5">
        <MDBRow>
            <MDBCol md="12" className="align-items-center justify-content-center p-0">
                <Zoom>
                    <MDBTypography tag='h3' variant="display-4" align="center" className="aboutheader">
                        ABOUT
                    </MDBTypography>
                </Zoom>
                <Fade left delay={500}>
                    <div className="header-bar mb-5"></div>
                </Fade>
                <Fade left>
                <p className="text-center">
                My name is <strong>Alex Handlovits</strong>, and I'm a <strong>Software Developer</strong> currently living in Raleigh, NC. 
                I have a <strong>passion</strong> for web development and I'm always working on new projects and learning new technologies across the full stack. 
                I credit my past experience in QA into making me a <strong>perfectionist</strong>, 
                and my experience in mobile app development for giving me an eye for <strong>mobile first</strong> design. 
                I'm excited to find a company I can help grow and build products customers <strong>love</strong> to use. 
                Outside of web development, I enjoy playing board games and video games, playing fetch with my two dogs, and watching old school horror movies.
                </p>
                </Fade>
            </MDBCol>
        </MDBRow>
        <MDBRow className="mt-5">
            <MDBCol md="6" className="d-flex align-items-center justify-content-center p-0">
                <img src={headshot} alt="headshot" id="headshot" ref={headshotRef} className="p-5" />
                <TechSkills bounds={headshotRect}/>
            </MDBCol>
            <MDBCol md="6" className="p-0">
                <Fade right>
                    <MDBRow className="mt-3">
                        <h1 className="mb-2"><em>&lt;Frontend \&gt;</em></h1>
                        <p>I am a proficient <strong>React</strong> coder knowledgeable about hooks, context, state management and lifecycle methods. 
                            I like to use different React tools and libraries such as React <strong>Router</strong> and React <strong>Redux</strong>, but I don't overly rely on these tools to get what I need done.
                            I can also code comfortably in plain vanilla <strong>Javascript</strong> with or without <strong>JQuery</strong>, and I'm skilled with <strong>CSS3</strong> and <strong>HTML5</strong>.</p>
                    </MDBRow>
                </Fade>
                <Fade right>
                    <MDBRow className="mt-4">
                        <h1 className="mb-2"><em>&lt;Backend \&gt;</em></h1>
                        <p><strong>NodeJS</strong> with <strong>Express</strong> is my preferred backend of choice. For a unified JS experience I like to use <strong>mongoDB</strong> but I also have 
                            experience with relational databases such as <strong>SQLite</strong> and <strong>PostgreSQL</strong>. I've designed multiple <strong>REST</strong> APIs and have dabbled with <strong>GraphQL</strong>.</p>
                    </MDBRow>
                </Fade>
            </MDBCol>
        </MDBRow>
        <MDBRow className="my-5 justify-content-center">
            <p className="text-center"><em>I am <strong>always</strong> learning new skills and technologies across the full-stack.  Expect my spinning circle of icons to keep growing!</em></p>
        </MDBRow>
    </MDBContainer>
        
    </div>
    )
}

export default AboutMe;