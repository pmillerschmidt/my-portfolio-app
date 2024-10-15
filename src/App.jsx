
import './App.css';
import React from 'react';

//import bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css';
import ImagePreloader from './components/ImagePreloader';
//routing 
// importing components from react-router-dom package
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
  
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";


function App() {
  return (

    <div> 
    <ImagePreloader src="./static/images/bio.png" alt="Image" />

    <Router>
      <Routes>
        
        <Route exact path="/" element={<Home/>} />
        <Route path="/my-portfolio-app" element={<Home/>} /> 
        <Route path="/About" element={<About/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
  </Router>
  </div>

  );
}

export default App;
