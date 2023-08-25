
import React from 'react';
import { useEffect } from 'react';

import NavigationBar from '../components/NavigationBar';
import Mastfoot from '../components/mastfoot';
import bio from '../static/images/bio.png'
import '../styles/About.css';

function About () {

  return (
  <div className="site-wrapper">
    <div className="site-wrapper-inner">
      <div className="cover-container">
      
        

          <div className="about">
            <div className='about-row'> 
              <div className="about-block">

                <img src={bio} className="bio" alt="bio" />
                {/* <p className='photo-text'>
                  I'm a software engineer, AI researcher, and musician.
                </p> */}
              </div>

              
              <div className="about-block">
                <div className="about-section">
                <h1>About </h1>
                <div class="horizontal-line"></div>
                <p> I'm open to new projects in software engineering,
                AI research, music technology, or education. </p>
                </div>

            </div>
          </div>
        </div>
        <NavigationBar active_page='About' />
        <Mastfoot />
      </div>
    </div>
  </div>


    );

  };
  
  export default About;