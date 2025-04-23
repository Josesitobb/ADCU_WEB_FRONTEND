import React from "react";
import { useState } from "react";
import MenuHamburguesa from "../../../components/Menuhamburguesa";
import Footer from "../../../components/Footer";
  import "../../../styles/styles.css";
import { Link } from "react-router-dom";

export default function ControlDeAceso() {
  const [SolicitarAcceso, SetAcceso] = useState(false);
  const CambiarAcceso = () => {
    alert("Se esta solicitando el archivo espere un momento");
    SetAcceso(!SolicitarAcceso);
  };
  return (
    <div>
      <MenuHamburguesa />
      <h1 className="tituloPrincipal">Edición colaborativa</h1>

      <div className="d-flex flex-column align-items-center gap-2">
        <label htmlFor="documentSelect" className="fw-bold">
          Seleccione un documento
        </label>
        <select id="documentSelect" className="form-select w-50">
          <option value="">-- Seleccionar --</option>
          <option value="documento1.pdf" data-user="Juan Pérez">
            📄 Reporte_2025.pdf
          </option>
          <option value="documento2.docx" data-user="María Gómez">
            📝 Informe_Técnico.docx
          </option>
          <option value="documento3.xlsx" data-user="Carlos López">
            📊 Datos_Financieros.xlsx
          </option>
        </select>
      </div>

      <div
        className="tituloPrincipal"
        id="accessPanel"
        style={{
          background: "#fff",
          width: "500px",
          borderRadius: "50px",
          marginLeft: "39%",
          marginTop: "20px",
        }}
      >
        <h2>Informe_final.pdf</h2>

        <div style={{ fontSize: "20px", marginTop: "25px" }}>
          <div>
            {SolicitarAcceso ? (
              <p
                style={{
                  backgroundColor: "#3deb74",
                  width: "150px",
                  marginLeft: "179px",
                }}
              >
                Disponible
              </p>
            ) : (
              <p
                style={{
                  backgroundColor: "#ebe33d",
                  width: "300px",
                  marginLeft: "100px",
                }}
              >
                Ocupado por: Juan Pérez
              </p>
            )}
          </div>

          <p style={{ fontSize: "19px", marginTop: "25px" }} id="statusText">
            Este documento está siendo editado por otro usuario en este momento.
          </p>
          <button class="botonAzul" onClick={CambiarAcceso}>
            Solicitar acceso
          </button>
          <br />
          <br />
          {SolicitarAcceso && (
            <Link
              to={"/EdicionColaborativo"}
              className="botonAzul"
              style={{ marginLeft: "100px", fontSize: "17px" }}
            >
              Haz click para comenzar a editar
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
