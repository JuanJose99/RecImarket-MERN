import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

import Logo from "./components/logo";

export default function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column">
        <header>
          <Navbar style={{ "background-color": "#c7f9bd" }}>
            <Container>
              <Navbar.Brand href="/">
                <Logo />
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav.Link href="/signup">Registrarse</Nav.Link>
                <Nav.Link href="/login">Iniciar sesion</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Container>
        </main>
        <footer style={{ "background-color": "#c7f9bd" }}>
          <div className="text-center">Todos los derechos recimarket</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
