import React, { useState } from 'react';
import ReportForm from '../components/ReportForm';
import ReportList from '../components/ReportList';

const ReportsPage = () => {
  const [refreshList, setRefreshList] = useState(false);

  const handleReportCreated = () => {
    setRefreshList(prev => !prev); // Fuerza que ReportList se reinicialice
  };

  return (
    <div className="reports-page" style={{ padding: '30px' }}>
      <h1>📊 Módulo de Reportes Comparativos</h1>

      <div className="report-container" style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
        <div style={{ flex: '1' }}>
          <ReportForm onReportCreated={handleReportCreated} />
        </div>

        <div style={{ flex: '2' }}>
          <ReportList key={refreshList} />
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
