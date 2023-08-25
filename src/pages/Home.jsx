
import React from 'react';
import { useEffect } from 'react';
//import bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css';
//import components
import NavigationBar from '../components/NavigationBar';
import LandingPage from '../components/LandingPage';
import BouncingBall from '../components/BouncingBall';
import Mastfoot from '../components/mastfoot';
import '../styles/Home.css';
// background
import bg from '../static/images/cover.jpg';



function Home() {

  // useEffect(() => {
  //   document.body.style.backgroundImage = `url(${bg})`;
  // }, []);

  return (

        
    
    <div className="site-wrapper">

      <div className="site-wrapper-inner">

        <div className="cover-container">
    
          <NavigationBar active_page='Home' />
          <LandingPage />         
          <Mastfoot />
         

            </div>
          </div>
          </div>

  );
}

export default Home;
