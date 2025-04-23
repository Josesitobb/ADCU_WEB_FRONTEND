import React from "react";
import MenuHamburguesa from "../../../components/Menuhamburguesa";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js';
import '../../../styles/styles.css';

// Configuración del gráfico de barras
const data = {
  labels: ['Documento A', 'Documento B'],
  datasets: [
    {
      label: 'Archivos Retenidos',
      data: [500, 350],
      backgroundColor: 'rgba(0, 128, 255, 0.7)',
    },
    {
      label: 'Archivos Liberados',
      data: [200, 120],
      backgroundColor: 'rgba(255, 99, 132, 0.7)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Reporte de Archivos Retenidos vs Liberados',
    },
  },
};


export default function Reportedearchivoyretenciondedocumentos() {
  return (
    <div>
       <MenuHamburguesa />
      <div style={{width:"90%",marginLeft:"100px"}}>
     

      <header>
        <h1>Reporte de Archivo y Retención de Documentos</h1>
        <p>Fecha: 21 de abril de 2025</p>
      </header>

      <section className="centrada-seccion">
  <h2 className="subtitulos">Resumen de Documentos</h2>
  <table className="tablaTodos">
    <thead>
      <tr className="encabezadoTabla">
        <th>Documento</th>
        <th>Archivos Retenidos</th>
        <th>Archivos Liberados</th>
        <th>Saldo de Archivos</th>
      </tr>
    </thead>
    <tbody>
      <tr className="FinalTabla">
        <td>Documento A</td>
        <td>500</td>
        <td>200</td>
        <td>300</td>
      </tr>
      <tr className="FinalTabla">
        <td>Documento B</td>
        <td>350</td>
        <td>120</td>
        <td>230</td>
      </tr>
    </tbody>
  </table>
</section>

<section className="centrada-seccion">
  <h2 className="subtitulos">Gráfico de Retención y Liberación</h2>
  <div className="grafico-container">
    <Bar data={data} options={options} />
  </div>
</section>

      <h1>Rrporte de archivo y retencion de documentos</h1>


    </div>
    </div>
  );
}
