import React, { useState, useEffect } from "react";
import MenuHamburguesa from "../../components/Menuhamburguesa";
import Molda_Admin from "../../components/Molda_Admin"; // Importar Molda_Admin
import "../../styles/styles.css";

export default function ConsultaDocumentos() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);

  const documentos = [
    {
      id: 1,
      nombre: "Rodolfo Perez",
      documento: "Informe mensual",
      fecha: "2025-04-10",
      estado: "Aprobado",
      pdf: "/pdfs/informe_mensual.pdf",
    },
    {
      id: 2,
      nombre: "Juan Garzon",
      documento: "Factura Enero",
      fecha: "2025-04-05",
      estado: "Pendiente",
      pdf: "/pdfs/factura_enero.pdf",
    },
    {
      id: 3,
      nombre: "Camila Gomez",
      documento: "Contrato de trabajo",
      fecha: "2025-04-12",
      estado: "Rechazado",
      pdf: "/pdfs/contrato_trabajo.pdf",
    },
  ];

  useEffect(() => {
    const filtro = documentos.filter((item) =>
      `${item.nombre} ${item.documento} ${item.id}`.toLowerCase().includes(busqueda.toLowerCase())
    );
    setResultados(filtro);
  }, [busqueda]);

  const handleVerPdf = (pdf) => {
    window.open(pdf, "_blank");
  };

  return (
    <div>
      <MenuHamburguesa />
      
      <div className="d-flex justify-content-center mt-5">
        <div className="p-4 shadow-lg rounded-4" style={{ backgroundColor: "#ffffff", width: "100%", maxWidth: "500px" }}>
          <h5 className="mb-4 text-center" style={{ fontWeight: "bold", color: "#444" }}>Consulta de Documentos</h5>
          <div className="input-group">
            <input
              id="busqueda"
              type="text"
              placeholder="BUSCAR POR NOMBRE O DOCUMENTO"
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

      {/* Sección para mostrar los documentos con tarjetas */}
      <div className="d-flex flex-wrap justify-content-center mt-4">
        {resultados.map((item) => (
          <div key={item.id} className="card m-3" style={{ width: "18rem", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <div className="card-body">
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text">{item.documento}</p>
              <p className="card-text">Fecha: {item.fecha}</p>
              <p className="card-text" style={{ fontWeight: "bold", color: item.estado === "Aprobado" ? "green" : item.estado === "Rechazado" ? "red" : "orange" }}>
                Estado: {item.estado}
              </p>
              <Molda_Admin
                NombreBoton="Ver PDF"
                onClick={() => handleVerPdf(item.pdf)}
                pdf
                Links={"/assets/Diagrama_de_despliegue.pdf"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}