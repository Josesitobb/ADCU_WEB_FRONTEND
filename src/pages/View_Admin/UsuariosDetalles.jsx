import React from "react";

import Footer from "../../components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import MenuHamburguesa from "../../components/Menuhamburguesa";

export default function UsuariosDetalles() {
  return (
    <div>
      <MenuHamburguesa />
      <h1 style={style}>Usuario detalles </h1>
      <div style={style}>
        <Line options={options} data={data} />
        <Bar options={options} data={data} />
      </div>

      <Row className="mb-4 mt-5 justify-content-center">
        <Col md={4}>
          <Card className="text-center shadow-sm border-0 rounded-4 p-4">
            <Card.Body>
              <h3 className="text-primary mb-3 d-flex justify-content-center align-items-center gap-2">
                <i className="bi bi-people fs-2"></i> 15.000
              </h3>
              <Card.Text className="text-muted">
                Usuarios registrados en el sistema
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-5 justify-content-center">
        <Col md={4}>
          <Card className="text-center shadow-sm border-0 rounded-4 p-4">
            <Card.Body>
              <h3 className="text-danger mb-3 d-flex justify-content-center align-items-center gap-2">
                <i className="bi bi-person-dash fs-2"></i> 1.200
              </h3>
              <Card.Text className="text-muted">Usuarios Inactivados</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="text-center shadow-sm border-0 rounded-4 p-4">
            <Card.Body>
              <h3 className="text-success mb-3 d-flex justify-content-center align-items-center gap-2">
                <i className="bi bi-person-check fs-2"></i> 13.800
              </h3>
              <Card.Text className="text-muted">Usuarios Activos</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Footer />
    </div>
  );
}
// Chart.js
// Registrar Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
// Opciones
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Ingreo de usuarios al sistema",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels,
  datasets: [
    {
      label: "Rol 1 Admin",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })), // Corrección aquí
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Rol 2 admin",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })), // Corrección aquí
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

// Estilos

const style = {
  width: "700px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
};

const stylesCard = {
  marginLeft: "10px",
};
