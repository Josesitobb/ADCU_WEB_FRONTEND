import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "rgb(245, 245, 245)", // Fondo claro sin sombra
        padding: "10px 0", // Espacio alrededor
        textAlign: "center", // Centrado del contenido
      }}
    >
      <div >
        <p style={{ margin: 0 }}>© 2020 Copyright: </p>
        <a className="text-body" href="https://mdbootstrap.com/" style={{ color: "#0056b3" }}> {/* Color azul para el enlace */}
          ADCU
        </a>
      </div>
    </footer>
  );
}

const colors = {
  grisClaro : "#f5f5f5",
};