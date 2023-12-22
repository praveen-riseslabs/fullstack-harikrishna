import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-container'>
        <div className="login-form-container">
            <h2 className='login-heading'>Login</h2>
            <form className='login-form'>
                <span className='login-labels'>Email</span>
                <input className='login-input' type="email" name="" id="" />
                <span className='login-labels'>Password  </span>
                <input className='login-input' type="password" name="" id="" />
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
