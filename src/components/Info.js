import React from "react";
import logo from './profilephoto.jpeg';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

export default function Info() {
  return (
  <div className= 'profilephoto'>

    <img src={logo} alt="Moses Njoroge" />
    {/* name and subheading section */}
      <h2>Moses Njoroge</h2>
      <h5>Software Developer</h5>

    {/* email and linkedin btn and links */}
      <Button variant="outline-primary" className = 'linkedinbtn'><FontAwesomeIcon icon={faLinkedinIn} className = 'info--linkedinicon'/>LinkedIn</Button>
      <Button variant="outline-light" className = 'emailbtn'><FontAwesomeIcon icon={faEnvelopeOpen} className = 'info--emailicon'/>Email</Button>

  </div>
  )
}
