import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        
    }


    return (
        <div className='signup'>
            <div className="container">
                <h1 className='heading' style={{ fontSize: "2.5rem"}}>Login</h1>
                <form onSubmit={handleSubmit}>

                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" name="username" aria-describedby="emailHelp" onChange={(e) => setUsername(e.target.value)} />
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
