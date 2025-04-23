import React from "react";
import Footer from "../../../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Molda_Admin from "../../../components/Molda_Admin";
import "../../../styles/styles.css";
import MenuHamburguesa from "../../../components/Menuhamburguesa";

export default function GestionDeGrupos() {
  return (
    <>
      <div>
        <MenuHamburguesa />
        <h1 className="tituloPrincipal">Gestion de grupos</h1>
        <Container>
          <Row>
            <Col>
              <label htmlFor="" className="">
                <h3>Nombre de grupo</h3>
              </label>
            </Col>
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              placeholder="Ingrese un nombre de grupo"
            />
          </Row>

          <Row>
            <Col>
              <Form.Check
                inline
                label="Ver Documento"
                type="checkbox"
                className="checkbox"
              />
            </Col>
            <Col>
              <Form.Check
                inline
                label="Editar Documento"
                type="checkbox"
                className="checkbox"
              />
            </Col>
            <Col>
              <Form.Check
                inline
                label="Compartir Documento"
                type="checkbox"
                className="checkbox"
              />
            </Col>
            <Col>
              <Form.Check
                inline
                label="Descargar Documento"
                type="checkbox"
                className="checkbox"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="auto">
              <Button
                className="botonVerde"
                type="summit"
                id="BotonEnviar"
                style={botonStyle}
                onClick={handleClick}
              >
                Crear un grupo
              </Button>
            </Col>
          </Row>
        </Container>
        <h1 className="text-center my-4">Grupos Creados</h1>
        <div style={{ marginLeft: "70%", marginBottom: "10px" }}>
          {/* AGREGAR USUARIOS */}
          <Molda_Admin
            NombreBoton="Agregar Usuarios"
            campos={AgregarUsuario}
            EstilosBoton={"botonVerde"}
          />
          {/* QUITAR USUARIOS */}
          <Molda_Admin
            NombreBoton="Remover Usuarios"
            campos={AgregarUsuario}
            EstilosBoton={"botonVerde"}
          />
        </div>

        <table className="tablaTodos">
          <thead className="encabezadoTabla">
            <tr>
              <th>#</th>
              <th>Nombre del grupo</th>
              <th>Permisos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {datosDeGrupos.map((dtGrupos, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{dtGrupos.NombreGrupo}</td>
                <td>{dtGrupos.Permisos}</td>
                <td style={{ marginLeft: "10%" }}>
                  <Molda_Admin
                    NombreBoton="Editar Grupo"
                    campos={editarGrupos}
                    EstilosBoton={"botonAzul"}
                  />
                  <Molda_Admin
                    NombreBoton="Eliminar Grupo"
                    campos={EliminarGrupo}
                    EstilosBoton={"botonAzul"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Footer />
      </div>
    </>
  );
}

const botonStyle = {
  marginTop: "30px",
  width: "200px",
  height: "50px",
};

const datosDeGrupos = [
  {
    id: 1,
    NombreGrupo: "Administradores",
    Permisos: "Ver,Editar,Descargar",
  },
  {
    id: 2,
    NombreGrupo: "Usuario",
    Permisos: "Ver,Editar",
  },
  {
    id: 3,
    NombreGrupo: "Cliente",
    Permisos: "Ver",
  },
];

const editarGrupos = [
  {
    label: "Nombre",
    name: "nombre",
    type: "text",
    placeholder: "Ingrese un nombre",
  },
  {
    label: "Ver documento",
    type: "checkbox",
  },
  {
    label: "Editar Documento",
    type: "checkbox",
  },
  {
    label: "Ver documento",
    type: "checkbox",
  },
  {
    label: "Compartir Documento",
    type: "checkbox",
  },
  {
    label: "Descargar Documento",
    type: "checkbox",
  },
];

const EliminarGrupo = [
  {
    label: "¿Desea eliminar este grupo?",
    name: "nombre",
    placeholder: "Nombre Grupo",
    disabled: true, // Normalmente solo se muestra, no se edita
  },
];

const AgregarUsuario = [
  {
    label: "Buscar usuario",
    name: "BusquedaUsuario",
    type: "text",
    placeholder:
      "Ingrese el nombre completo o número de cédula del usuario a buscar",
  },
];

const RemoverUsuario = [
  {
    label: "Buscar usuario",
    name: "BusquedaUsuario",
    type: "text",
    placeholder:
      "Ingrese el nombre completo o número de cédula del usuario a buscar",
  },
];

// MENSAJE
const handleClick = () => {
  alert("Se creo un grupo nuevo");
};
