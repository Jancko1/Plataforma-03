import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "../styles/logout.css";
//----------BOOTSTRAP----------
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const LogoutButton = () => {
  const { logout } = useAuth0();
  //--------------NAVBAR--------------
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="container_nav"
    >
      <Container>
        <Navbar.Brand href="#home">Circuito-03</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Perfil</Nav.Link>
            <NavDropdown title="Instituciones" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Algo...</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }>
                Cerrar sesión
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default LogoutButton;
