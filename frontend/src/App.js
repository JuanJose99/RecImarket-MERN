import "./App.css";
import { React } from "react";
import Container from "react-bootstrap/Container";
import { Navbar } from "./components/navbar/navbar";
import AppRoutes from "./components/router/router";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <AppRoutes/>
      </Container>
    </div>
  );
}
