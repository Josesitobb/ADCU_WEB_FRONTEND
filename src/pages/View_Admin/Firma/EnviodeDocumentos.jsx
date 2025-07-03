import React, { useState } from "react";
import MenuHamburguesa from "../../../components/Menuhamburguesa";
import Molda_Admin from "../../../components/Molda_Admin"; // Importar Molda_Admin
import "../../../styles/styles.css";

export default function FirmarDocumento() {
  const [busqueda, setBusqueda] = useState("");
  const [documentos, setDocumentos] = useState([
    {
      id: 1,
      nombre: "Informe Final",
      fecha: "2025-04-15",
      firmado: false,
      pdf: "/pdfs/informe_final.pdf",
    },
    {
      id: 2,
      nombre: "Factura de Mayo",
      fecha: "2025-04-20",
      firmado: false,
      pdf: "/pdfs/factura_mayo.pdf",
    },
  ]);

  const datosFiltrados = documentos.filter((doc) =>
    `${doc.nombre} ${doc.id}`.toLowerCase().includes(busqueda.toLowerCase())
  );

  const firmarDocumento = (id) => {
    const confirmar = window.confirm("¿Deseas firmar este documento?");
    if (!confirmar) return;

    const nuevosDocs = documentos.map((doc) =>
      doc.id === id ? { ...doc, firmado: true } : doc
    );
    setDocumentos(nuevosDocs);
    alert("✅ Documento firmado con éxito.");
  };

  return (
    <div>
      <MenuHamburguesa />
      <div className="d-flex justify-content-center mt-5">
        <div
          className="p-4 shadow-lg rounded-4"
          style={{ backgroundColor: "#ffffff", width: "100%", maxWidth: "500px" }}
        >
          <h5 className="mb-4 text-center" style={{ fontWeight: "bold", color: "#444" }}>
            Búsqueda de Documentos
          </h5>
          <div className="input-group">
            <input
              id="busqueda"
              type="text"
              placeholder="BUSCAR POR NOMBRE O NUMERO"
              className="form-control"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{
                borderRadius: "25px",
                padding: "10px 20px",
                fontSize: "16px",
                borderColor: "#ccc",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#007bff")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
            <button
              className="btn btn-primary"
              style={{
                borderRadius: "50%",
                padding: "10px",
                marginLeft: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => {}}
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>

      <table className="tablaTodos" style={{ marginTop: "100px" }}>
        <thead className="encabezadoTabla">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datosFiltrados.map((doc) => {
            const estado = doc.firmado ? "Firmado" : "Pendiente";
            const colorEstado = doc.firmado ? "green" : "orange";

            return (
              <tr key={doc.id}>
                <td>{doc.id}</td>
                <td>{doc.nombre}</td>
                <td>{doc.fecha}</td>
                <td style={{ color: colorEstado, fontWeight: "bold" }}>{estado}</td>
                <td>
                  <button
                    className="botonRojo"
                    onClick={() => window.open(doc.pdf, "_blank")}
                  >
                    Ver PDF
                  </button>
                  <button
                    className="botonVerde"
                    disabled={doc.firmado}
                    onClick={() => firmarDocumento(doc.id)}
                  >
                    {doc.firmado ? "Firmado" : "Firmar"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}