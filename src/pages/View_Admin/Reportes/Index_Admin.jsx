import React, { useEffect, useState } from 'react';
import ReportTable from './ReportTable';
import DownloadButton from './DownloadButton';
import { getReports } from '../../../../api/reportService'; // Asegúrate que esta ruta sea correcta
import '../../../../styles/ReportModule.css';

const Index_Admin = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await getReports();
        setReports(response.data); // Asume que tu API devuelve { data: [...] }
        setLoading(false);
      } catch (err) {
        setError('Error al cargar reportes');
        setLoading(false);
        console.error('Error fetching reports:', err);
      }
    };

    fetchReports();
  }, []); // El array vacío asegura que se ejecute solo al montar el componente

  if (loading) {
    return <div className="loading">Cargando reportes...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="reports-container">
      <h1 className="reports-title">Módulo de Reportes</h1>
      
      <div className="reports-section">
        <h2>Reportes Disponibles</h2>
        <ReportTable reports={reports} />
      </div>
      
      <div className="actions-section">
        <DownloadButton />
      </div>
    </div>
  );
};

export default Index_Admin;