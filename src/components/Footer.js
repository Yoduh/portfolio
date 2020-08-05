import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import github from './images/icons/github.svg';
import linkedin from './images/icons/linkedin.svg';
import resume from './images/icons/resume.png';

const Footer = () => {
    return (
    <MDBFooter id="contact" className="font-small pt-4 mt-4 footer">
      <MDBContainer fluid className="text-center text-md-left my-4">
        <MDBRow>
          <MDBCol md="12" className="justify-content-center align-items-center text-center">
            <h5 className="title">Want to work together? Contact me!</h5>
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center">
            <MDBCol md="6">
            <form>
                <p className="h5 text-center mb-4"></p>
                <div>
                    <MDBInput className="white-text" label="Your name" icon="user" group type="text" validate error="wrong"
                        success="right" />
                    <MDBInput className="white-text" label="Your email" icon="envelope" group type="email" validate error="wrong"
                        success="right" />
                    <MDBInput className="white-text" label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                    <MDBInput className="white-text" type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                </div>
                <div className="text-center">
                <MDBBtn outline>
                    Send
                    <MDBIcon far icon="paper-plane" className="email-send ml-1" />
                </MDBBtn>
                </div>
            </form>
            </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center mt-4">
            <a href="https://github.com/Yoduh">Github <img src={github} className="nav-icon mr-3"/></a>
            <a href="https://www.linkedin.com/in/alex-handlovits/">Linkedin <img src={linkedin} className="nav-icon mr-3"/></a>
            <a href="https://drive.google.com/file/d/1TtbUHgV0eJlULC9BkydLZLSF2n3YNLVa/view?usp=sharing">Resume <img src={resume} className="nav-icon mr-3"/></a>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Alex Handlovits
        </MDBContainer>
      </div>
    </MDBFooter>
    );
}

export default Footer;