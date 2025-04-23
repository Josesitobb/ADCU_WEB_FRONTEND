import React, { useState, useEffect } from "react";
import MenuHamburguesa from "../../components/Menuhamburguesa";
import Molda_Admin from "../../components/Molda_Admin"; // Importar Molda_Admin
import "../../styles/styles.css";

export default function ValidarFirma() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);

  const datos = [
    {
      id: 1,
      nombre: "Rodolfo Perez",
      documento: "Informe mensual",
      estado: "Pendiente",
      pdf: "/pdfs/informe_mensual.pdf",
    },
    {
      id: 2,
      nombre: "Juan Garzon",
      documento: "Factura Enero",
      estado: "Firmado",
      pdf: "/pdfs/factura_enero.pdf",
    },
    {
      id: 3,
      nombre: "Camila Gomez",
      documento: "Contrato de trabajo",
      estado: "Pendiente",
      pdf: "/pdfs/contrato_trabajo.pdf",
    },
  ];

  useEffect(() => {
    const filtro = datos.filter((item) =>
      `${item.nombre} ${item.id}`.toLowerCase().includes(busqueda.toLowerCase())
    );
    setResultados(filtro);
  }, [busqueda]);

  const ConfirmarValidacion = (item) => {
    const Confirmacion = window.confirm(`¿Estás seguro de que deseas validar la firma del documento: ${item.documento}?`);
    if (Confirmacion) {
      alert(`Firma validada para el documento: ${item.documento}`);
    }
  };

  const ConfirmarRechazo = (item) => {
    const Confirmacion = window.confirm(`¿Estás seguro de que deseas rechazar la firma del documento: ${item.documento}?`);
    if (Confirmacion) {
      alert(`Firma rechazada para el documento: ${item.documento}`);
    }
  };

  return (
    <div>
      <MenuHamburguesa />
      
      <div className="d-flex justify-content-center mt-5">
        <div className="p-4 shadow-lg rounded-4" style={{ backgroundColor: "#ffffff", width: "100%", maxWidth: "500px" }}>
          <h5 className="mb-4 text-center" style={{ fontWeight: "bold", color: "#444" }}>Búsqueda de Documentos</h5>
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

      {/* Sección para mostrar los documentos con tarjetas */}
      <div className="d-flex flex-wrap justify-content-center mt-4" style={{ marginLeft: "50px" }}>
        {resultados.map((item) => (
          <div key={item.id} className="card m-3" style={{ width: "18rem", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", zIndex: 1 }}>
            <div className="card-body">
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text">{item.documento}</p>
              <p className="card-text" style={{ fontWeight: "bold", color: item.estado === "Firmado" ? "green" : "orange" }}>
                Estado: {item.estado}
              </p>
              <div className="d-flex justify-content-between">
                {item.estado === "Pendiente" && (
                  <>
                    <button
                      className="btn btn-danger"
                      onClick={() => ConfirmarRechazo(item)}
                      style={{ width: "45%" }}
                    >
                      Rechazar
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => ConfirmarValidacion(item)}
                      style={{ width: "45%" }}
                    >
                      Validar Firma
                    </button>
                  </>
                )}
                {item.estado === "Firmado" && (
                  <Molda_Admin
                    NombreBoton="Ver PDF"
                    onClick={() => window.open(item.pdf, "_blank")}
                    pdf
                    Links={"/assets/Diagrama_de_clases.pdf"}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}