import React, { useContext } from "react";
import { Badge, Container, Nav, Navbar as RBNavbar } from "react-bootstrap";
import { Store } from "../../store";
import { Logo } from "../logo/logo";

export const Navbar = () => {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <RBNavbar style={{ backgroundColor: "#c7f9bd" }}>
      <Container>
        <RBNavbar.Brand href="/">
          <Logo />
        </RBNavbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href={"/cart"}>
            Cart
            {cart.cartItems.length > 0 && (
              <Badge pill bg="danger">
                {cart.cartItems.reduce((a, c) => a + c.quantify, 0)}
              </Badge>
            )}
          </Nav.Link>
          <Nav.Link href="/signup">Registrarse</Nav.Link>
          <Nav.Link href="/">Iniciar sesion</Nav.Link>
        </Nav>
      </Container>
    </RBNavbar>
  );
};
