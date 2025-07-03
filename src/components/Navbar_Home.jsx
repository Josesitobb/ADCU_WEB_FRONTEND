import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/Logo_Empresa.png'; 

export default function Navbar_Home() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#fdf5f7" }} variant="light">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            {/* Logo de la empresa */}
            <img
              alt="Logo ADCU"
              src={Logo}
              width="60"
              className="d-inline-block align-top" // Alinea el logo con el texto
            />
            
            {/* Título "ADCU" con estilo personalizado */}
            <h2
              className="ms-3 mb-0" // Agrega margen a la izquierda del logo
              style={style}
            >
              ADCU
            </h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}


const style = {
  
    fontFamily: 'League Spartan, sans-serif', // Fuente personalizada
    fontWeight: '700', // Negrita
    color: '#000000', // Color oscuro para el texto
  
}