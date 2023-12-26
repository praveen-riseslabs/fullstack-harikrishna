import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

  const [fullname, setFullname] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/signup', { fullname, email, password });
      const { data } = response;
      if (data) {
        localStorage.setItem('token', data.authToken)
        navigate("/login");
      } else {
        console.log({error: "Invalid credentials"})
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='signup-container'>
      <div className="signup-form-container">
        <h2 className='signup-heading'>Signup</h2>
        <form className='signup-form' onSubmit={handleSubmit}>
        <span className='signup-labels'>Fullname</span>
          <input className='signup-input' type="text" name="fullname" id="fullname" onChange={(e) => setFullname(e.target.value)} />
          <span className='signup-labels'>Email</span>
          <input className='signup-input' type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
          <span className='signup-labels'>Password  </span>
          <input className='signup-input' type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
          <button className='signup-btn'>Signup</button>
        </form>
        <div className="register-user">
          <span>Already a user?</span>
          <Link to='/login'>Log in</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
