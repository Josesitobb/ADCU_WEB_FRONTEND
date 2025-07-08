import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReportModule = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReports = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/v1/reports');
      setReports(res.data.reports || []);
    } catch (error) {
      console.error('Error al obtener reportes:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadExcel = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3001/api/v1/reports/excel/${id}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `Reporte_${id}.xlsx`);
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error('Error al descargar Excel:', err);
    }
  };

  const deleteReport = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este reporte?')) return;
    try {
      await axios.delete(`http://localhost:3001/api/v1/reports/${id}`);
      fetchReports();
    } catch (err) {
      console.error('Error al eliminar:', err);
    }
  };

  const generateReport = async () => {
    try {
      const res = await axios.post('http://localhost:3001/api/v1/reports/generate');
      alert('Reporte generado exitosamente');
      fetchReports();
    } catch (err) {
      console.error('Error al generar reporte:', err);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  if (loading) return <p>Cargando reportes...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Módulo de Reportes</h2>
      <button onClick={generateReport}>📄 Generar Nuevo Reporte</button>

      <table border="1" cellPadding="8" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Tipo</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Descargar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r, i) => (
            <tr key={r._id}>
              <td>{i + 1}</td>
              <td>{r.type}</td>
              <td>{new Date(r.createdAt).toLocaleString()}</td>
              <td>{r.estado || 'Desconocido'}</td>
              <td>
                <button onClick={() => downloadExcel(r._id)}>⬇️</button>
              </td>
              <td>
                <button onClick={() => deleteReport(r._id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportModule;
