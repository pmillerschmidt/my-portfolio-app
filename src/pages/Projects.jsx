
// Import dependencies
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Mastfoot from '../components/mastfoot';
import ProjectPage from '../components/ProjectPage';
import Socials from "../components/Socials";
import '../styles/Projects.css';
import { useEffect } from 'react';
import { useState } from 'react';
import bg from '../static/images/cover.jpg';
import { Row } from 'react-bootstrap';
import mg from '../static/images/ai_music.jpg';
import pg from '../static/images/portfolio.png';
import lg from '../static/images/music-logic.png';
import cg from '../static/images/chess-robot.png';
import gb from '../static/images/groove_blocks.png';
import wh from '../static/images/walk-home.png';
import BootstrapCard from '../components/BootstrapCard';


function Projects() {

    useEffect(() => {
      document.title = 'Projects';
    }, []);


        return (
         

<div className="site-wrapper">
  <div className="site-wrapper-inner">
    <div className="cover-container">
    
     
    <div className="background-blur">
    <div className='content'>

      <div className='row'> 
        <div class="project-badge">
        <BootstrapCard title="MelGen" imageUrl={mg} info="Harmonically-attentive LSTM Melody Generator" link="https://github.com/paulmillerschmidt/MelGen"/>
        </div>
        
        <div class="project-badge">
        <BootstrapCard title="Groove Blocks" imageUrl={gb} info="Progressive Tools for Composition-based Music" link="https://github.com/paulmillerschmidt/GrooveBlocks"/>
        </div>

        <div class="project-badge">
        <BootstrapCard title="Walk Home" imageUrl={wh} info="Vue-based PWA for safe commutes" link="https://github.com/paulmillerschmidt/Walk-Home"/>
        </div>

      </div>

      <div className='row'> 

      <div class="project-badge">
          <BootstrapCard title="Music Logic" imageUrl={lg} info="Markov-based Melody Generator" link="https://github.com/paulmillerschmidt/Artiphon-Music-Logic"/>
        </div>
        
        <div class="project-badge">
        <BootstrapCard title="AlphaBot" imageUrl={cg} info="Minimax Chess Engine with AB pruning" link="https://github.com/paulmillerschmidt/Chess-Alpha-Beta"/>
        </div>
        
        <div class="project-badge">
        <BootstrapCard title="MCTS Cribbage" imageUrl={pg} info="Cribbage Bot with Monte Carlo Tree Search" link="https://github.com/paulmillerschmidt/MCTS-Cribbage"/>
        </div>
      </div>
    </div>
      {/* <Socials /> */}
      <NavigationBar active_page='Projects'/>
      
      </div>

    </div>
    
  </div>
  </div>
  

        );

  };
  
  export default Projects;