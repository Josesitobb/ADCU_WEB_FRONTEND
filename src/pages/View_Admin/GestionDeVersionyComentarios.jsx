import React from "react";
import MenuHamburguesa from "../../components/Menuhamburguesa";
import Footer from "../../components/Footer";
import "../../styles/styles.css"

export default function GestionDeVersionyComentarios() {
  return (
    <div>
      <MenuHamburguesa />
     

<h1 className="tituloPrincipal">Control de cambios</h1>

<input type="text" id="searchInput" placeholder="Buscar por usuario o versión..." className="input" style={{marginLeft:"78%",width:"250px",marginBottom:"10px"}}></input>

<table className="tablaTodos">
      <thead className="encabezadoTabla">
        <tr>
          <th>Versión</th>
          <th>Fecha y Hora</th>
          <th>Usuario</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>v3.2</td>
          <td>2025-04-21 14:32</td>
          <td>Juan Pérez</td>
          <td>
            <button class="botonAzul">Ver</button>
            <button class="botonAzul">Revertir</button>
          </td>
        </tr>
        <tr>
          <td>v3.1</td>
          <td>2025-04-20 09:45</td>
          <td>Ana Torres</td>
          <td>
            <button class="botonAzul">Ver</button>
            <button class="botonAzul">Revertir</button>
          </td>
        </tr>

      </tbody>
    </table>



      
      <Footer />
    </div>
  );
}
