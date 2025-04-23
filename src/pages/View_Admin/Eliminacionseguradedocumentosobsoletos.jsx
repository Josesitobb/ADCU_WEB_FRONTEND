import React, { useState } from "react";
import MenuHamburguesa from "../../components/Menuhamburguesa";

export default function Eliminaciionseguradedocumentosobsoletos() {
  // Sample data based on the document
  const [documents, setDocuments] = useState([
    { id: 1, name: "Propuesta Ganadora", type: "Original", process: "Licitación XYZ", retentionPeriod: "20 años" },
    { id: 2, name: "Propuesta No Ganadora A", type: "Original", process: "Licitación XYZ", retentionPeriod: "20 años" },
    { id: 3, name: "Propuesta No Ganadora B", type: "Copia", process: "Licitación XYZ", retentionPeriod: "Puede eliminarse" },
    { id: 4, name: "Proceso Desierto ABC", type: "Original", process: "Concurso ABC", retentionPeriod: "10 años (SECOP) + 5 años (acciones)" },
  ]);

  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const handleDeleteDocument = (id) => {
    setDocuments(documents.filter(doc => doc.id !== id));
  };

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(filterText.toLowerCase()) ||
    doc.process.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <MenuHamburguesa />
      <h1 className="tituloPrincipal">Eliminacion segura de documentos obsoletos</h1>

      <div>
        <label htmlFor="filter" className="filter-containe">Filtrar documentos:</label>
        <input type="text" id="filter" value={filterText} onChange={handleFilterChange} />
      </div>

      <table className='tablaTodos'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Proceso</th>
            <th>Tiempo de Retención</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredDocuments.map(doc => (
            <tr key={doc.id}>
              <td>{doc.name}</td>
              <td>{doc.type}</td>
              <td>{doc.process}</td>
              <td>{doc.retentionPeriod}</td>
              <td>
                {doc.retentionPeriod === "Puede eliminarse" && ( // Example condition for enabling delete
                  <button onClick={() => handleDeleteDocument(doc.id)}>Eliminar</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}