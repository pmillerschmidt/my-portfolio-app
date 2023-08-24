import React from "react";
import { useEffect, useState, useRef } from 'react';
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
          <NavigationBar active_page='Contact' />
          <div className='content'>
            {/* <ContactForm /> */}
            {submitted ? <SubmitEmail/> : <ContactForm updateSubmitted={updateSubmitted} />}
          </div>
          <Mastfoot />
        </div>
      </div>
    </div>
  );

};


export default Contact;
