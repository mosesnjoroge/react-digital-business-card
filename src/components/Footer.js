import React from 'react' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    <div className = 'footer-links'>
      <a href="https://github.com/mosesnjoroge"><FontAwesomeIcon icon={faGithub} /></a>
      <a href="https://www.linkedin.com/in/moses-njoroge-a78b46127/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
    </div>
  )
}
