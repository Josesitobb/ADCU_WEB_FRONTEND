import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Alert } from "react-bootstrap";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/api/auth/signin", {
        email,
        password,
      });

      const { token, user } = res.data;
      const role = user.role;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      if (role.toLowerCase() === "admin") {
        console.log("Rol", role);
        console.log("Token", token);
        navigate("/dashboard");
      } else {
        console.log("No hay nada");
      }
    } catch (err) {
      const mensajeServidor =
        err.response?.data?.message || "Error desconocido del servidor";

      setErrorMsg(`❌ ${mensajeServidor}`);
      console.error("Error completo:", err);
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-4">Iniciar Sesión</h3>
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Ingresar
        </Button>
      </Form>
    </Container>
  );
}
