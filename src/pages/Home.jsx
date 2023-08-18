
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import reportWebVitals from '../reportWebVitals';
//import bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css';
//import components
import NavigationBar from '../components/NavigationBar';
import LandingPage from '../components/LandingPage';
import BouncingBall from '../components/BouncingBall';
import Mastfoot from '../components/mastfoot';



function Home() {
  return (
    
    <div class="site-wrapper">

      <div class="site-wrapper-inner">

        <div class="cover-container">
    
          <NavigationBar active_page='Home' />
          <BouncingBall />
          <LandingPage />         
          <Mastfoot />
         

            </div>
          </div>
          </div>

  );
}

export default Home;
