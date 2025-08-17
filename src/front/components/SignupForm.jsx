import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState } from "react";
import { signup } from "../services/userServices.js";
import { useNavigate } from "react-router-dom";

export const SignupForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null);

    const { store, dispatch } = useGlobalReducer()

    const navigate = useNavigate()

   async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    try {
      const created = await signup(email, password);
      if (created) {
        navigate("/login");
      } else {
        setError("Error al crear el usuario, intenta con otro correo");
      }
    } catch (err) {
      setError("Error en el registro: " + err.message);
    }
  }

    return (
        <form className="w-50 mx-auto" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlTextarea1" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Crear Usuario</button>
        </form>
    )
}