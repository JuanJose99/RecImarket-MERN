import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";

export default function Login() {
  const { search } = useLocation;
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  return (
    <Container>
      <h1 className="my-3">Inicio de sesion</h1>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese tu E-mail" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="email" placeholder="Ingrese tu contraseña" />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Iniciar sesion</Button>
        </div>
        <div className="mb-3">
          No tienes una cuenta?{" "}
          <Link to={`/signup?redirect=${redirect}`}>Registrate</Link>
        </div>
      </Form>
    </Container>
  );
}
