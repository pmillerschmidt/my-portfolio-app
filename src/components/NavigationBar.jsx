
import React from 'react';
import {Link} from "react-router-dom";
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/navbar.css";


const NavigationBar = (page) => {

  return (
      <div className="masthead">
        <div className="inner">
          <nav>
            <ul className="nav masthead-nav">
              
              <li className={(page.active_page == "Home") ? "active" : ""}><Link to="/">Home</Link></li>
              <li className={page.active_page === "About" ? "active" : " "}> <Link to="/About">About</Link> </li>
              <li className={page.active_page === "Projects" ? "active" : ""}><Link to="/Projects">Projects</Link></li>
              <li className={page.active_page === "Contact" ? "active" : ""}><Link to="/Contact">Contact</Link></li> 
              
            </ul>
          </nav>
        </div>
      </div>



  );
}


    export default NavigationBar;

