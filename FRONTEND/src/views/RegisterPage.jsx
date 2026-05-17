import React, { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim() || !passwordC.trim()) {
      alert("Todos los campos son obligatorios.");
      return;
    }if (password.length < 6) {
      alert("La contraseña debe tener más de 6 caracteres");
      return;
    }if (password !== passwordC) {
      alert("Las contraseñas deben coincidir.");
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
        <h2 className="text-center">Crear Registro</h2>

        <label htmlFor="email" className="form-label-dark">Email:</label>
        
        <input
            type="email" placeholder="ejemplo@email.com" className="form-input"
            value={email}
            onChange={(e) => {
            setEmail(e.target.value);
            }}
        />

        
        <label htmlFor="password" className="form-label-dark">Password:</label>
        
        <input
            type="password" placeholder="******" className="form-input"
            value={password}
            onChange={(e) => {
            setPassword(e.target.value);
            }}
        />

       
        <label htmlFor="passwordConfirm" className="form-label-dark">Confirmar password:</label>
       
        <input
            type="password" placeholder="******" className="form-input"
            value={passwordC}
            onChange={(e) => {
            setPasswordC(e.target.value);
            }}
        />

        <br />
        <button type="submit" className="btn btn-primary w-100">Registrarme</button>
        </form>
    </div>
  );
}

