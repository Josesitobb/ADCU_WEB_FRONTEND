import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import MenuHamburguesa from "./Menuhamburguesa";
import { Link } from "react-router-dom";

export default function Navbar_Admin() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <MenuHamburguesa />

      <Container>
        <Navbar.Brand href="#home">
          <h1 style={{ color: "white" }}>ADCU</h1>
        </Navbar.Brand>
      </Container>

      {/* NavDropdown para las opciones del menú */}
      <Nav className="ml-auto" style={{ margin: "0 75px 0 0" }}>
        <NavDropdown title="Opciones" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.2">Perfil</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
          <Link to="/">Cerrar sesión</Link>
          
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}
