import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/dashboard')
            .then((users) => {
                localStorage.getItem('token')
                setUsers(users.data)
                console.log(users)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className='signup' style={{ height: "100vh" }}>
            <div className="container">
                <h1 className='heading' style={{ fontSize: "2.5rem" }}>Dashboard</h1>

                <div className="">
                    <p className="text">Fullname: </p>
                    <p className="text">Email: </p>
                    <p className="text">Phone: </p>
                </div>

                <button type="submit" className="btn">Logout</button>
            </div>
            {/* {
                users.map((user, _id) => {
                    return <div style={{ padding: "15px 350px" }} key={_id}>
                        <div className="card text-center">
                            <div className="card-header">
                                <h5>{user.username}</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Fullname: {user.fullname}</p>
                                <p className="card-text">Email: {user.email}</p>
                                <p className="card-text">Phone: {user.phNo}</p>
                            </div>
                        </div>
                    </div>
                })
            } */}
        </div>
    )
}

export default Dashboard
