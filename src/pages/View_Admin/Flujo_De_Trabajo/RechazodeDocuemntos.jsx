import React, { useState, useEffect } from "react";
import MenuHamburguesa from "../../../components/Menuhamburguesa";
import { FaCheckCircle, FaTimesCircle, FaBell, FaEdit, FaTrashAlt } from 'react-icons/fa'; // Iconos para representar los estados
import "../../../styles/styles.css";

export default function Notificaciones() {
  const [busqueda, setBusqueda] = useState("");
  const [notificacionesFiltradas, setNotificacionesFiltradas] = useState([]);
  const [notificaciones, setNotificaciones] = useState([
    {
      id: 1,
      nombre: "Rodolfo Pérez",
      mensaje: "Tu factura de Enero ha sido aprobada.",
      estado: "Aprobado",
      fecha: "2025-04-22",
    },
    {
      id: 2,
      nombre: "Camila Gómez",
      mensaje: "Tu informe de Marzo fue rechazado.",
      estado: "Rechazado",
      fecha: "2025-04-20",
    },
    {
      id: 3,
      nombre: "Laura Torres",
      mensaje: "Tu solicitud está pendiente de revisión.",
      estado: "Pendiente",
      fecha: "2025-04-18",
    },
  ]);

  useEffect(() => {
    const filtradas = notificaciones.filter((n) =>
      `${n.nombre} ${n.mensaje}`.toLowerCase().includes(busqueda.toLowerCase())
    );
    setNotificacionesFiltradas(filtradas);
  }, [busqueda, notificaciones]);

  const colorEstado = (estado) => {
    switch (estado) {
      case "Aprobado":
        return "#28a745"; // Verde más claro
      case "Rechazado":
        return "#dc3545"; // Rojo brillante
      default:
        return "#ffc107"; // Amarillo suave
    }
  };

  const iconoEstado = (estado) => {
    switch (estado) {
      case "Aprobado":
        return <FaCheckCircle color="#28a745" />;
      case "Rechazado":
        return <FaTimesCircle color="#dc3545" />;
      default:
        return <FaBell color="#ffc107" />;
    }
  };

  const handleRechazar = (id) => {
    const nuevaNotificacion = notificaciones.map((notif) =>
      notif.id === id ? { ...notif, estado: "Rechazado" } : notif
    );
    setNotificaciones(nuevaNotificacion);
  };

  const handleModificar = (id) => {
    const nuevaNotificacion = notificaciones.map((notif) =>
      notif.id === id ? { ...notif, mensaje: "Mensaje modificado" } : notif
    );
    setNotificaciones(nuevaNotificacion);
  };

  return (
    <div>
      <MenuHamburguesa />
      <div className="d-flex justify-content-center mt-5">
        <div className="p-4 shadow-lg rounded-4 bg-white" style={{ width: "100%", maxWidth: "600px" }}>
          <h5 className="mb-4 text-center" style={{ fontWeight: "bold", color: "#444" }}>Notificaciones</h5>
          <div className="input-group mb-4">
            <input
              type="text"
              placeholder="Buscar por nombre o mensaje"
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
              }}
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Contenedor centrado de las notificaciones */}
      <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
        <div className="w-100" style={{ maxWidth: "600px" }}>
          {notificacionesFiltradas.map((notif) => (
            <div
              key={notif.id}
              className="shadow-sm p-4 mb-3 bg-light rounded d-flex justify-content-between align-items-center"
              style={{
                borderLeft: `5px solid ${colorEstado(notif.estado)}`,
                backgroundColor: "#ffffff",
                width: "100%",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Sombra más suave
                transition: "all 0.3s ease", // Transición suave al pasar el ratón
              }}
            >
              <div className="d-flex flex-column" style={{ flex: 1 }}>
                <strong className="text-dark">{notif.nombre}</strong>
                <p className="text-muted">{notif.mensaje}</p>
                <small className="text-muted">Fecha: {new Date(notif.fecha).toLocaleDateString()}</small>
              </div>
              <div className="d-flex align-items-center">
                <div
                  style={{
                    color: colorEstado(notif.estado),
                    fontWeight: "bold",
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {iconoEstado(notif.estado)} <span className="ms-2">{notif.estado}</span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                {notif.estado !== "Rechazado" && (
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => handleRechazar(notif.id)}
                    style={{
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    <FaTimesCircle /> Rechazar
                  </button>
                )}
                <button
                  className="btn btn-warning"
                  onClick={() => handleModificar(notif.id)}
                  style={{
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <FaEdit /> Modificar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}