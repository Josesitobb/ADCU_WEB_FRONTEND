import React from 'react';

const ReportView = ({ report, onClose }) => {
  const datos = report.datos || {};

  return (
    <div className="report-view-modal" style={{
      position: 'fixed', top: 0, left: 0, width: '100%',
      height: '100%', backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div className="modal-content" style={{
        backgroundColor: '#fff', padding: '20px',
        borderRadius: '8px', width: '600px', maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <h2>📝 Reporte Comparativo</h2>
        <p><strong>Tipo:</strong> {report.type}</p>
        <p><strong>Rango:</strong> {report.dataRange}</p>
        <p><strong>Fecha:</strong> {new Date(report.createdAt).toLocaleString()}</p>

        <hr />

        <h3>Firmas</h3>
        <p><strong>Contratista:</strong> {datos.firmas?.contratista}</p>
        <p><strong>Supervisor Acta Inicio:</strong> {datos.firmas?.supervisorInicio}</p>
        <p><strong>Supervisor Otros Docs:</strong> {datos.firmas?.supervisorOtros}</p>
        <p><strong>Observación:</strong> {datos.observaciones?.firma}</p>

        <h3>Fechas</h3>
        <p><strong>Acta Inicio:</strong> {datos.fechas?.actaInicio}</p>
        <p><strong>Certificado:</strong> {datos.fechas?.certificado}</p>
        <p><strong>Obs:</strong> {datos.observaciones?.fechas}</p>

        <h3>Datos Contratista</h3>
        <p><strong>Nombre:</strong> {datos.datosContratista?.nombre}</p>
        <p><strong>Cédula:</strong> {datos.datosContratista?.identificacion}</p>
        <p><strong>Contrato:</strong> {datos.datosContratista?.contrato}</p>
        <p><strong>Obs:</strong> {datos.observaciones?.identificacion}</p>

        <h3>Valores</h3>
        <p><strong>Total Contrato:</strong> ${datos.valores?.totalContrato?.toLocaleString()}</p>
        <p><strong>Primer Pago:</strong> ${datos.valores?.primerPago?.toLocaleString()}</p>

        <button onClick={onClose} style={{
          marginTop: '20px',
          backgroundColor: '#2f5496',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px'
        }}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ReportView;
