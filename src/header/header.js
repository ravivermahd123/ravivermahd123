// import * as React from 'react';

import { Outlet, Link } from "react-router-dom";

// const Headers = () => {
 
//   return (
  
//        <header className="headertop">
//      <div className="container">
//         <div className="header-part1">
//         <div className="header-icon">
//             <h3 href ="/" className="PancakeSwap">PancakeSwap</h3>
//         </div>
       
//         <div className="navigation">
//             <ul>
//              <li><Link to ='/' >Trade</Link></li> 
//              <li> <Link to = '/win'>win
//                     </Link></li>  
//                   <li>  <Link to="/Earn"> Earn</Link></li>
                  
               
//               </ul>
//         </div>
//      </div>
//      <div className="header-part1">
//         <div className="header-part-icon" > <i>$3.828</i><i className="fa-solid fa-earth-asia"></i>
//             <i className="fa-solid fa-gear"></i>
           
//             <button className="header-button">Connect Wallet</button>
//         </div>
//      </div>
//      </div>
//     </header>
    
//   );
// };
// export default Headers;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




function Headers() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{padding:'10px '}}>
      
        <h4 href="#home">PancakeSwap</h4>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
        <Nav.Link><Link to ='/' >Trade</Link></Nav.Link> 
             <Nav.Link> <Link to = '/win'>win
                    </Link></Nav.Link>  
                   <Nav.Link>  <Link to="/Earn"> Earn</Link></Nav.Link>
                
         
          </Nav>
          <Nav>
            <Nav.Link >More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                 <button className="header-button">Connect Wallet</button>

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default Headers;