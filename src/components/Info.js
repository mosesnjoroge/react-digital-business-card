import React from "react";
import logo from './profilephoto.jpeg';
import Button from 'react-bootstrap/Button';

export default function Info() {
  return (
  <div className= 'profilephoto'>
    <img src={logo} alt="Moses Njoroge" />
    <h2>Moses Njoroge</h2>
    <h5>Software Developer</h5>
    <Button variant="outline-primary">Primary</Button>
    <Button variant="outline-secondary">Secondary</Button>
  </div>
  )
}
