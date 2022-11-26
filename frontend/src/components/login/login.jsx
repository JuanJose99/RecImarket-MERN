import React from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import app from "../app.json";
import { isNull } from "util";
import { Component } from "react";

const { APIHOST } = app;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  login() {
    axios.post(`${APIHOST}/auth/login`, {
        //localhost:3001/usuarios/login la ruta para obtener el token
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        if (isNull(response.data.token)) {
          //Si genera alerta - es porque es nulo el token
          alert("usuario y/o contraseña invalidas");
        } else {
          <Component history={window.open("/home")} />;
        }
      })

      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div
        className="container text-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <div
          className="card text-center"
          style={{
            width: "18rem",
            backgroundColor: "#b9fac4",
          }}
        >
          <div className="card-header">
            <h2 className="text-success">Inicia sesion</h2>
          </div>

          <Form>
            <Form.Group>
              <div className="m-3">
                <Form.Control
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Correo electronico"
                  //   Comado para capturar los datos
                  onChange={(e) =>
                    //     //los valores colocados en el box se colocaran en la variable usuario
                    this.setState({ email: e.target.value })
                  }
                />
              </div>
            </Form.Group>

            <Form.Group>
              <div className="mx-3">
                <Form.Control
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Contraseña"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>
            </Form.Group>

            <div className="my-3">
              <Button
                variant="success"
                onClick={() => {
                  this.login();
                }}
              >
                Iniciar Sesión
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
