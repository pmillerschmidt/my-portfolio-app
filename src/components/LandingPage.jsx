
import React, { Component } from 'react';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/LandingPage.css"
import cv from "../static/PDFs/PM-CV.pdf"
import {Link} from "react-router-dom"


class LandingPage extends Component {
    render() {
        return (

            <div className="lp-container"
            style={{
              position: "absolute",
              top: "50%",
              left: "8%",  
              transform: "translate(0%, -60%)"
            }}
          >

                <h1 class="cover-heading">
                    <p>Paul Miller-Schmidt</p>
                    <p class="h2">Musician | Software Engineer | Educator</p>
                  </h1>
               
                <p class="lead">

                
                <Link to="/Projects" class="btn btn2">Projects</Link>
                {/* <Link to="/Projects" class="btn btn-default btn2">Resume</Link> */}
                <a href={cv} class="btn btn2" download>Download CV</a>
                
                </p>
                
          </div>
        );
    };
    
  
};


export default LandingPage;