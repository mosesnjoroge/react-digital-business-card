import React from "react";
import logo from './profilephoto.jpeg';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
  <div className= 'profilephoto'>
    <img src={logo} alt="Moses Njoroge" />
    <h2>Moses Njoroge</h2>
    <h5>Software Developer</h5>
    <Button variant="outline-primary" className = 'linkedinbtn'><FontAwesomeIcon icon={faLinkedinIn} />LinkedIn</Button>
    <Button variant="outline-secondary" className = 'emailbtn'>Email</Button>
  </div>
  )
}
