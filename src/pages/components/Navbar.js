import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLight } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const MyNavbar = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-[#f57af1e6] flex fixed-top max-h-[12vh]">
     <Container className="flex justify-content-between align-items-center min-w-full">
       <Navbar.Brand href="/">
         <img src="logo.png" alt="" className="w-[40vw] max-h-[7vh]" />
       </Navbar.Brand>
       <Navbar.Toggle
         className="mt-1"
         style={{
           border: 'none',
           boxShadow: 'none',
           outline: 'none',
           }}
       />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
           <Nav.Link className="bg-[#f57af1]" href="/">Home</Nav.Link>
           <Nav.Link className="bg-[#f57af1]" href="/tours">Tours</Nav.Link>
           <Nav.Link className="bg-[#f57af19a]" href="/blog">Blog</Nav.Link>
           <Nav.Link className="bg-[#f57af19a]" href="/about">About</Nav.Link>
           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
             <NavDropdown.Divider />
             <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
           </NavDropdown>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
    </>
  );
};

export default MyNavbar;
