import React, { useState, useEffect } from "react";
import MenuHamburguesa from "../../components/Menuhamburguesa";
import Table from "react-bootstrap/Table";
import Molda_Admin from "../../components/Molda_Admin"; // Importar Molda_Admin
import "../../styles/styles.css";

export default function Seguimiento() {
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
      documento: "Firma Electrónica",
      estado: "Rechazado",
      pdf: "/pdfs/firma_electronica.pdf", 
    },
  ];

  useEffect(() => {
    const filtro = datos.filter((item) =>
      `${item.nombre} ${item.id}`.toLowerCase().includes(busqueda.toLowerCase())
    );
    setResultados(filtro);
  }, [busqueda]);

  const ConfirmarRechazo = () => {
    const Confirmacion = window.confirm("¿Estás seguro de que deseas rechazar?");
    if (Confirmacion) {
      alert("Documento rechazado.");
    }
  };

  const ConfirmarAprobacion = () => {
    const Confirmacion = window.confirm("¿Estás seguro de que deseas aprobar?");
    if (Confirmacion) {
      alert("Documento aprobado.");
    }
  };

  return (
    <div>
      <MenuHamburguesa />
      <div className="d-flex justify-content-center mt-5">
        <div className="p-4 shadow-lg rounded-4" style={{ backgroundColor: "#ffffff", width: "100%", maxWidth: "500px" }}>
          <h5 className="mb-4 text-center" style={{ fontWeight: "bold", color: "#444" }}>Búsqueda</h5>
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
            <th>Documento</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((item) => {
            const estado = item.estado;

            const botonClase = (tipo) => {
              return estado === tipo || estado === "Pendiente" ? "" : "botonDesactivado";
            };

            const colorEstado =
              estado === "Aprobado"
                ? "green"
                : estado === "Rechazado"
                ? "red"
                : "orange";

            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.documento}</td>
                <td style={{ color: colorEstado, fontWeight: "bold" }}>{estado}</td>
                <td>
                  <button className={`botonRojo ${botonClase("Rechazado")}`} onClick={ConfirmarRechazo}>
                    Rechazar
                  </button>
                  <Molda_Admin
                    NombreBoton="Ver PDF"
                    onClick={() => window.open(item.pdf, "_blank")}
                    pdf
                    Links={"/assets/Diagrama_de_clases.pdf"}
                  />
                  <button className={`botonVerde ${botonClase("Aprobado")}`} onClick={ConfirmarAprobacion}>
                    Aprobar
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