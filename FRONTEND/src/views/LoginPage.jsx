import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("Todos los campos son obligatorios.");
      return;
    }if (password.length < 6) {
      alert("La contraseña debe tener más de 6 caracteres");
      return;
    } else {
      console.log("Estoy enviando el registro");
      alert("Registro enviado!");
      setEmail("");
      setPassword("");
      setPasswordC("");
    }
  };

  return (
    <div className="contenedor-registro">
        <form
        className="loginForm"
        onSubmit={(e) => {
            handleSubmit(e);
        }}
        >
        <h2 className="text-center">Iniciar Sesión</h2>

        <label htmlFor="email" className="form-label-dark">Ingrese su correo electrónico:</label>
        
        <input
            type="email" placeholder="ejemplo@email.com" className="form-input"
            value={email}
            onChange={(e) => {
            setEmail(e.target.value);
            }}
        />

        
        <label htmlFor="password" className="form-label-dark">Ingrese su contraseña:</label>
        
        <input
            type="password" placeholder="******" className="form-input"
            value={password}
            onChange={(e) => {
            setPassword(e.target.value);
            }}
        />

        <br />
        <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
        </form>
    </div>
  );
}
