import React, { useState } from 'react';
import { downloadComparedReport } from '../../../../api/reportService'; // Ruta corregida
import '../../../../styles/ReportModule.css'; // Ruta corregida

const DownloadButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = async () => {
    try {
      const response = await downloadComparedReport();
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'reporte_comparado.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      alert('Error al descargar reporte comparado: ' + error.message);
    }
    setShowModal(false);
  };

  return (
    <div className="download-compare">
      <button 
        className="compare-btn"
        onClick={() => setShowModal(true)}
      >
        Descargar Reporte Comparado
      </button>
      
      {showModal && (
        <div className="modal">
          <p>¿Descargar reporte comparado?</p>
          <button onClick={handleDownload}>Confirmar</button>
        </div>
      )}
    </div>
  );
};

export default DownloadButton;