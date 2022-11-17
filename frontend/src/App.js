import { React, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Logo from "./components/logo/logo";
import { Store } from "./store";
import CartScreen from "./screens/CartScreen";

export default function App() {
  const { state } = useContext(Store);
  const { cart } = state;

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
                <Nav.Link to="/cart">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantify, 0)}
                    </Badge>
                  )}
                </Nav.Link>
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
              <Route path="/cart" element={<CartScreen />} />
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
