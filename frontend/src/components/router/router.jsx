import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductScreen from "../../screens/ProductScreen";
import HomeScreen from "../../screens/HomeScreen";
import CartScreen from "../../screens/CartScreen";
import Login from "../login/login";
import Signup from "../signup/signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<HomeScreen />} />
        <Route exact path="/product/:slug" element={<ProductScreen />} />
        <Route exact path="/cart" element={<CartScreen />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route
          path={"*"}
          component={() => (
            <h1 style={{ marginTop: 300 }}>
              {" "}
              404 <br />
              Pagina no Encontrada{" "}
            </h1>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}
