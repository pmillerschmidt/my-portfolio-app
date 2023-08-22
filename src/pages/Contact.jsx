import React from "react";
import { useEffect } from 'react';
import NavigationBar from '../components/NavigationBar';
import Mastfoot from '../components/mastfoot';
import bg from '../static/images/cover_blur.jpg';

  
const Contact = () => {

  // useEffect(() => {
  //   document.body.style.backgroundImage = `url(${bg})`;
  // }, []);
  
  return (

    <div className="site-wrapper">
  <div className="site-wrapper-inner">
    <div className="cover-container">
      <NavigationBar active_page='Contact' />
        <div>Contact US</div>
      <Mastfoot />

      
    </div>
  </div>
</div>
  );
  
};
  
export default Contact;