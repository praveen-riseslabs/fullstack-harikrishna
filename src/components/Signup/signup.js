import React from 'react'
import './signup.css'

const signup = () => {

  const handleSubmit = async (e) => {
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
                <input type="text" className="form-control" id="fullname" name="fullname" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" name="username" aria-describedby="emailHelp" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor="phNo" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="phNo" name="phNo" aria-describedby="emailHelp" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="text" className="form-control" id="password" name="password" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="text" className="form-control" id="cpassword" name="cpassword" aria-describedby="emailHelp" />
              </div>
            </div>
          </div>

          <div className="row">
          <label htmlFor="gender" className="form-label mt-2">Gender</label>
            <div className="col">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                  <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
              </div>
              <div className="form-check form-check-inline mx-3">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                  <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
              </div>
              <div className="form-check form-check-inline mx-3">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
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

export default signup
