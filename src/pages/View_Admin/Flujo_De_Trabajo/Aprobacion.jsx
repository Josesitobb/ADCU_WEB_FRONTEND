import React, { useState, useEffect } from "react";
import MenuHamburguesa from "../../../components/Menuhamburguesa";
import Footer from "../../../components/Footer";
import Molda_Admin from "../../../components/Molda_Admin";
import "../../../styles/styles.css";

export default function Aprobacion() {
  const [busqueda, setBusqueda] = useState("");
  const [datosAMostrar, setDatosAMostrar] = useState([
    { id: "01", nombre: "Rodolfo Perez", documento: "Ingreso de documentos", estado: "Pendiente" },
    { id: "02", nombre: "Juan Garzon", documento: "Informe mensual", estado: "Pendiente" },
    { id: "03", nombre: "Laura Gómez", documento: "Factura enero", estado: "Pendiente" },
  ]);

  const [resultados, setResultados] = useState([]);

  const ConfirmarRechazo = (id) => {
    const confirmacion = window.confirm("¿Estás seguro de que deseas rechazar?");
    if (confirmacion) {
      const nuevosDatos = datosAMostrar.map((item) =>
        item.id === id ? { ...item, estado: "Rechazado" } : item
      );
      setDatosAMostrar(nuevosDatos);
      alert("Documento rechazado.");
    }
  };

  const ConfirmarAprobacion = (id, nombre) => {
    const confirmacion = window.confirm(`¿Deseas aprobar el documento de ${nombre}?`);
    if (confirmacion) {
      const nuevosDatos = datosAMostrar.map((item) =>
        item.id === id ? { ...item, estado: "Aprobado" } : item
      );
      setDatosAMostrar(nuevosDatos);
      alert(`Documento de ${nombre} aprobado.`);
    }
  };

  useEffect(() => {
    const normalizar = (texto) =>
      texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

    const termino = normalizar(busqueda);

    if (termino === "") {
      setResultados([]);
    } else {
      const filtro = datosAMostrar.filter((item) =>
        normalizar(item.nombre).includes(termino) ||
        normalizar(item.documento).includes(termino) ||
        item.id.includes(termino)
      );
      setResultados(filtro);
    }
  }, [busqueda, datosAMostrar]);

  const mostrarDatos = resultados.length > 0 ? resultados : datosAMostrar;

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

      <div className="d-flex justify-content-center mt-5">
        <table striped bordered hover className="tablaTodos">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Documento</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {mostrarDatos.length > 0 ? (
              mostrarDatos.map((item) => {
                const color =
                  item.estado === "Aprobado"
                    ? "green"
                    : item.estado === "Rechazado"
                    ? "red"
                    : "orange";

                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nombre}</td>
                    <td>
                      <Molda_Admin
                        NombreBoton="Visualizar"
                        Icono={<i className="bi bi-search"></i>}
                        pdf
                        Links={"/assets/Administración_de_cuentas_de_cobro.pdf"}
                      />
                    </td>
                    <td style={{ fontWeight: "bold", color }}>{item.estado}</td>
                    <td>
                      <button className="botonRojo" onClick={() => ConfirmarRechazo(item.id)}>
                        Rechazar
                      </button>
                      <button className="botonAzul" onClick={() => ConfirmarAprobacion(item.id, item.nombre)}>
                        Aprobar
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="text-center">No se encontraron resultados.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}