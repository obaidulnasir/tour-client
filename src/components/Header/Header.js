import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Header = () => {
  const {user,handleLogout }= useFirebase();
  return (
    <div>
      <>
        <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark">
          <Container>
            <Link to="/home">
            <Navbar.Brand>Travelo</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/allPackage" className="nav-link">Package</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/admin"><button className="btn btn-info mx-1">Dashboard</button></Link>
            {/* <Link to="/contact" className="nav-link">Contact</Link> */}
            {
              user.email?
              <button className="btn btn-danger" onClick={handleLogout} >Logout</button>
              :<Link to="/register"><button className="btn btn-info">Register</button></Link>
            }
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
