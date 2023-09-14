import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import firebase from "../firebase.js";

function Heading() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">커뮤니티</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/upload">upload</Link>
            </Nav.Link>
            <Nav.Link>
              {user.uid !== "" ? (
                <Link
                  to="/login"
                  onClick={(e) => {
                    logout(e);
                  }}
                >
                  로그아웃
                </Link>
              ) : (
                <Link to="/login">로그인</Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Heading;
