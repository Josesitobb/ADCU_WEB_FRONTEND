import React, { useState, useEffect } from "react";
import MenuHamburguesa from "../../components/Menuhamburguesa";

// --- Simulación de datos ---
// En una aplicación real, esto vendría de una API
const mockDocumentos = [
  { id: 1, nombre: "Contrato_Trabajo_Juan_Perez.pdf", tipo: "pdf", url: "/docs/contrato1.pdf", estado: "Pendiente" },
  { id: 2, nombre: "Informe_Anual_Ventas_2024.xlsx", tipo: "xlsx", url: "/docs/informe1.xlsx", estado: "Aprobado" },
  { id: 3, nombre: "Acta_Reunion_Comite_Directivo_Marzo.docx", tipo: "docx", url: "/docs/acta1.docx", estado: "Pendiente" },
  { id: 4, nombre: "Presentacion_Resultados_Q1.pptx", tipo: "pptx", url: "/docs/presentacion1.pptx", estado: "Rechazado" },
  { id: 5, nombre: "Factura_Proveedor_XYZ_Abril.pdf", tipo: "pdf", url: "/docs/factura1.pdf", estado: "Pendiente" },
];

// Simulación de fetch (reemplazar con llamada real a tu backend/API)
const fetchDocumentosDesdeAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDocumentos);
    }, 1000); // Simula 1 segundo de carga
  });
};
// --- Fin Simulación ---


export default function Accesoremotoadocumentos() {
  const [filtro, setFiltro] = useState("");
  const [documentos, setDocumentos] = useState([]); // Empezar vacío
  const [documentoSeleccionado, setDocumentoSeleccionado] = useState(null); // Para guardar el doc a revisar
  const [cargando, setCargando] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // useEffect para cargar los documentos al montar el componente
  useEffect(() => {
    setCargando(true);
    setError(null);
    fetchDocumentosDesdeAPI()
      .then(data => {
        setDocumentos(data);
        setCargando(false);
      })
      .catch(err => {
        console.error("Error al cargar documentos:", err);
        setError("No se pudieron cargar los documentos. Intenta más tarde.");
        setCargando(false);
      });
  }, []); // El array vacío [] asegura que se ejecute solo una vez al montar

  // Filtrar documentos basado en el estado 'filtro'
  const documentosFiltrados = documentos.filter((doc) =>
    doc.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  // Función para manejar la selección de un documento
  const handleSeleccionarDocumento = (doc) => {
    console.log("Documento seleccionado:", doc);
    setDocumentoSeleccionado(doc);
    // Aquí podrías añadir lógica para cargar el contenido/preview si es necesario
  };

  return (
    <div>
      <MenuHamburguesa />

      {/* Contenedor principal para centrar el contenido y limitar el ancho */}
      {/* Agregamos 'container', 'mx-auto' y 'px-4' */}
      <div className="container mx-auto px-4">
        {/* Contenedor con layout flex (lista a la izquierda, visor a la derecha) */}
        {/* Ajusta altura si MenuHamburguesa tiene altura fija */}
        <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)]">

          {/* Panel Izquierdo: Lista de Documentos */}
          {/* Aseguramos que el panel tome el ancho completo en pantallas pequeñas */}
          <div className="w-full md:w-1/3 lg:w-1/4 p-4 border-r border-gray-300 bg-gray-50 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Documentos</h2>
            <input
              type="text"
              placeholder="Buscar documento..."
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              className="border p-2 rounded mb-4 w-full"
            />

            {cargando && <p>Cargando documentos...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!cargando && !error && (
              <ul className="space-y-2">
                {documentosFiltrados.length > 0 ? (
                  documentosFiltrados.map((doc) => (
                    <li
                      key={doc.id}
                      onClick={() => handleSeleccionarDocumento(doc)}
                      className={`p-2 rounded cursor-pointer hover:bg-blue-100 ${
                        documentoSeleccionado?.id === doc.id ? 'bg-blue-200 font-semibold' : ''
                      }`}
                    >
                      {doc.nombre} <span className="text-xs text-gray-500">({doc.estado})</span>
                    </li>
                  ))
                ) : (
                  <li>No se encontraron documentos</li>
                )}
              </ul>
            )}
          </div>

          {/* Panel Derecho: Visor/Área de Revisión */}
          <div className="w-full md:w-2/3 lg:w-3/4 p-6">
            <h2 className="text-xl font-semibold mb-4">Revisión de Documento</h2>
            {documentoSeleccionado ? (
              <div>
                <h3 className="text-lg font-medium mb-2">{documentoSeleccionado.nombre}</h3>
                <p className="mb-1"><span className="font-semibold">ID:</span> {documentoSeleccionado.id}</p>
                <p className="mb-1"><span className="font-semibold">Tipo:</span> {documentoSeleccionado.tipo}</p>
                <p className="mb-4"><span className="font-semibold">Estado Actual:</span> {documentoSeleccionado.estado}</p>

                {/* --- Área del Visor --- */}
                <div className="border rounded p-4 bg-gray-100 min-h-[400px] mb-4">
                  {/* AQUI VA EL VISOR REAL */}
                  <p className="text-gray-500">
                    (Aquí se mostraría el contenido o preview del documento '{documentoSeleccionado.nombre}')
                  </p>
                  {/* Ejemplo con un iframe (si la URL es accesible y el navegador lo permite): */}
                  {/* <iframe src={documentoSeleccionado.url} width="100%" height="500px" title={documentoSeleccionado.nombre}></iframe> */}
                  {/* Para PDFs podrías usar react-pdf: https://github.com/wojtekmaj/react-pdf */}
                  {/* Para otros tipos, podrías necesitar APIs de conversión o visores específicos */}

                </div>
                {/* --- Fin Área del Visor --- */}


                {/* --- Acciones de Revisión --- */}
                <div className="flex space-x-4">
                   <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                     Aprobar
                   </button>
                   <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                     Rechazar
                   </button>
                   <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                     Comentar
                   </button>
                </div>
                 {/* --- Fin Acciones de Revisión --- */}

              </div>
            ) : (
              <p className="text-gray-500">Selecciona un documento de la lista para revisarlo.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}