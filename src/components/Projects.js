import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdbreact";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import ProjectCard from './ProjectCard';
import rankhorror from './images/rankhorror.png'
import gelp from './images/gelp.png'
import snake from './images/snake.png'

const Projects = () => {
    return (
    <div id="portfolio">
    <MDBContainer className="my-5">
        <MDBRow>
            <MDBCol md="12" className="align-items-center justify-content-center p-0 mb-5">
                <Zoom>
                    <MDBTypography tag='h3' variant="display-4" align="center" className="aboutheader">
                        Projects
                    </MDBTypography>
                </Zoom>
                <Fade left delay={500}>
                    <div className="header-bar"></div>
                </Fade>
                <Fade left>
                    <p className="mt-4 text-center">A collection of personal projects. You can find source code of each on my GitHub page.</p>
                </Fade>
            </MDBCol>
        </MDBRow>
        <MDBRow className="projects-wrapper">
            <MDBCol md="4" className="mb-3">
                <ProjectCard 
                    title = "Horror Rankings"
                    details = {`A purely personal project I made so my wife and I could rank the movies within different horror franchises as we watch them.  
                                    I intend to make the site usable by others soon but for now you can still check it out`}
                    image = {rankhorror}
                    url = 'http://rankhorror.herokuapp.com/'
                />
            </MDBCol>
            <MDBCol md="4" className="mb-3">
                <ProjectCard 
                    title = "Gelp"
                    details = {`I made this site as an easy way to search Google Maps and see both Google and Yelp ratings for each found location`}
                    image = {gelp}
                    url = 'http://gelpmap.herokuapp.com/'
                />
            </MDBCol>
            <MDBCol md="4" className="mb-3">
                <ProjectCard 
                    title = "Snake Game"
                    details = {`The classic snake game that I recreated using React with hooks.`}
                    image = {snake}
                    url = 'https://snakeygame.netlify.app/'
                />
            </MDBCol>
            {/* <MDBCol md="4" className="mb-3">
                <ProjectCard 
                    title = "🚧 Twitter Clone"
                    details = {`I am currently creating a twitter clone for the purpose of teaching myself new web dev skills including Redux Toolkit, Prisma and GraphQL`}
                    image = {twitclone}
                />
            </MDBCol> */}
        </MDBRow>
    </MDBContainer>
    </div>
    );
}

export default Projects;