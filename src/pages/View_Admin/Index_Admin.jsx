import React from "react";
import MenuHamburguesa from "../../components/Menuhamburguesa";
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import "../../styles/styles.css";

export default function Index_Admin() {



  // Estilos reutilizables
  const cardStyle = {
    border: "1px solid #ccc",
    width: "250px",
    height: "180px",
    borderRadius: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",

    textAlign: "center",
    paddingTop: "20px",
    marginLeft:"50px"
  };

  const iconStyle = {
    fontSize: "35px",
    color: "#333"
  };

  const textStyle = {
    marginTop: "10px",
    fontSize: "19px"
  };

  return (
    <div>
      <MenuHamburguesa />
      <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
{Cartas.map((CartaIndex,index) =>(
<>

        
<div key={index} style={{...cardStyle,background:CartaIndex.ColorFondo}}>
          <i className={CartaIndex.icon} style={iconStyle}></i>
          <p style={{ marginTop: "10px" }}>{CartaIndex.nombre}</p>
          <p style={textStyle}>{CartaIndex.numero}</p>
        </div>

        </>

))}

      </div>

      <table className="tablaTodos" style={{marginTop:"70px",}}>
      <thead className="encabezadoTabla">
        <tr style={{borderRadius:"20px"}}>
          <th>#</th>
          <th>Nombre documento</th>
          <th>Fecha de subida</th>
          <th>Tipo de Documento</th>
          <th>Usuario Responsable</th>
  
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Contratos 2025</td>
          <td>12/01/2024</td>
          <td>Contratos</td>
          <td>Dayana</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Reportes</td>
          <td>12/04/2025</td>
          <td>Reportes</td>
          <td>Andres</td>
        </tr>
        <tr>
        <td>4</td>
  <td>Contrato_MesAbril</td>
  <td>11/04/2025</td>
  <td>Contrato</td>
  <td>Juan</td>
        </tr>
        <tr>
        <td>5</td>
  <td>Inventario_Abril</td>
  <td>07/04/2025</td>
  <td>Inventario</td>
  <td>Lucía</td>
        </tr>
      </tbody>
      </table>
    </div>
  );
}


const Cartas = [
  {

    icon:"bi bi-file-earmark",
    nombre :"Documento recientes",
    numero:10,
    id:1,
    ColorFondo:"#c1e0ff"
    },
    {

      icon:"bi bi-people",
      nombre :"Usuarios activos",
      numero:10,
      id:1,
      ColorFondo:"#fef3d7",
      },
      {

        icon:"bi bi-file-check",
        nombre :"Documentos compartidos",
        numero:100,
        id:1,
        ColorFondo:"#efe0fd"
        },
        {

          icon:"bi bi-ban",
          nombre:"Accesos fallidos",
          numero:30,
          id:1,
          ColorFondo:"#ffe9dc"
          }
    
  
  ]