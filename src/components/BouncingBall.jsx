import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/BouncingBall.css'; // Make sure to create this CSS file
import Floor from './Floor';

const BouncingBall = () => {
  return (
    <Container className="ball-container">
      <div class="bouncy-castle">
  <div class="ball-shadow"></div>
  <div class="ball"></div>
</div>
      <div className="floor"></div>
      
      
     </Container>
    
  );
};

export default BouncingBall;