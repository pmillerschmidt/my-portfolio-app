import React from "react";
import NavigationBar from '../components/NavigationBar';
import Mastfoot from '../components/mastfoot';
  
const Contact = () => {
  return (

    <div className="site-wrapper">
  <div className="site-wrapper-inner">
    <div className="cover-container">
      <NavigationBar active_page='Contact' />
        <div>Contact US</div>
      <Mastfoot />

      
    </div>
  </div>
</div>
  );
  
};
  
export default Contact;