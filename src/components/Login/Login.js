import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

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
        navigate("/");
      } else {
        alert("Invalid Credentials!")
      }
    } catch (error) {
      console.log(error)
      alert("Invalid Credentials!")
    }
  }

  return (
    <div className='login-container'>
      <div className="login-form-container">
        <h2 className='login-heading'>Login</h2>
        <form className='login-form' onSubmit={handleSubmit}>
          <span className='login-labels'>Email</span>
          <input className='login-input' type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
          <span className='login-labels'>Password  </span>
          <input className='login-input' type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
          <button className='login-btn'>Login</button>
        </form>
        <div className="register-user">
          <span>Don't have an account?</span>
          <Link to='/signup'>Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
