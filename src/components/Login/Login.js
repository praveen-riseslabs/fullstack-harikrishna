import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/login', { email, password })
            .then(function (response) {
                console.log(response.data);
                if (response.data === "Success") {
                    navigate("/users");
                } else {
                    alert("Invalid Credentials");
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    return (
        <div className='signup'>
            <div className="container">
                <h1 className='heading' style={{ fontSize: "2.5rem" }}>Login</h1>
                <form onSubmit={handleSubmit}>

                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" name="password" aria-describedby="emailHelp" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn">Login</button>

                </form>
            </div>
        </div>
    )
}

export default Login
