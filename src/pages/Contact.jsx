import React from "react";
import { useEffect, useState, useRef } from 'react';

//import bootstrap stuff
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/Contact.css"

import NavigationBar from '../components/NavigationBar';
import Mastfoot from '../components/mastfoot';
import ContactForm from '../components/ContactForm';
import SubmitEmail from '../components/SubmitEmail';

const Contact = () => {

  const [submitted, updateSubmitted] = useState(false); // [0, function]


  return (
    <div className="site-wrapper">
      <div className="site-wrapper-inner">
        <div className="cover-container">
          
           
            <div className="content">
            <div className='row'> 
              <div className="block">
              <div className="connect">
              <h1>Let's connect. </h1>
              <p> I'm open to new projects in software engineering,
              AI research, music technology, or education. </p>
              </div>
              </div>
              <div className="block">
            {submitted ? <SubmitEmail/> : <ContactForm updateSubmitted={updateSubmitted} />}
            </div>
            </div>


            </div>
          
          <NavigationBar active_page='Contact' />
          <Mastfoot />
        </div>
      </div>
    </div>
  );

};


export default Contact;
