import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import Navbar from '../Navbar/Navbar';
import avatar from '../Assets/img/avatar.png'

const Dashboard = () => {

    let navigate = useNavigate();
    const [user, setUser] = useState("");

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate("/login")
    }

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
        // <div className='signup'>
        //     <div className="container">
        //         <h1 className='heading' style={{ fontSize: "2.5rem" }}>Dashboard</h1>
        //         <div className="">
        //             <p className="text" style={{ fontSize: "18px", fontWeight: "500" }}>Fullname : <span style={{ fontWeight: "400" }}>{user.fullname}</span></p>
        //             <p className="text" style={{ fontSize: "18px", fontWeight: "500" }}>Gender : <span style={{ fontWeight: "400" }}>{user.gender}</span></p>
        //             <p className="text" style={{ fontSize: "18px", fontWeight: "500" }}>Email : <span style={{ fontWeight: "400" }}>{user.email}</span></p>
        //             <p className="text" style={{ fontSize: "18px", fontWeight: "500" }}>Phone : <span style={{ fontWeight: "400" }}>{user.phNo}</span></p>
        //         </div>
        //         <button type="submit" className="btn" onClick={handleLogout}>Logout</button>
        //     </div>
        // </div>
        <>
            <Navbar />
            <div className="contents">
                <div className="left">
                    <ul className="leftItem">
                        <li className='item'><Link className="dropdown-item" to="/#">
                            <i className="fa-solid fa-house"></i><span>Dashboard</span></Link>
                        </li>
                        <li className='item'><Link className="dropdown-item" to="/#">
                            <i className="fa-solid fa-rectangle-list"></i><span>Forms</span></Link>
                        </li>
                        <li className='item'><Link className="dropdown-item" to="/#">
                            <i className="fa-solid fa-layer-group"></i><span>Cards</span></Link>
                        </li>
                        <li className='item'><Link className="dropdown-item" to="/#">
                            <i className="fa-solid fa-chart-pie"></i><span>Charts</span></Link>
                        </li>
                        <li className='item'><Link className="dropdown-item" to="/#">
                            <i className="fa-solid fa-toggle-off"></i><span>Buttons</span></Link>
                        </li>
                        <li className='item'><Link className="dropdown-item" to="/#">
                            <i className="fa-solid fa-paste"></i><span>Modals</span></Link>
                        </li>
                        <li className='item'><Link className="dropdown-item" to="/#">
                            <i className="fa-solid fa-table-columns"></i><span>Tables</span></Link>
                        </li>
                        <li className='item'><Link className="dropdown-item" to="/#">
                            <i className="fa-solid fa-file"></i><span>Pages</span></Link>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <h1>Dashboard</h1>
                    <div className="first">
                        <div className="description">
                            <i className="fa-solid fa-star" style={{ color: "#ffffff", margin: "0 8px" }}></i>Star this project on GitHub
                        </div>
                        <div className="viewmore">
                            <Link to='/' style={{ marginRight: "8px" }}>View more &#8594;</Link>
                        </div>
                    </div>
                    <div className="second">
                        <div className="cards">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                    <i className="fa-solid fa-user" style={{background: "#CC5500"}}></i>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Total Clients</h5>
                                            <p className="card-text">6389</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                    <i className="fa-solid fa-money-bill" style={{background: "#50C878"}}></i>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Accont Balance</h5>
                                            <p className="card-text">$ 46,76089</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                    <i className="fa-solid fa-cart-shopping" style={{background: "#0096FF"}}></i>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">New Sales</h5>
                                            <p className="card-text">376</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                    <i className="fa-solid fa-message" style={{background: "#5F9EA0"}}></i>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body" style={{padding: "15px 5px"}}>
                                            <h5 className="card-title">Pending contacts</h5>
                                            <p className="card-text">35</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <span>.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
