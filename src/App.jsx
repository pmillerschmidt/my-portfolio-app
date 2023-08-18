
import './App.css';
import React from 'react';

import reportWebVitals from './reportWebVitals';
//import bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css';

//routing 
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
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
    
    <Router>
      <Routes>
        
        <Route exact path="/" element={<Home/>} />
        <Route path="/portfolio" element={<Home/>} /> 
        <Route path="/About" element={<About/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Contact" element={<Contact/>} />
        {/* <Route path="/" /> */}
      </Routes>
  </Router>

  );
}

export default App;
