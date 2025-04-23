import React from "react";
import MenuHamburguesa from "../../../components/Menuhamburguesa";
import Footer from "../../../components/Footer";
import Molda_Admin from "../../../components/Molda_Admin";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../../styles/styles.css";

export default function GestordeDocumentos() {
  return (
    <div>
      <MenuHamburguesa />
      <h2 className="tituloPrincipal">Gestor de documentos</h2>

      <div style={filterContainerStyle}>
        <input className="input" type="text" placeholder="Escribe aquí..." />

        <Molda_Admin
          NombreBoton="Agregar Documento"
          campos={CamposInputsDocumentos}
          EstilosBoton={"botonVerde"}
        />
      </div>

      <table className="tablaTodos">
        <thead className="encabezadoTabla">
          <tr>
            <th>#</th>
            <th>Nombre del Documento</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Propietario</th>
            <th>Fecha de Creación</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {documentos.map((doc, index) => (
            <tr className="FinalTabla">
              <td>{index + 1}</td>
              <td>{doc.DocumentoNombre}</td>
              <td>{doc.DocumentoDescripcion}</td>
              <td>{doc.DocumentoCategoria}</td>
              <td>{doc.DocumentoPropietario}</td>
              <td>{doc.DocumentoFecha}</td>
              <td>{doc.DocumentoEstado}</td>
              <td>
                <Molda_Admin
                  NombreBoton="Eliminar"
                  campos={CamposInputsEliminarDocumentos}
                  EstilosBoton={"botonAzul"}
                />

                <Molda_Admin
                  NombreBoton="Editar de documento"
                  campos={CamposInputsDocumentos}
                  EstilosBoton={"botonAzul"}
                />

                <Molda_Admin
                  NombreBoton="Visualizar"
                  pdf
                  EstilosBoton={"botonAzul"}
                  Links={"/assets/Administración_de_cuentas_de_cobro.pdf"}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Footer />
    </div>
  );
}

const filterContainerStyle = {
  display: "flex",
  justifyContent: "flex-end", // Alinea los elementos a la derecha
  alignItems: "center",
  width: "100%",
  gap: "10px", // Espaciado entre el botón y el input
  paddingRight: "10%",
  paddingBottom: "10px",
};

// CAMPOS
const documentos = [
  {
    id: 1,
    DocumentoNombre: "Contrato_123.pdf",
    DocumentoDescripcion: "Contrato de servicio 2024",
    DocumentoCategoria: "Contratos",
    DocumentoPropietario: "JosePoller",
    DocumentoFecha: "12/02/2024",
    DocumentoEstado: "Activo",
  },
  {
    id: 2,
    DocumentoNombre: "Contrato_123.pdf",
    DocumentoDescripcion: "Contrato de servicio 2024",
    DocumentoCategoria: "Contratos",
    DocumentoPropietario: "JosePoller",
    DocumentoFecha: "12/02/2024",
    DocumentoEstado: "Activo",
  },
];

const CamposInputsDocumentos = [
  {
    label: "Nombre del Documento",
    name: "nombreDocumento",
    type: "text",
    placeholder: "Ingrese el nombre del documento",
  },
  {
    label: "Descripción",
    name: "descripcion",
    type: "text",
    placeholder: "Ingrese una descripción",
  },
  {
    label: "Categoría",
    name: "categoria",
    type: "text",
    placeholder: "Ingrese la categoría",
  },
  {
    label: "Propietario",
    name: "propietario",
    type: "text",
    placeholder: "Ingrese el nombre del propietario",
  },
  {
    label: "Fecha de Creación",
    name: "fechaCreacion",
    type: "date",
    placeholder: "Seleccione la fecha de creación",
  },
  {
    label: "Estado",
    name: "estado",
    type: "text",
    placeholder: "Ingrese el estado (Activo/Inactivo)",
  },
];

const CamposInputsEliminarDocumentos = [
  {
    label: "Nombre del Documento",
    name: "nombreDocumento",
    type: "text",
    placeholder: "Nombre del documento",
    disabled: true,
  },
  {
    label: "Descripción",
    name: "descripcion",
    type: "text",
    placeholder: "Descripción",
    disabled: true,
  },
  {
    label: "Propietario",
    name: "propietario",
    type: "text",
    placeholder: "Propietario",
    disabled: true,
  },
  {
    label: "Fecha de Creación",
    name: "fechaCreacion",
    type: "date",
    placeholder: "Fecha de creación",
    disabled: true,
  },
];
