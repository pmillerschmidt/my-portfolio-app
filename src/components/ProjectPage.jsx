import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/ProjectPage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MediaCard from './MediaCard';


class  ProjectPage extends Component {
    // state = {  } 
    render() { 
        return (
            <div class='project-page'>
            <Row>
            <div className="flex-container">
                <div className="item"> <MediaCard title="MelGen" content="Project 1" image="./ChessSet.jpg" /></div>
                <div className="item"> <MediaCard /></div>
                <div className="item"> <MediaCard /></div>
                
            </div>
            <div className="flex-container">
                <div className="item"> <MediaCard /></div>
                <div className="item"> <MediaCard /></div>
                <div className="item"> <MediaCard /></div>
            </div>
            <div className="flex-container">
                <div className="item"> <MediaCard /></div>
                <div className="item"> <MediaCard /></div>
                <div className="item"> <MediaCard /></div>
            </div>

            </Row>
 
            </div>
            


        );
    }
}
 
export default ProjectPage;