
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { NavLink } from 'react-router-dom';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/navbar.css"


// import pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";



const NavigationBar = (active_page) => {
  console.log(active_page); 
  return (
      <div className="masthead clearfix">
        <div className="inner">
          {/* <h3 className="masthead-brand">Paul Miller-Schmidt</h3> */}
          <nav>
            <ul className="nav masthead-nav">
              
              <li className="active"><Link to="/">Home</Link></li>
              <li> <Link to="/About">About</Link> </li>
              <li><Link to="/Projects">Projects</Link></li>
              <li><Link to="/Contact">Contact</Link></li> 
            </ul>
          </nav>
        </div>
      </div>



  );
}

// class NavigationBar extends Component {

//     render()   {
//       console.log('props');
//         return (
//             // <div>hey</div>
//             <Navbar bg="light" expand="lg">
//               <Navbar.Brand href="#home">My App</Navbar.Brand>
//               <Navbar.Toggle aria-controls="basic-navbar-nav" />
//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="mr-auto">
//                   <Nav.Link href="#home">Home</Nav.Link>
//                   <Nav.Link href="#link">Link</Nav.Link>
//                   <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                   </NavDropdown>
//                 </Nav>
//               </Navbar.Collapse>
//             </Navbar>
//           );
//         }
                
//     }


    export default NavigationBar;

