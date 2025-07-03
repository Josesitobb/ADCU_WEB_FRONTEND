import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Comparaciones = () => {
  const [comparaciones, setComparaciones] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    const obtenerComparaciones = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/documentos');
        setComparaciones(res.data.reverse());
      } catch (error) {
        console.error('Error al cargar comparaciones:', error);
      }
    };
    obtenerComparaciones();
  }, []);

  const comparacionesFiltradas = comparaciones.filter((doc) =>
    JSON.stringify(doc || {}).toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center text-primary mb-4">📄 Resultados de Comparación de PDFs</h2>

      <div className="row justify-content-center">
        <div className="col-md-8 mb-4">
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="🔍 Buscar por nombre, fecha o campo..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      {comparacionesFiltradas.length === 0 ? (
        <div className="text-center text-muted">No hay resultados para mostrar</div>
      ) : (
        comparacionesFiltradas.map((doc, index) => (
          <div key={index} className="card mb-4 shadow-sm border-0">
            <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
              <span>
                📁 <strong>{doc.archivo_pdf || 'Archivo desconocido'}</strong>
              </span>
              <small>🕒 {new Date(doc.fecha_comparacion).toLocaleString()}</small>
            </div>
            <div className="card-body p-0">
              <table className="table table-hover table-sm mb-0 text-center">
                <thead className="table-light">
                  <tr>
                    <th>Campo</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(doc).map(([campo, valor]) => {
                    if (
                      ["_id", "__v", "archivo_pdf", "fecha_comparacion", "createdAt", "updatedAt"].includes(campo)
                    ) return null;

                    return (
                      <tr key={campo}>
                        <td className="text-capitalize">{campo.replace(/_/g, ' ')}</td>
                        <td>
                          {valor === "✅" && <span className="text-success">✅</span>}
                          {valor === "❌ No encontrado" && <span className="text-danger">❌ No encontrado</span>}
                          {valor === "🔍 Validar visualmente" && <span className="text-warning">🔍 Validar visualmente</span>}
                          {valor === "✅ Subido con éxito" && <span className="text-success">📤 Subido</span>}
                          {valor === "✅ Imágenes detectadas" && <span className="text-success">🖼️ Imágenes detectadas</span>}
                          {valor !== "✅" && valor !== "❌ No encontrado" && valor !== "🔍 Validar visualmente" &&
                            valor !== "✅ Subido con éxito" && valor !== "✅ Imágenes detectadas" && (
                              <span>{valor}</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan="2" className="text-end">
                      <button
                        className="btn btn-outline-danger btn-sm me-3"
                        onClick={async () => {
                          if (window.confirm('¿Seguro que deseas eliminar esta comparación?')) {
                            try {
                              await axios.delete(`http://localhost:3000/api/documentos/${doc._id}`);
                              setComparaciones(prev => prev.filter(d => d._id !== doc._id));
                            } catch (error) {
                              alert('❌ Error al eliminar');
                              console.error(error);
                            }
                          }
                        }}
                      >
                        🗑️ Eliminar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Comparaciones;