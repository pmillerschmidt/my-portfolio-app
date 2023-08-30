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
import Socials from "../components/Socials";

const Contact = () => {

  const [submitted, updateSubmitted] = useState(false); // [0, function]

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      document.title = 'Contact';
    }, []);

  
    useEffect(() => {
      // Function to update window width in state
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      // Add an event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


  return (
    <div className="site-wrapper">
      <div className="site-wrapper-inner">
        <div className="cover-container">
          
           {windowWidth >= 1000 ? ( 
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
            ) : (
              <div className="content">
              <div className="block">
            {submitted ? <SubmitEmail/> : <ContactForm updateSubmitted={updateSubmitted} />}
            </div>
            </div>
            )}


          <Socials />
          <NavigationBar active_page='Contact' />
          
        </div>
      </div>
    </div>
  );

};


export default Contact;
