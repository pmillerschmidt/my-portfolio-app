import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/ProjectPage.css'
// import MediaCard from './MediaCard';
import { CCard, CCardBody, CCardImage, CCardTitle, CCardText, CButton } from '@coreui/react';
// import '@coreui/coreui/dist/css/coreui.min.css';


class  ProjectPage extends Component {
    // state = {  } 
    render() { 
        return (
            <div>
                <CCard style={{ width: '18rem' }}>
                    {/* <CCardImage orientation="top" src={ReactImg} /> */}
                    <CCardBody>
                        <CCardTitle class='project-title'>MelGen</CCardTitle>
                        <CCardText>
                        Melody Generator
                        </CCardText>
                        <CButton 
                            color="light" 
                            variant="ghost" 
                            shape="rounded-pill" 
                            href="https://github.com/paulmillerschmidt/MelGen">
                                Learn More
                        </CButton>
                    </CCardBody>
                </CCard>
{/*                 
                <p class='project-title'>
                    {this.props.title}
                </p> */}
            </div>


        );
    }
}
 
export default ProjectPage;