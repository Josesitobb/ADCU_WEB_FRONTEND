import React, { useEffect, useState } from 'react';
import { fetchReports, deleteReport } from '../../../api/reportService';

const ReportList = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReports = async () => {
      try {
        const data = await fetchReports(); // Ahora debe venir de /history
        setReports(data);
      } catch (error) {
        console.error('Error al cargar reportes:', error);
      } finally {
        setLoading(false);
      }
    };
    loadReports();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('¿Eliminar este reporte?')) {
      try {
        await deleteReport(id);
        setReports(reports.filter(r => r.id !== id));
      } catch (err) {
        console.error('Error al eliminar:', err);
        alert('❌ No se pudo eliminar el reporte');
      }
    }
  };

  const handleDownload = (id) => {
    window.open(`${process.env.REACT_APP_API_URL}/reports/excel/${id}`, '_blank');
  };

  return (
    <div className="report-list">
      <h2>📄 Historial de Reportes Comparativos</h2>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Rango</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(report => (
              <tr key={report.id}>
                <td>{report.type}</td>
                <td>{report.dataRange || 'N/A'}</td>
                <td>{new Date(report.createdAt).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => handleDownload(report.id)}>⬇️ Descargar</button>
                  <button onClick={() => handleDelete(report.id)}>🗑️ Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReportList;
