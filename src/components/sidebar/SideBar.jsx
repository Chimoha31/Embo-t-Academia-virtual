import React, { useState } from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import "./SideBar.scss";

const SideBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sidebar">
      <i className="fas fa-bars" onClick={handleShow}></i>

      <Offcanvas show={show} onHide={handleClose} className="canvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="menu_list">
          <Nav.Item>
            <Nav.Link href="/home" className="menu">HOME</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/classes" className="menu">CLASSES</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/gallery" className="menu">GALLERY</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact" className="menu">CONTACT</Nav.Link>
          </Nav.Item>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SideBar;
