
import React, { Component } from 'react';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/LandingPage.css"
import cv from "../static/PDFs/PM-CV.pdf"
import {Link} from "react-router-dom"


class LandingPage extends Component {
    render() {
        return (

            <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",  
              transform: "translate(-45%, -60%)"
            }}
          >
              <div class="row">
                <div class="block"> 
                
                <h1 class="cover-heading">
                    <p>Hello, I'm Paul Miller-Schmidt</p>
                    <p class="h2">Software Engineer | Yale CS Grad | Musician | Educator</p>
                  </h1>
               
                <p class="lead">
                
                
                
                <Link to="/Projects" class="btn btn-default btn2">Projects</Link>
                {/* <Link to="/Projects" class="btn btn-default btn2">Resume</Link> */}
                <a href={cv} class="btn btn-default btn2" download>Download CV</a>
                
                </p>
                

                </div>
                <div class="block"> 
                {/* <img src={bg} alt="SWE"/> */}
                </div>
              

                </div>


          </div>
        );
    };
    
  
};


export default LandingPage;