import React from 'react';
import { downloadReport } from '../../../../api/reportService'; // Ruta corregida
import '../../../../styles/ReportModule.css'; // Ruta corregida

const ReportTable = ({ reports }) => {
  // Función para descargar reportes individuales
  const handleDownload = async (id) => {
    try {
      const response = await downloadReport(id);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `reporte_${id}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      alert('Error al descargar: ' + error.message);
    }
  };

  return (
    <div className="report-table">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.name}</td>
              <td>{report.date}</td>
              <td>
                <button 
                  className="download-btn"
                  onClick={() => handleDownload(report.id)}
                >
                  Descargar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;