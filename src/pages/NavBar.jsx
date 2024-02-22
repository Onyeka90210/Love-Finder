import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/NavBar.css";
import Logo from "../assets/Logo.svg";

const NavBar = () => {
  return (
    <>
    <div className="d">
      <Navbar bg="light" expand="md" data-bs-theme="light" className="Navbar">
        <div className="contain">
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="logo" />
          </Navbar.Brand>
          <div className="navstuffs">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <div className=" MHCA d-md-flex">
                  <Nav.Link href="#Members"><div className="hover">Members</div></Nav.Link>
                  <Nav.Link href="#Home"><div className="hover">Home</div></Nav.Link>
                  <Nav.Link href="#ContactUs"><div className="hover"> Contact Us</div></Nav.Link>
                  <Nav.Link href="#AboutUs "><div className="hover">About Us</div></Nav.Link>
                </div>
                <div className="login">
                  <Nav.Link href="#Login">
                    <button className="loginbtn">Log in</button>
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </div>
    </>
  );
};

export default NavBar;
