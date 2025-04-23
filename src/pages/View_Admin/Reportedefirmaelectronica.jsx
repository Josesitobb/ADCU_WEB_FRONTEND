import React from "react";
import MenuHamburguesa from "../../components/Menuhamburguesa";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js';

// Estilos
import '../../styles/styles.css';

// Configuración del gráfico de barras
const data = {
  labels: ['Firma A', 'Firma B'],
  datasets: [
    {
      label: 'Firmas Exitosas',
      data: [150, 120],
      backgroundColor: 'rgba(0, 128, 255, 0.7)',
    },
    {
      label: 'Firmas Fallidas',
      data: [30, 25],
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
      text: 'Reporte de Firmas Electrónicas Exitosas vs Fallidas',
    },
  },
};


export default function Reportedefirmaelectronica() {
  return (
    <div>
      <MenuHamburguesa />
      
<div style={{width:"90%",marginLeft:"100px"}}>
      <header>
        <h1>Reporte de Firma Electrónica</h1>
        <p>Fecha: 21 de abril de 2025</p>
      </header>

      <section className="centrada-seccion">
        <h2 className="subtitulos">Resumen de Firmas</h2>
        <table className="tablaTodos">
          <thead>
            <tr className="encabezadoTabla">
              <th>Firma</th>
              <th>Firmas Exitosas</th>
              <th>Firmas Fallidas</th>
              <th>Total de Firmas</th>
            </tr>
          </thead>
          <tbody>
            <tr className="FinalTabla">
              <td>Firma A</td>
              <td>150</td>
              <td>30</td>
              <td>180</td>
            </tr>
            <tr className="FinalTabla">
              <td>Firma B</td>
              <td>120</td>
              <td>25</td>
              <td>145</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="centrada-seccion">
        <h2 className="subtitulos">Gráfico de Firmas Exitosas vs Fallidas</h2>
        <div className="grafico-container">
          <Bar data={data} options={options} />
        </div>
      </section>

      <h1>Reporte de dirma electronica</h1>


      <h1>Reporte de dirma electronica</h1>
      </div>
    </div>
  );
}

