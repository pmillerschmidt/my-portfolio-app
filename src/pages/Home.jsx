
import React from 'react';
import { useEffect } from 'react';
//import bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css';
//import components
import NavigationBar from '../components/NavigationBar';
import LandingPage from '../components/LandingPage';
import '../styles/Home.css';
// background
import Socials from '../components/Socials';
import ImagePreloader from '../components/ImagePreloader';
import VideoBackground from '../components/VideoBackground';




function Home() {

  useEffect(() => {
    document.title = 'Home';
  }, []);


  return (

    <div>
      <VideoBackground />

    <div className="site-wrapper">
      
      <div className="site-wrapper-inner">

        <div className="cover-container">
    
        <ImagePreloader src="./static/images/bio.png" alt="Image" />
          <LandingPage /> 
          <Socials />
          <NavigationBar active_page='Home' />   
         
          
            </div>
          </div>
          </div>
          </div>

  );
}

export default Home;
