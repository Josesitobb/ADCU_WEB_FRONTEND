import React from "react";
import Footer from "../../../components/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "../../../styles/styles.css";
import MenuHamburguesa from "../../../components/Menuhamburguesa";

export default function RegistroDeActividades() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <MenuHamburguesa />

      <h1 className="tituloPrincipal">Registro de actividades</h1>
      <Row>
        <Col>
          <input
            type="text"
            className="input"
            style={{ marginLeft: "75%", marginBottom: "10px", width: "15%" }}
            placeholder="Ingrese un nombre de usuario para flitrar"
          />
        </Col>
      </Row>

      <Row>
        <table className="tablaTodos">
          <thead className="encabezadoTabla">
            <tr>
              <th>#</th>
              <th>Usuario</th>
              <th>Acciones</th>
              <th>Fecha y hora</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            {Registros.map((Reg, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{Reg.Usuario}</td>
                <td>{Reg.Acciones}</td>
                <td>{Reg.FechayHora}</td>
                <td>
                  <Button className="botonAzul" onClick={handleShow}>
                    Detalles
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Row>
      <Footer />
      {/* MODAL */}
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Detalles Usuarios</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>ID</h5>
            <p>1</p>
            <h5>Usuario que realizo la accion</h5>
            <p>Pedrita gamers</p>
            <h5>Direccion ip de donde se modifico</h5>
            <p>IP:129.123.123 Bogota D.C</p>
            <h5>Acción Realizada</h5>
            <p>creación</p>
            <h5>Fecha y Hora</h5>
            <p>12/04/2025</p>
            <h5>Tipo de Acción</h5>
            <p>Creación de documento</p>
            <h5>Documento Relacionado</h5>
            <p>Execel basico</p>
            <h5>Estado del Documento</h5>
            <p>En revisión</p>
            <h5>Detalle</h5>
            <p>Modificó la sección de términos y condiciones</p>
            <h5>Archivo/Documento Subido</h5>
            <p>Execel basic</p>
            <h5>¿Es Compartido?</h5>
            <p>Si</p>
            <h5>Quienes se les comparti el documento</h5>
            <p>
              <ol>
                <li>Elon musk</li>
                <li>Bill gaste</li>
              </ol>
            </p>
            <h5>Versión del Documento</h5>
            <p>1</p>
            <h5>Resultado de la Acción</h5>
            <p>Exitosa</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

const Registros = [
  {
    id: 1,
    Usuario: "Juanes",
    Acciones: "Edito",
    FechayHora: "12/04/2025",
  },
  {
    id: 1,
    Usuario: "Juanes",
    Acciones: "Edito",
    FechayHora: "12/04/2025",
  },
];
