
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import NavigationBar from '../components/NavigationBar';
import Mastfoot from '../components/mastfoot';

function About () {
        return (
<div className="site-wrapper">
  <div className="site-wrapper-inner">
    <div className="cover-container">
      <NavigationBar active_page='About' />
        <div>HELLO</div>
      <Mastfoot />

      
    </div>
  </div>
</div>


        );

  };
  
  export default About;