import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState } from "react";
import { login } from "../services/userServices.js";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { store, dispatch } = useGlobalReducer()

    async function handleSubmit(e) {
        e.preventDefault()
        
        let isLogged = await login(email, password);
        console.log(isLogged);

        if (isLogged){
            navigate("/")
        }
    }

    return (
        <form className="w-50 mx-auto" onSubmit={handleSubmit}>
            <div class="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div class="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlTextarea1" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}