
import React, { Component } from 'react';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/LandingPage.css"
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
                    <p class="h2">Musician | Software Engineer | Educator | Yale CS Grad</p>
                  </h1>
               
                <p class="lead">
                
                
                <Link to="/About" class="btn btn-default btn2">Learn More</Link>
                <Link to="/Projects" class="btn btn-default btn2">Projects</Link>
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