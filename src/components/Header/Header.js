import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Travelo</Navbar.Brand>
            <Nav className="mx-auto">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/admin"><button className="btn btn-danger">Admin</button></Link>
            <Link to="/register"><button className="btn btn-info">Register</button></Link>
            
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
