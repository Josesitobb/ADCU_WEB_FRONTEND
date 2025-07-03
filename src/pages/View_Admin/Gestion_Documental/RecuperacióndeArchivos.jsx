import React from "react";
import MenuHamburguesa from "../../../components/Menuhamburguesa";
import Footer from "../../../components/Footer";
import Molda_Admin from "../../../components/Molda_Admin";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../../styles/styles.css";
export default function RecuperacióndeArchivos() {
  return (
    <div>
      <MenuHamburguesa />
      <h2 className="tituloPrincipal">Recuperacion de archivos</h2>
      <div style={{ marginLeft: "85%", marginBottom: "10px" }}>
        <Molda_Admin
          NombreBoton="Filtrar"
          campos={CamposInputsFiltroRecuperarArchivo}
          EstilosBoton={"botonVerde"}
        />
      </div>
      <table className="tablaTodos">
        <thead className="encabezadoTabla">
          <tr>
            <th>#</th>
            <th>Nombre del Archivo</th>
            <th>Categoría</th>
            <th>Propietario</th>
            <th>Fecha de Eliminación</th>
            <th>Eliminado Por</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {archivosRecuperacion.map((doc, index) => (
            <tr className="FinalTabla">
              <td>{index + 1}</td>
              <td>{doc.nombreArchivo}</td>
              <td>{doc.categoria}</td>
              <td>{doc.propietario}</td>
              <td>{doc.fechaEliminacion}</td>
              <td>{doc.eliminadoPor}</td>
              <td>{doc.estado}</td>
              <td>
                <div style={{ paddingTop: "10px", paddingBottom: "12px" }}>
                  <Molda_Admin
                    NombreBoton="Recuperacion de archivo"
                    campos={CamposInputsRecuperarArchivo}
                    EstilosBoton={"botonAzul"}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Footer />
    </div>
  );
}

// CAMPOS

const archivosRecuperacion = [
  {
    id: 1,
    nombreArchivo: "Contrato_123.pdf",
    categoria: "Contrato de servicio 2024",
    propietario: "JosePoller",
    fechaEliminacion: "12/02/2024",
    eliminadoPor: "Admin",
    estado: "Desactivado",
  },
  {
    id: 2,
    nombreArchivo: "Contrato_123.pdf",
    categoria: "Contrato de servicio 2024",
    propietario: "JosePoller",
    fechaEliminacion: "12/02/2024",
    eliminadoPor: "Admin",
    estado: "Desactivado",
  },
];

const CamposInputsRecuperarArchivo = [
  {
    label: "Nombre del Archivo",
    name: "nombreArchivo",
    type: "text",
    placeholder: "Nombre del archivo",
    disabled: true,
  },
  {
    label: "Categoría",
    name: "categoria",
    type: "text",
    placeholder: "Categoría del archivo",
    disabled: true,
  },
  {
    label: "Propietario",
    name: "propietario",
    type: "text",
    placeholder: "Propietario del archivo",
    disabled: true,
  },
  {
    label: "Fecha de Eliminación",
    name: "fechaEliminacion",
    type: "date",
    placeholder: "Fecha de eliminación",
    disabled: true,
  },
  {
    label: "Eliminado Por",
    name: "eliminadoPor",
    type: "text",
    placeholder: "Usuario que eliminó",
    disabled: true,
  },
  {
    label: "Estado Actual",
    name: "estado",
    type: "text",
    placeholder: "Estado",
    disabled: true,
  },
  {
    label: "Confirmar recuperación",
    name: "confirmarRecuperacion",
    type: "checkbox",
    placeholder: "",
  },
];

const CamposInputsFiltroRecuperarArchivo = [
  {
    label: "Nombre del Archivo",
    name: "nombreArchivo",
    type: "text",
    placeholder: "Ingrese el nombre del archivo",
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
    placeholder: "Ingrese el propietario",
  },
  {
    label: "Desde (Fecha de Eliminación)",
    name: "fechaEliminacionDesde",
    type: "date",
    placeholder: "",
  },
  {
    label: "Hasta (Fecha de Eliminación)",
    name: "fechaEliminacionHasta",
    type: "date",
    placeholder: "",
  },
  {
    label: "Estado",
    name: "estado",
    type: "text",
    placeholder: "Ingrese el estado (Desactivado, Eliminado, etc.)",
  },
];
