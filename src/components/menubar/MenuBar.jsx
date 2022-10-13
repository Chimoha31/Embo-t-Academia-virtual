import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./MenuBar.scss";
import { GiBallerinaShoes } from 'react-icons/gi';

const MenuBar = () => {
  return (
    <div className="menubar">
      <Navbar variant="light" className="navbar">
        <Container>
          <Navbar.Brand href="/"><GiBallerinaShoes /></Navbar.Brand>
          {/* <Navbar.Brand href="/"><i className="fas fa-shoe-prints"></i></Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="classes">CLASSES</Nav.Link>
            <Nav.Link href="gallery">GALLERY</Nav.Link>
            <Nav.Link href="contact">CONTACT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
