import React, { useState, useEffect } from "react";
import MenuHamburguesa from "../../components/Menuhamburguesa";
import Molda_Admin from "../../components/Molda_Admin";
import "../../styles/styles.css";

export default function ConsultaDocumentos() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);

  const datos = [
    {
      id: 1,
      nombre: "Rodolfo Perez",
      documento: "Informe mensual",
      estado: "Aprobado",
      pdf: "/pdfs/informe_mensual.pdf",
    },
    {
      id: 2,
      nombre: "Juan Garzon",
      documento: "Factura Enero",
      estado: "Pendiente",
      pdf: "/pdfs/factura_enero.pdf",
    },
    {
      id: 3,
      nombre: "Camila Gomez",
      documento: "Contrato de trabajo",
      estado: "Rechazado",
      pdf: "/pdfs/contrato_trabajo.pdf",
    },
  ];

  useEffect(() => {
    const filtro = datos.filter((item) =>
      `${item.nombre} ${item.documento}`.toLowerCase().includes(busqueda.toLowerCase())
    );
    setResultados(filtro);
  }, [busqueda]);

  const colorEstado = (estado) => {
    return estado === "Aprobado"
      ? "green"
      : estado === "Rechazado"
      ? "red"
      : "orange";
  };

  return (
    <div>
      <MenuHamburguesa />
      {/* Espacio debajo del menú */}
      <div style={{ paddingTop: "100px" }}>
        <div className="d-flex justify-content-center">
          <div
            className="p-4 shadow-lg rounded-4"
            style={{
              backgroundColor: "#ffffff",
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <h5
              className="mb-4 text-center"
              style={{ fontWeight: "bold", color: "#444" }}
            >
              Consulta de Documentos
            </h5>
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
              />
              <button
                className="btn btn-primary"
                style={{
                  borderRadius: "50%",
                  padding: "10px",
                  marginLeft: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="d-flex flex-wrap justify-content-center mt-4">
          {resultados.map((item) => (
            <div
              key={item.id}
              className="card m-3"
              style={{
                width: "18rem",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.documento}</p>
                <p
                  className="card-text"
                  style={{
                    fontWeight: "bold",
                    color: colorEstado(item.estado),
                  }}
                >
                  Estado: {item.estado}
                </p>
                <Molda_Admin
                  NombreBoton="Ver PDF"
                  onClick={() => window.open(item.pdf, "_blank")}
                  pdf
                  Links={"/assets/Diagrama_de_clases.pdf"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}