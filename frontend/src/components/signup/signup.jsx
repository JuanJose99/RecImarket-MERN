import axios from "axios";
import React from "react";
import app from "../app.json";

const { APIHOST } = app;
export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      mail: "",
      password: "",
      phone: "",
    };
  }

  signup() {
    axios
      .post(`${APIHOST}/auth/signup`, {
        name: this.state.name,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
      })
      .then((response) => {
        window.alert(response.data);
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
          <div className="card-header mb-3">
            <h2 className="text-success">Registrate</h2>
          </div>
          <div className="mx-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Nombre"
              onChange={(e) =>
                //     //los valores colocados en el box se colocaran en la variable usuario
                this.setState({ name: e.target.value })
              }
            />
          </div>
          <div className="m-3">
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Apellidos"
              onChange={(e) =>
                //     //los valores colocados en el box se colocaran en la variable usuario
                this.setState({ lastname: e.target.value })
              }
            />
          </div>
          <div className="mb-3 mx-3">
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Teléfono"
              onChange={(e) =>
                //     //los valores colocados en el box se colocaran en la variable usuario
                this.setState({ phone: e.target.value })
              }
            />
          </div>
          <div className="mx-3">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Correo electronico"
              onChange={(e) =>
                //     //los valores colocados en el box se colocaran en la variable usuario
                this.setState({ email: e.target.value })
              }
            />
          </div>
          <div className="m-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Contraseña"
              onChange={(e) =>
                //     //los valores colocados en el box se colocaran en la variable usuario
                this.setState({ password: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="btn btn-success"
              onClick={() => {
                this.signup();
              }}
            >
              Registrarse
            </button>
          </div>
        </div>
      </div>
    );
  }
}
