import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container, Button } from "react-bootstrap";

export default function HistorialReportes() {
  const [descargas, setDescargas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDescargas = async () => {
      try {
        const res = await axios.get("/api/v1/reports/download-history");
        setDescargas(res.data);
      } catch (error) {
        console.error("Error al obtener historial:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDescargas();
  }, []);

  const descargarHistorial = async () => {
    try {
      const res = await axios.get("/api/v1/reports/download-excel", {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "historial_reportes.xlsx");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error al descargar el Excel del historial:", error);
    }
  };

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>📊 Historial de Reportes Comparativos</h2>
        <Button variant="success" onClick={descargarHistorial}>
          📥 Descargar Historial Excel
        </Button>
      </div>

      {loading ? (
        <p>Cargando historial...</p>
      ) : descargas.length === 0 ? (
        <p>No hay registros aún.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Usuario</th>
              <th>Fecha y Hora de Descarga</th>
            </tr>
          </thead>
          <tbody>
            {descargas.map((log, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{log.user}</td>
                <td>{new Date(log.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
