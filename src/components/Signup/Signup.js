import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='signup-container'>
      <div className="signup-form-container">
        <h2 className='signup-heading'>Signup</h2>
        <form className='signup-form'>
        <span className='signup-labels'>Fullname</span>
          <input className='signup-input' type="text" name="" id="" />
          <span className='signup-labels'>Email</span>
          <input className='signup-input' type="email" name="" id="" />
          <span className='signup-labels'>Password  </span>
          <input className='signup-input' type="password" name="" id="" />
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
