import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"

const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      const { data } = response;
      if (data) {
        localStorage.setItem('token', data.token)
        navigate("/dashboard");
        alert("Logged in Successfully")
      } else {
        alert("Invalid Login Credentials!")
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }

  return (
    <div className='signup'>
      <div className="container">
        <h1 className='heading' style={{ fontSize: "2.5rem" }}>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Email</label>
                <input type="text" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" aria-describedby="emailHelp" onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="text-center my-3">
            <Link to='/forgot-password'>Forgot Password</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
