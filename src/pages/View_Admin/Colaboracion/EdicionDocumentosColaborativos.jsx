import React from "react";
import "../../../styles/styles.css";
import MenuHamburguesa from "../../../components/Menuhamburguesa";
import { useState } from "react";

export default function EdicionDocumentosColaborativos() {
  const [Click, SetClick] = useState(false);
  const CambiarClick = () => {
    alert("Se esta guardando espere un momento");
    alert("Listo se ha guardado BUENA SO");
    SetClick(!Click);
  };

  function cancelar() {
    const confirmar = window.confirm("¿Deseas cancelar la edición?");
    if (!confirmar) {
      window.alert("Sigue editando");
    } else {
      window.alert("¡Vuelve pronto, te esperamos!");

    }
  }

  return (
    <div>
      <MenuHamburguesa />

      {/* Contenedor principal */}
      <div className="container-edicion mt-5">
        {/* Botones */}

        <div
          className="d-flex align-items-center justify-content-end gap-3 p-2 mb-4"
          style={{
            backgroundColor: "white",
            width: "fit-content",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            marginLeft: "auto",
          }}
        >
          <span className="fw-bold text-secondary me-2">⚙️ Acciones:</span>
          <button className="botonVerde" onClick={CambiarClick}>
            Guardar
          </button>
          <button className="botonVerde" onClick={cancelar}>
            Cancelar
          </button>
        </div>

        {/* Documento editable estilo PDF */}
        <div
          className="pdf-page"
          contentEditable="true"
          id="documentoEditable"
          suppressContentEditableWarning={true}
        >
          <h2 style={{ textAlign: "center" }}>Título del Documento</h2>
          <p>
            Este es un ejemplo de edición de un documento con formato PDF.
            Puedes modificar este contenido directamente como si estuvieras
            escribiendo en un editor visual.
          </p>
          <p>
            Simula márgenes, fuentes elegantes y formato de impresión. Aquí
            podrías poner tu texto, tablas, referencias, etc. Puedes incluso
            simular múltiples páginas duplicando este bloque de contenido.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            vehicula lectus sed tortor hendrerit, a facilisis nunc vehicula.
          </p>
          <div className="text-end text-muted mt-5">Página 1</div>
        </div>
      </div>
    </div>
  );
}
