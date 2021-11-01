import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import github from './images/icons/github.svg';
import linkedin from './images/icons/linkedin.svg';
import resume from './images/icons/resume.png';

const Footer = () => {
  const form = useRef();
  const [sentEmail, setSentEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_MAIL_SERVICEID, 'template_dgtzyfs', form.current, process.env.REACT_APP_MAIL_USERID)
      .then((result) => {
        setSentEmail(true);
        form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
  <MDBFooter id="contact" className="font-small pt-4 mt-4 footer">
    <MDBContainer fluid className="text-center text-md-left my-4">
      <MDBRow>
        <MDBCol md="12" className="justify-content-center align-items-center text-center">
          {sentEmail ? 
            <h5 className="title">Thanks for your interest in contacting me, I'll be in touch soon!</h5> : 
            <h5 className="title">Want to work together? Contact me!</h5>
          }
        </MDBCol>
      </MDBRow>
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <form ref={form} onSubmit={handleSubmit}>
            <p className="h5 text-center mb-4"></p>
            <div>
              <MDBInput className={sentEmail ? "grey-text" : "white-text"} label="Your name" name="from_name" icon="user" group type="text"
                  success="right" maxLength="100" disabled={sentEmail} />
              <MDBInput className={sentEmail ? "grey-text" : "white-text"} label="Your email" name="reply_to" icon="envelope" group type="email" required
                  success="right" maxLength="100" disabled={sentEmail} />
              <MDBInput className={sentEmail ? "grey-text" : "white-text"} label="Subject" name="subject" icon="tag" group type="text" required success="right" maxLength="200" disabled={sentEmail} />
              <MDBInput className={sentEmail ? "grey-text" : "white-text"} type="textarea" rows="4" label="Your message" name="message" icon="pencil-alt" required disabled={sentEmail} />
            </div>
            <div className="text-center">
            <MDBBtn type="submit" outline disabled={sentEmail}>
              { sentEmail ? "Sent" : "Send" }
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