import React, { useEffect, useState } from 'react'
import avatar from '../Assets/img/avatar.png'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [user, setUser] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:5000/dashboard', {
                    token: localStorage.getItem('token'),
                });
                const data = await response.data;
                setUser(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/dashboard'>Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                        <div className="d-flex" style={{alignItems: "center"}}>
                            <img src={avatar} alt="" style={{ height: "30px", width: "30px" }} />
                            <span className='mx-2'> {user.fullname}</span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
