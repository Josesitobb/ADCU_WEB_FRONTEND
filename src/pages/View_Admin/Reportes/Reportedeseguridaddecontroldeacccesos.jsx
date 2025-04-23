import React from "react";
import MenuHamburguesa from "../../../components/Menuhamburguesa";
import { Bar } from 'react-chartjs-2';
import '../../../styles/styles.css';
const data = {
  labels: ['Proceso A', 'Proceso B'],
  datasets: [
    {
      label: 'Tareas Completadas',
      data: [120, 85],
      backgroundColor: 'rgba(0, 128, 255, 0.7)',
    },
    {
      label: 'Tareas Pendientes',
      data: [30, 45],
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
      text: 'Reporte de Flujo de Trabajo (Completadas vs Pendientes)',
    },
  },
};


export default function Reportedeseguridaddecontroldeacccesos() {
  return (
    <div>
      <MenuHamburguesa />
      <h1>Reportes de seguridad de control de accesos</h1>

      <div>
               <MenuHamburguesa />
            <div style={{width:"90%",marginLeft:"100px"}}>
         
      
            <header>
              <h1>Reportes de Flujo de Trabajo</h1>
              <p>Fecha: 21 de abril de 2025</p>
            </header>
      
            <section className="centrada-seccion">
              <h2 className="subtitulos">Resumen de Procesos</h2>
              <table className="tablaTodos">
                <thead>
                  <tr className="encabezadoTabla">
                    <th>Proceso</th>
                    <th>Tareas Completadas</th>
                    <th>Tareas Pendientes</th>
                    <th>Total de Tareas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="FinalTabla">
                    <td>Proceso A</td>
                    <td>120</td>
                    <td>30</td>
                    <td>150</td>
                  </tr>
                  <tr className="FinalTabla">
                    <td>Proceso B</td>
                    <td>85</td>
                    <td>45</td>
                    <td>130</td>
                  </tr>
                </tbody>
              </table>
            </section>
      
            <section className="centrada-seccion">
              <h2 className="subtitulos">Gráfico de Tareas Completadas vs Pendientes</h2>
              <div className="grafico-container">
                <Bar data={data} options={options} />
      
              <h1>Reportes de flujo de trabajo</h1>
              
        
              </div>
            </section>
            </div>
          </div>
    </div>
  );
}
