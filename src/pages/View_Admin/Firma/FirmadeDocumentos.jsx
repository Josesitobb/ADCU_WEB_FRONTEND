import React, { useState } from "react";
import MenuHamburguesa from "../../../components/Menuhamburguesa";
import "../../../styles/styles.css";

export default function FirmaDocumentos() {
  const [documentos, setDocumentos] = useState([
    {
      id: 1,
      nombre: "Contrato de Servicios",
      fecha: "2025-04-15",
      firmado: false,
      pdf: "/pdfs/contrato_servicios.pdf",
    },
    {
      id: 2,
      nombre: "Acta de Inicio",
      fecha: "2025-04-10",
      firmado: false,
      pdf: "/pdfs/acta_inicio.pdf",
    },
  ]);

  const firmarDocumento = (id) => {
    const confirmar = window.confirm("¿Deseas firmar electrónicamente este documento?");
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
          style={{ backgroundColor: "#ffffff", width: "100%", maxWidth: "900px" }}
        >
          <h5 className="mb-4 text-center" style={{ fontWeight: "bold", color: "#444" }}>
            Firma de Documentos
          </h5>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre del Documento</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {documentos.map((doc) => (
                <tr key={doc.id}>
                  <td>{doc.id}</td>
                  <td>{doc.nombre}</td>
                  <td>{doc.fecha}</td>
                  <td style={{ color: doc.firmado ? "green" : "orange", fontWeight: "bold" }}>
                    {doc.firmado ? "Firmado" : "Pendiente"}
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-primary me-2"
                      onClick={() => window.open(doc.pdf, "_blank")}
                    >
                      Ver PDF
                    </button>
                    <button
                      className="btn btn-success"
                      disabled={doc.firmado}
                      onClick={() => firmarDocumento(doc.id)}
                    >
                      {doc.firmado ? "Firmado" : "Firmar"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}