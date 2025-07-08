import React, { useState, useEffect } from "react";
import { Button, Form, Modal, Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import { toast } from "sonner";

const DocumentForm = ({ 
  show, 
  handleClose, 
  documentToEdit,
  userContract,
  onSuccess 
}) => {
  // Estados del componente
  const [formData, setFormData] = useState({
    description: "",
    state: "Activo",
    retention_time: "20 años",
    version: 1,
    ip: "",
    user_contract: userContract || "",
  });

  const [files, setFiles] = useState({
    filing_letter: null,
    certificate_of_compliance: null,
    signed_certificate_of_compliance: null,
    activity_report: null,
    tax_quality_certificate: null,
    social_security: null,
    rut: null,
    rit: null,
    Trainings: null,
    initiation_record: null,
    account_certification: null,
  });

  const [loading, setLoading] = useState(false);
  const [contractors, setContractors] = useState([]);

  // Efecto para cargar datos iniciales
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener IP automáticamente
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();
        setFormData(prev => ({ ...prev, ip: ipData.ip }));

        // Obtener lista de contratistas
        const contractorsRes = await axios.get(
          "http://localhost:3000/api/Users",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setContractors(contractorsRes.data.data || []);

        // Si estamos editando, cargar los datos existentes
        if (documentToEdit) {
          setFormData({
            description: documentToEdit.description,
            state: documentToEdit.state,
            retention_time: documentToEdit.retention_time,
            version: documentToEdit.version,
            ip: documentToEdit.ip,
            user_contract: documentToEdit.user_contract
          });
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [documentToEdit]);

  // Manejadores de cambios
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  // Función para crear documento
  const handleCreate = async () => {
    setLoading(true);
    const data = new FormData();

    // Agregar campos normales
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        data.append(key, value);
      }
    });

    // Agregar archivos
    Object.entries(files).forEach(([key, file]) => {
      if (file) data.append(key, file);
    });

    try {
      await axios.post(
        `http://localhost:3000/api/Documents/${formData.user_contract}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Documento creado exitosamente");
      onSuccess();
      handleClose();
    } catch (error) {
      toast.error("Error al crear documento", {
        description: error.response?.data?.message || "Error desconocido",
      });
    } finally {
      setLoading(false);
    }
  };

  // Función para actualizar documento
  const handleUpdate = async (documentId) => {
    setLoading(true);
    const data = new FormData();

    // Agregar campos modificados
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== undefined) data.append(key, value);
    });

    // Agregar archivos nuevos (opcional en actualización)
    Object.entries(files).forEach(([key, file]) => {
      if (file) data.append(key, file);
    });

    try {
      await axios.put(
        `http://localhost:3000/api/Documents/${documentId}/${formData.user_contract}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Documento actualizado");
      onSuccess();
      handleClose();
    } catch (error) {
      toast.error("Error al actualizar documento", {
        description: error.response?.data?.message || "Error desconocido",
      });
    } finally {
      setLoading(false);
    }
  };

  // Función para eliminar documento
  const handleDelete = async (documentId, userContractId) => {
    if (!window.confirm("¿Estás seguro de eliminar este documento permanentemente?")) return;

    try {
      await axios.delete(
        `http://localhost:3000/api/Documents/${documentId}/${userContractId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Documento eliminado");
      onSuccess();
      handleClose();
    } catch (error) {
      toast.error("Error al eliminar documento", {
        description: error.response?.data?.message || "Error desconocido",
      });
    }
  };

  // Manejador de submit unificado
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (documentToEdit) {
      await handleUpdate(documentToEdit._id);
    } else {
      await handleCreate();
    }
  };

  // Campos de archivo para renderizar dinámicamente
  const fileFields = [
    { name: "filing_letter", label: "Carta de Radicación" },
    { name: "certificate_of_compliance", label: "Certificado de Cumplimiento" },
    { name: "signed_certificate_of_compliance", label: "Certificado de Cumplimiento Firmado" },
    { name: "activity_report", label: "Reporte de Actividad" },
    { name: "tax_quality_certificate", label: "Certificado de Calidad Tributaria" },
    { name: "social_security", label: "Seguridad Social" },
    { name: "rut", label: "RUT" },
    { name: "rit", label: "RIT" },
    { name: "Trainings", label: "Capacitaciones" },
    { name: "initiation_record", label: "Acta de Inicio" },
    { name: "account_certification", label: "Certificación Bancaria" },
  ];

  return (
   <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          {documentToEdit ? "Editar Documento" : "Nuevo Documento"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="user_contract">
                <Form.Label>Contratista</Form.Label>
                <Form.Select
                  name="user_contract"
                  value={formData.user_contract}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccionar contratista</option>
                  {contractors.map((contractor) => (
                    <option key={contractor._id} value={contractor._id}>
                      {contractor.name} ({contractor._id})
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="state">
                <Form.Label>Estado</Form.Label>
                <Form.Select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="retention_time">
                <Form.Label>Tiempo de Retención</Form.Label>
                <Form.Control
                  type="text"
                  name="retention_time"
                  value={formData.retention_time}
                  onChange={handleChange}
                  placeholder="20 años"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="ip">
                <Form.Label>Dirección IP</Form.Label>
                <Form.Control
                  type="text"
                  name="ip"
                  value={formData.ip}
                  onChange={handleChange}
                  readOnly
                />
              </Form.Group>
            </Col>
          </Row>

          <h5 className="mt-4 mb-3">Documentos Adjuntos</h5>
          <Row>
            {fileFields.map((field) => (
              <Col md={6} key={field.name} className="mb-3">
                <Form.Group controlId={field.name}>
                  <Form.Label>{field.label}</Form.Label>
                  <Form.Control
                    type="file"
                    name={field.name}
                    onChange={handleFileChange}
                    accept=".pdf"
                  />
                </Form.Group>
              </Col>
            ))}
          </Row>

          <div className="d-flex justify-content-end mt-4">
            {documentToEdit && (
              <Button
                variant="danger"
                onClick={handleDelete}
                className="me-2"
                disabled={loading}
              >
                Eliminar
              </Button>
            )}
            <Button 
              variant="primary" 
              type="submit" 
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" animation="border" className="me-2"/>
                  {documentToEdit ? "Actualizando..." : "Creando..."}
                </>
              ) : (
                documentToEdit ? "Actualizar Documento" : "Crear Documento"
              )}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default DocumentForm;