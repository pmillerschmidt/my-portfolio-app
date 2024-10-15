
// Import dependencies
import React from 'react';
import { useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import '../styles/Projects.css';
import ProjectWide from '../components/ProjectWide';
import ProjectThin from '../components/ProjectThin';

const Projects = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      document.title = 'Projects';
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
    
     
    {windowWidth >= 768 ? (<ProjectWide />) : (<ProjectThin />)}
    <NavigationBar active_page='Projects'/>
      </div>
   
    </div>
  </div>
  

        );

  };
  
  export default Projects;