import React from "react";
import MenuHamburguesa from "../../../components/Menuhamburguesa";
import Footer from "../../../components/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../../styles/styles.css";
export default function ConsultasyReportes() {
  return (
    <div>
      <MenuHamburguesa />

      <h1 className="text-center my-4">Registros de Auditoría</h1>
      <div style={{ marginLeft: "10%" }}>
        <Row>
          <Col>
            <label htmlFor="Usuarios" style={Titulos}>
              Usuarios
            </label>
            <br />
            <input type="text" id="Usuarios" style={input} />
          </Col>
          <Col>
            <label htmlFor="Fecha" style={Titulos}>
              Fecha
            </label>
            <br />
            <input type="date" id="Fecha" style={input} />
          </Col>
          <Col>
            <label htmlFor="accion" style={Titulos}>
              Tipo de Acción
            </label>
            <br />
            <select name="" id="accion" style={input}>
              <div style={{ boxShadow: "5px 5px 0" }}>
                <option value="">--Seleccionar---</option>
                <option value="">Crear</option>
                <option value="">Editar</option>
                <option value="">Eliminar</option>
                <option value="">Acceder</option>
              </div>
            </select>
          </Col>
        </Row>
      </div>

      <div
        style={{
          marginLeft: "56%",
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        <button style={{ ...Botones, backgroundColor: "#3498db" }}>
          Buscar
        </button>
        <button style={{ ...Botones, backgroundColor: "#2ecc71" }}>
          Exportar
        </button>
        <button style={{ ...Botones, backgroundColor: "#2ecc71" }}>
          Exportar en excel
        </button>
      </div>

      <div>
        <table className="tablaTodos">
          <thead>
            <tr className="encabezadoTabla">
              <th style={{ padding: "10px" }}>#</th>
              <th style={thTable}>Fecha</th>
              <th style={thTable}>Usuario</th>
              <th style={thTable}>Acción</th>
              <th style={thTable}>Detalle</th>
            </tr>
          </thead>
          <tbody>
            <tr className="FinalTabla">
              <td>1</td>
              <td>2025-04-06</td>
              <td>jguerra</td>
              <td>Editar </td>
              <td>@ Modificó el documento 'Acta_01.pdf'</td>
            </tr>
          </tbody>
        </table>

        <Footer />
      </div>
    </div>
  );
}

const Titulos = {
  fontWeight: 600,
  color: "#34495e",
};

const input = {
  borderRadius: "5px",
  border: "1px solid #ccc",
  marginTop: "5px",
  width: "45%",
  height: "40px",
};

const Botones = {
  marginLeft: "10px",
  borderRadius: "8px",
  padding: "5px 20px  5px 20px",
  border: "none",
  color: "#FFFFFF",

  fontWeight: 600,
};

const thTable = {
  padding: "10px",
  textAlign: "left",
  fontWeight: 700,
};
