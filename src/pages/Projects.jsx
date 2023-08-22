
// Import dependencies
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Mastfoot from '../components/mastfoot';
import ProjectPage from '../components/ProjectPage';
import '../styles/Projects.css';
import { useEffect } from 'react';
import { useState } from 'react';
import bg from '../static/images/cover.jpg';
import { Row } from 'react-bootstrap';
import mg from '../static/images/ai_music.jpg';
import lg from '../static/images/landing.jpg';
import cg from '../static/images/chess.jpg';
import gb from '../static/images/grooveblocks.jpg';
import wh from '../static/images/walk-home.jpg';
import BootstrapCard from '../components/BootstrapCard';

function Projects() {


  // useEffect(() => {
  //   document.body.style.backgroundImage = `url(${bg})`;
  // }, []);
  
        return (
         

<div className="site-wrapper">
  <div className="site-wrapper-inner">
    <div className="cover-container">
    
     
    <NavigationBar active_page='Projects'/>
    <div className='content'>

      <div className='row'> 
        <div class="project-badge">
        <BootstrapCard title="MelGen" imageUrl={mg} info="Harmonically-attentive Melody Generator" link="https://github.com/paulmillerschmidt/MelGen"/>
        </div>
        <div class="project-badge">
          <BootstrapCard title="Starmoney" imageUrl={lg} info="Harmonically-attentive Melody Generator" link="https://github.com/paulmillerschmidt/MelGen"/>
        </div>
        <div class="project-badge">
        <BootstrapCard title="Chess Alphabot" imageUrl={cg} info="Harmonically-attentive Melody Generator" link="https://github.com/paulmillerschmidt/MelGen"/>
        </div>
      </div>
      <div className='row'> 
        <div class="project-badge">
        <BootstrapCard title="Groove Blocks" imageUrl={gb} info="Harmonically-attentive Melody Generator" link="https://github.com/paulmillerschmidt/MelGen"/>
        </div>
        <div class="project-badge">
        <BootstrapCard title="Walk Home" imageUrl={wh} info="Harmonically-attentive Melody Generator" link="https://github.com/paulmillerschmidt/MelGen"/>
        </div>
        <div class="project-badge">
        <BootstrapCard title="MelGen" imageUrl={mg} info="Harmonically-attentive Melody Generator" link="https://github.com/paulmillerschmidt/MelGen"/>
        </div>
      </div>
    </div>

      <Mastfoot />
      </div>

    </div>
    
  </div>
  

        );

  };
  
  export default Projects;