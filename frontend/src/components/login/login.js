import React from "react";

export default function login() {
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
        <div className="m-3">
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Correo electronico"
          />
        </div>
        <div className="mx-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Contraseña"
          />
        </div>
        <div className="my-3">
          <button type="submit" className="btn btn-success">
            Iniciar sesion
          </button>
        </div>
      </div>
    </div>
  );
}
