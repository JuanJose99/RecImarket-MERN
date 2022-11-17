import React from 'react'

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
        <div className="card-header mb-3">
          <h2 className='text-success'>Registrate</h2>
        </div>
        <div className="mx-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Nombre"
          />
        </div>
        <div className="m-3">
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Apellidos"
          />
        </div>
        <div className="mb-3 mx-3">
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Teléfono"
          />
        </div>
        <div className="mx-3">
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Correo electronico"
          />
        </div>
        <div className="m-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Contraseña"
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-success">
            Registrarse
          </button>
        </div>
      </div>
    </div>
  )
}
