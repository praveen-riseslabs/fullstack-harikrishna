import axios from 'axios'
import React, { useState } from 'react'

const ResetPassword = () => {

    const [password, setPassword] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/forgot-password', { password });
            const { data } = response;
            if (data) {
                alert(data.status)
                console.log(data)
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
                <h1 className='heading' style={{ fontSize: "2.5rem" }}>Reset Password</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Password</label>
                                <input type="text" className="form-control" id="password" name="password" aria-describedby="emailHelp" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <button type="submit" className="btn">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword
