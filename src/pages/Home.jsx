
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
import PreloadImages from '../components/PreloadImages';
// background
import bg from '../static/images/cover.jpg';
import Socials from '../components/Socials';
import { Helmet } from 'react-helmet-async';



function Home() {

  // useEffect(() => {
  //   document.body.style.backgroundImage = `url(${bg})`;
  // }, []);
  useEffect(() => {
    document.title = 'Home';
  }, []);


  return (

        
    
    <div className="site-wrapper">

      <div className="site-wrapper-inner">

        <div className="cover-container">
    
          
          <LandingPage /> 
          <Socials />
          <NavigationBar active_page='Home' />   
         
          
            </div>
          </div>
          </div>

  );
}

export default Home;
