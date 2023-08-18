
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import NavigationBar from '../components/NavigationBar';
import Mastfoot from '../components/mastfoot';
import RectangleList from '../components/RectangleList';
import ProjectPage from '../components/ProjectPage';

function Projects () {
        return (
<div className="site-wrapper">
  <div className="site-wrapper-inner">
    <div className="cover-container">
      
    <NavigationBar active_page='Projects'/>
    
      <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <div class="inner">
            {/* <ProjectPage /> */}
            </div>
          </div>
      <Mastfoot />

    </div>
  </div>
</div>


        );

  };
  
  export default Projects;