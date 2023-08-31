import React, { Component } from 'react';
import bv from '../static/videos/bv.mp4';
import bvp from '../static/images/bvp.png';
import '../styles/VideoBackground.css';
import { useLocation } from 'react-router-dom';



function VideoBackground() {

    // state = { location: useLocation() } 
    const location = useLocation();

    return (
            console.log(location.pathname),
            <video className={`background-video ${location.pathname === '/About' ? 'video-active' : ''}`} autoPlay loop muted poster ={bvp}>
                <source src={bv} type="video/mp4" />
            </video>
        );
    }

export default VideoBackground;