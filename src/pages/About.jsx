
import React from 'react';
import { useEffect } from 'react';

import NavigationBar from '../components/NavigationBar';
import Mastfoot from '../components/mastfoot';
import bg from '../static/images/cover_blur.jpg';

function About () {
  // useEffect(() => {
  //   document.body.style.backgroundImage = `url(${bg})`;
  // }, []);
  
        return (
<div className="site-wrapper">
  <div className="site-wrapper-inner">
    <div className="cover-container">
      <NavigationBar active_page='About' />
        <div>HELLO</div>
      <Mastfoot />

      
    </div>
  </div>
</div>


        );

  };
  
  export default About;