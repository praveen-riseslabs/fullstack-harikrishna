import React, { useState } from 'react'
import './signup.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const Signup = () => {

  const [fullname, setFullname] = useState()
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [phNo, setPhNo] = useState()
  const [password, setPassword] = useState()
  // eslint-disable-next-line
  const [cpassword, setCPassword] = useState()
  const [gender, setGender] = useState()

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/register', { fullname, username, email, phNo, password, gender });
      const { data } = response;
      if (data) {
        localStorage.setItem('token', data.authToken)
        navigate("/login");
        alert("Account Created Successfully")
      } else {
        alert("Invalid Credentials!")
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }

  return (
    <div className='signup'>
      <div className="container">
        <h1 className='heading'>Registration</h1>
        <form onSubmit={handleSubmit}>

          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullname" name="fullname" aria-describedby="emailHelp" onChange={(e) => setFullname(e.target.value)} />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" name="username" aria-describedby="emailHelp" onChange={(e) => setUsername(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor="phNo" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="phNo" name="phNo" aria-describedby="emailHelp" onChange={(e) => setPhNo(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" aria-describedby="emailHelp" onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="cpassword" name="cpassword" aria-describedby="emailHelp" onChange={(e) => setCPassword(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="row">
            <label htmlFor="gender" className="form-label mt-2">Gender</label>
            <div className="col">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="gender" value="Male" onChange={e => setGender(e.target.value)} />
                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
              </div>
              <div className="form-check form-check-inline mx-3">
                <input className="form-check-input" type="radio" name="gender" id="gender" value="Female" onChange={e => setGender(e.target.value)} />
                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
              </div>
              <div className="form-check form-check-inline mx-3">
                <input className="form-check-input" type="radio" name="gender" id="gender" value="Prefer Not to say" onChange={e => setGender(e.target.value)} />
                <label className="form-check-label" htmlFor="inlineRadio3">Prefer Not to say</label>
              </div>
            </div>
          </div>

          <button type="submit" className="btn">Register</button>

        </form>
      </div>
    </div>
  )
}

export default Signup
