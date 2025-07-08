import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { getDocuments, deleteDocument } from '../../../services/documentService';
import DocumentList from '../../../components/DocumentManagement/DocumentList';
import DocumentForm from '../../../components/DocumentManagement/DocumentForm';
import { toast } from 'sonner';


const DocumentManagementPage = () => {
  const [documents, setDocuments] = useState([]);
  const [currentDoc, setCurrentDoc] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Cargar documentos al montar el componente
  useEffect(() => {
    fetchDocuments();
  }, []);

  // Función para obtener los documentos
  const fetchDocuments = async () => {
    setLoading(true);
    try {
      const data = await getDocuments();
      setDocuments(data);
    } catch (error) {
      toast.error('Error al cargar documentos', {
        description: error.response?.data?.message || 'Error del servidor'
      });
    } finally {
      setLoading(false);
    }
  };

  // Manejar creación de nuevo documento
  const handleCreate = () => {
    setCurrentDoc(null);
    setShowModal(true);
  };

  // Manejar edición de documento
  const handleEdit = (document) => {
    setCurrentDoc(document);
    setShowModal(true);
  };

  // Manejar eliminación de documento
  const handleDelete = async (id, userContract) => {
    const confirm = window.confirm('¿Estás seguro de eliminar este documento?');
    if (!confirm) return;

    try {
      await deleteDocument(id, userContract);
      toast.success('Documento eliminado correctamente');
      fetchDocuments(); // Recargar la lista
    } catch (error) {
      toast.error('Error al eliminar documento', {
        description: error.response?.data?.message || 'Error del servidor'
      });
    }
  };

  // Manejar éxito en operaciones
  const handleSuccess = () => {
    setShowModal(false);
    fetchDocuments(); // Recargar la lista después de crear/editar
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Gestión Documental</h2>
        <Button variant="primary" onClick={handleCreate}>
          Nuevo Documento
        </Button>
      </div>

      {loading ? (
        <div className="text-center">
          {/* <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </Spinner> */}
        </div>
      ) : (
        <DocumentList 
          documents={documents} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />
      )}

      <DocumentForm
        show={showModal}
        handleClose={() => setShowModal(false)}
        documentToEdit={currentDoc}
        userContract={currentDoc?.user_contract || ''}
        onSuccess={handleSuccess}
      />
    </div>
  );
};

export default DocumentManagementPage;