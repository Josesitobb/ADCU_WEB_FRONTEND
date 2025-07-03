import React from "react";
import { Container } from "react-bootstrap";

export default function Header() {
  return (
    <header className="bg-light py-3">
      <Container>
        <h1 className="text-center">Bienvenido a Nuestra App</h1>
        <p className="text-center">Explora todo lo que tenemos para ofrecerte.</p>
      </Container>
    </header>
  )
}