import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then((users) => setUsers(users.data))
            .catch((error) => console.log(error))
    }, [])
    return (
        <div>
            <h1 className='text-center mt-4' style={{ fontWeight: "700", marginBottom: "25px" }}>Users</h1>
            {
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
            }
        </div>
    )
}

export default Users
