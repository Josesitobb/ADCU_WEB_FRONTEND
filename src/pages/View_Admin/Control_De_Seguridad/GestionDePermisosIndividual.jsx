import React from "react";
import Navbar_Admin from "../../../components/Navbar_Admin";
import Footer from "../../../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../../styles/styles.css";
import MenuHamburguesa from "../../../components/Menuhamburguesa";
export default function GestionDePermisosIndividual() {
  return (
    <div>
      <MenuHamburguesa />
      <h1 className="text-center my-4">Gestion De Permisos Individual</h1>
      <Container>
        <Row>
          {" "}
          <p className="subtitulos">Buscar Usuarios</p>
        </Row>
        <Row>
          <select name="" id="" className="input" style={{ width: "100%" }}>
            <option value="" disabled>
              Seleccione un usuario
            </option>
            <option value="">Pedro manuel</option>
            <option value="">Manuel Jimenez</option>
            <option value="">Sapopeta</option>
          </select>
        </Row>

        <Row>
          <p className="subtitulos"> Permisos actuales del usuario</p>
          <ul>
            <li className="Listas">Ver Documentos (heredado del grupo)</li>
            <li className="Listas">Editar Documentos (individual)</li>
          </ul>
        </Row>

        <Row>
          <p className="subtitulos"> Asignar Permisos Individuales</p>

          <Col>
            <Form.Check
              type="checkbox"
              id="VerDocumentos"
              label="Ver documentos"
              className="checkbox"
            />
          </Col>
          <Col>
            <Form.Check
              type="checkbox"
              id="EditarDocumentos"
              label="Editar Documentos"
              className="checkbox"
            />
          </Col>
          <Col>
            <Form.Check
              type="checkbox"
              id="DescargarDocumentos"
              label="Descargar Documentos"
              className="checkbox"
            />
          </Col>
        </Row>

        <Button style={{ marginTop: "20px" }} className="botonAzul">
          
          Guardar cambios
        </Button>

        <p className="subtitulos">Restablecer Permisos</p>
        <Button className="botonAzul"> Eliminar Permisos Individuales </Button>
      </Container>
      <Footer />
    </div>
  );
}


