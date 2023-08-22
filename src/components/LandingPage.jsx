
import React, { Component } from 'react';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/LandingPage.css"
import {Link} from "react-router-dom";



class LandingPage extends Component {

    render() {
        return (

            <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <div>
                <h1 class="cover-heading">
                    <p>Paul Miller-Schmidt</p>
                    <p class="h2">Musician | Software Engineer | Educator</p>
                    </h1>
               
                {/* <p class="lead">In a world of points and pixels, it is important to bring life to our machines. 
</p> */}
                <p class="lead">
                <Link to="/About" class="btn btn-lg btn-default btn1">Learn More</Link>
                </p>
      </div>

          </div>
        );
    };
    
  
};


export default LandingPage;