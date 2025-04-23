import React from "react";
import MenuHamburguesa from "../../../components/Menuhamburguesa";
import Footer from "../../../components/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../../styles/styles.css";
export default function MonitoreoyAlertas() {
  return (
    <div>
      <MenuHamburguesa />

      <h1 className="text-center my-4">Monitoreo y alerta</h1>
      <div style={{ marginLeft: "10%" }}>
        <Row>
          <Col>
            <label htmlFor="Usuarios" style={Titulos}>
              Usuarios
            </label>
            <br />
            <input
              type="text"
              id="Usuarios"
              style={input}
              placeholder="Ej. Pollitogamin"
            />
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
      <Row>
        <Col>
          <button
            style={{
              ...Botones,
              backgroundColor: "#3498db",
              marginLeft: "10%",
              marginTop: "50px  ",
            }}
          >
            Flitrar
          </button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={cajaContenedor}>
            {SiAcciones.map((Accion, index) => (
              <>
                <p style={fechap}>{Accion.Fecha}</p>
                <p style={detallep}>{Accion.Informacion}</p>
                <hr style={{ marginLeft: "20px", width: "95%" }} />
              </>
            ))}
          </div>
        </Col>
      </Row>
      <Footer />
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

const cajaContenedor = {
  marginLeft: "10%",
  width: "74%",
  border: "1px solid #ccc",
  borderRadius: "8px",
  backgroundColor: "#fafafa",
  marginTop: "2%",
};

const fechap = {
  marginLeft: "20px",
  marginTop: "3%",
  color: "#888",
  fontSize: "0.9rem",
  marginBottom: "0",
};

const detallep = {
  fontWeight: 500,
  color: "#2c3e50",
  marginLeft: "20px",
};

const SiAcciones = [
  {
    id: 1,
    Fecha: "2025-04-08 14:33:21",
    Informacion: "📄 jguerra accedió al documento 'Acta_01.pdf'",
  },
  {
    id: 2,
    Fecha: "2025-04-08 14:30:02",
    Informacion: "⚠️ lcastro intentó iniciar sesión con contraseña incorrecta",
  },
  {
    id: 3,
    Fecha: "2025-04-08 14:29:12",
    Informacion: "📝 jguerra editó el documento 'Plan_Anual.docx'",
  },
];
