import React from "react";
import MenuHamburguesa from "../../../components/Menuhamburguesa";
import Molda_Admin from "../../../components/Molda_Admin";
import "../../../styles/styles.css"
import Navbar_Admin from "../../../components/Navbar_Admin";
export default function Usuarios() {
  return (
    <div>
      <Navbar_Admin />
      <MenuHamburguesa />
      <h1 className="tituloPrincipal">USUARIOS</h1>

      <div style={{ marginLeft: "9%", marginBottom: "12px" }}>
        {/* <Molda_Admin
          NombreBoton="Filtrar"
          campos={CamposInputs}
          EstilosBoton={"botonVerde"}
        /> */}
        <input
          type="text"
          className="input"
          placeholder="Ingrese un nombre de usuario"
          style={{ width: "15%", marginLeft: "56%" }}
        />
        <Molda_Admin
          NombreBoton="Agregar Usuario"
          campos={CamposInputs}
          EstilosBoton={"botonVerde"}
        />
      </div>
      <table className="tablaTodos">
        <thead className="encabezadoTabla">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Contraseña</th>
            <th>Numero de cedula</th>
            <th>Estado</th>
            <th>Numero de contrato</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {UsuariosN.map((Usu, index) => (
            <tr key={index} className="FinalTabla">
              <td>{index + 1}</td>
              <td>{Usu.Nombre}</td>
              <td>{Usu.Apellido}</td>
              <td>{Usu.Contraseña}</td>
              <td>{Usu.NumeroDeCedula}</td>
              <td>{Usu.Estado}</td>
              <td>{Usu.NumeroDeContrato}</td>
              <td>{Usu.Correo}</td>
              <td>{Usu.Rol}</td>
              <td>
                <div style={{ margin: "4px" }}></div>
                <Molda_Admin
                  NombreBoton="Eliminar usuario"
                  campos={CamposInputsEliminar}
                  EstilosBoton={"botonAzul"}
                />
                <div style={{ margin: "4px" }}></div>
                <Molda_Admin
                  NombreBoton="Editar usuario"
                  campos={CamposInputs}
                  EstilosBoton={"botonAzul"}
                />

                <div style={{ marginBottom: "4px" }}></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <Footer /> */}
    </div>
  );
}

// Campos de la tabla
const UsuariosN = [
  {
    id: 1,
    Nombre: "Pedro ",
    Apellido: "sanchez",
    Contraseña: "Contraseña",
    NumeroDeCedula: 1908384,
    Estado: "Activo",
    NumeroDeContrato: 2024_56,
    Correo: "PedroSanchez@gmail.com",
    Rol: "Administrador",
  },
];
// ESTILOS AUXILIARES

// Campos del modal

// Modal de agregar usuario
const CamposInputs = [
  {
    label: "Nombre",
    name: "nombre",
    type: "text",
    placeholder: "Ingrese su nombre",
  },
  {
    label: "Apellido",
    name: "apellido",
    type: "text",
    placeholder: "Ingrese su apellido",
  },
  {
    label: "Contraseña",
    name: "contraseña",
    type: "password",
    placeholder: "Ingrese su contraseña",
  },
  {
    label: "Número de Cédula",
    name: "numeroDeCedula",
    type: "number",
    placeholder: "Ingrese su número de cédula",
  },
  {
    label: "Estado",
    name: "estado",
    type: "text",
    placeholder: "Ingrese el estado (Activo/Inactivo)",
  },
  {
    label: "Número de Contrato",
    name: "numeroDeContrato",
    type: "number",
    placeholder: "Ingrese el número de contrato",
  },
  {
    label: "Correo",
    name: "correo",
    type: "email",
    placeholder: "Ingrese su correo",
  },
  {
    label: "Rol",
    name: "rol",
    type: "text",
    placeholder: "Ingrese el rol (Administrador, Usuario, etc.)",
  },
];

// Modal para eliminar usuario

const CamposInputsEliminar = [
  {
    label: "Nombre",
    name: "nombre",
    type: "text",
    placeholder: "Nombre del usuario",
    disabled: true, // Normalmente solo se muestra, no se edita
  },
  {
    label: "Apellido",
    name: "apellido",
    type: "text",
    placeholder: "Apellido del usuario",
    disabled: true,
  },
  {
    label: "Número de Cédula",
    name: "numeroDeCedula",
    type: "number",
    placeholder: "Número de cédula",
    disabled: true,
  },
];
