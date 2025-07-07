import React, { useState } from 'react';
import { createReport } from '../api/ReportService';

const ReportForm = ({ onReportCreated }) => {
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await createReport(); // Llama a la ruta que crea y guarda el reporte
      alert('✅ Reporte creado con éxito\n🆔 ID: ' + response.reportId);
      if (onReportCreated) onReportCreated(response);
    } catch (error) {
      console.error('Error al generar reporte:', error);
      alert('❌ Error al generar el reporte: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="report-generator" style={{
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#fdfdfd',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <h2>📝 Generar Reporte Comparativo</h2>
      <p>Haz clic para crear un nuevo reporte de comparación con validaciones automáticas.</p>

      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{
          padding: '10px 20px',
          backgroundColor: loading ? '#ccc' : '#2f5496',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontWeight: 'bold'
        }}
      >
        {loading ? 'Generando...' : '📄 Generar Reporte'}
      </button>
    </div>
  );
};

export default ReportForm;

