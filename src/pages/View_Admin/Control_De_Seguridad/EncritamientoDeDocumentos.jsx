import React from "react";
import MenuHamburguesa from "../../../components/Menuhamburguesa";
import Footer from "../../../components/Footer";
import "../../../styles/styles.css";
export default function EncritamientoDeDocumentos() {
  return (
    <div>
      <MenuHamburguesa />

      <h1 className="tituloPrincipal"> Encritamiento De Documentos</h1>

      <div>
        <table className="tablaTodos">
          <thead className="encabezadoTabla">
            <tr>
              <th>Nombre del Documento </th>
              <th>Estado</th>
              <th>Nivel de Seguridad </th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  padding: "15px",
                  fontSize: "23px",
                  paddingTop: "30px",
                  width: "25%",
                }}
              >
                Informe_Financiero.pdf
              </td>
              <td
                style={{
                  padding: "15px",
                  fontSize: "23px",
                  paddingTop: "30px",
                  color: "#7f8c8d",
                  fontWeight: "bold",
                  fontWeight: 600,
                }}
              >
                Encriptado
              </td>
              <td style={tdTablet}>
                <select name="" id="accion" className="input">
                  <div style={{ boxShadow: "5px 5px 0" }}>
                    <option value="">Seleccionar </option>
                    <option value="">Crear</option>
                    <option value="">Editar</option>
                    <option value="">Eliminar</option>
                    <option value="">Acceder</option>
                  </div>
                </select>
              </td>
              <td style={tdTablet}>
                <button className="botonAzul">Encriptar</button>
              </td>
            </tr>
          </tbody>
        </table>

        <Footer />
      </div>

      <Footer />
    </div>
  );
}

const tdTablet = {
  fontSize: 20,
  marginLeft: "100px",
  paddingLeft: "10px",
  paddingTop: "30px",
};
