import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Pdf_Admin from "../components/Pdf_Admin";

export default function Molda_Admin({
  NombreBoton,
  Icono,
  campos = [],
  pdf,
  Links,
  EstilosBoton,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   console.log("Campos recibidos en Molda_Admin:", campos);
  return (
    <>
      <Button onClick={handleShow} className={EstilosBoton}>
        {Icono}
        {NombreBoton}
      </Button>

      <Modal show={show} onHide={handleClose} size={pdf && "xl"}>
        <Modal.Header closeButton>
          <Modal.Title> {NombreBoton}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {campos.map((campo, index) =>
              campo.type !== "checkbox" && campo.type !== "select" ? (
                <Form.Group key={index} className="mb-3" controlId={index + 1}>
                  <Form.Label>{campo.label}</Form.Label>
                  <Form.Control
                    type={campo.type}
                    placeholder={campo.placeholder}
                  />
                </Form.Group>
              ) : null
            )}

            {campos.some((campo) => campo.type === "checkbox") && (
              <h6>Acciones</h6>
            )}
            {/* CAMPOS CHECKBOX */}
            {campos.map((campo, index) =>
              campo.type === "checkbox" ? (
                <Form.Check
                  key={index}
                  inline
                  label={campo.label}
                  type="checkbox"
                  className="checkbox-grande"
                />
              ) : null
            )}

            {/* CAMPOS SELECT */}
            {campos.map((campo, index) =>
              campo.type === "select" ? (
                <Form.Group
                  key={index}
                  className="mb-3"
                  controlId={`select-${index}`}
                >
                  <Form.Label>{campo.label}</Form.Label>
                  <Form.Select aria-label={campo.label}>
                    <option disabled selected>
                      -- Seleccione --
                    </option>
                    {campo.options?.map((opcion, i) => (
                      <option key={i} value={opcion}>
                        {opcion}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              ) : null
            )}
          </Form>




          {pdf &&   (
            // <Pdf_Admin Link="/assets/Administración_de_cuentas_de_cobro.pdf" />
            <Pdf_Admin Link={Links} />
          )}



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
