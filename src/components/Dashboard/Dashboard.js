import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import Navbar from '../Navbar/Navbar';
import { clients } from '../Assets/data/clients';

const Dashboard = () => {

    return (
        <>
            <Navbar />
            <div className="contents">
                <div className="left">
                    <ul className="leftItem">
                        <li className='item'><Link className="dropdown-item" to="/dashboard" style={{color: "white"}}>
                            <i className="fa-solid fa-house" style={{color: "white"}}></i><span>Dashboard</span></Link>
                        </li>
                        <li className='item'><Link className="dropdown-item" to="/friends">
                            <i className="fa-solid fa-user-group"></i><span>Friends</span></Link>
                        </li>
                        <li className='item'><Link className="dropdown-item" to="/teams">
                            <i className="fa-solid fa-people-group"></i><span>Teams</span></Link>
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
                                        <i className="fa-solid fa-user" style={{ background: "#CC5500" }}></i>
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
                                        <i className="fa-solid fa-money-bill" style={{ background: "#50C878" }}></i>
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
                                        <i className="fa-solid fa-cart-shopping" style={{ background: "#0096FF" }}></i>
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
                                        <i className="fa-solid fa-message" style={{ background: "#5F9EA0" }}></i>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body" style={{ padding: "15px 5px" }}>
                                            <h5 className="card-title">Pending contacts</h5>
                                            <p className="card-text">35</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="third">
                        <table className="table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Client</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                { clients.map((client, id) => (
                                    <tr key={id}>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="" style={{ height: "30px" }}>
                                                    <img src={client.image} alt='' className="clientImg" />
                                                </div>
                                                <div className="align-self-center ms-2 clientDetails">
                                                    <span style={{ fontWeight: "600", fontSize: "14px" }}>{client.name}</span>
                                                    <span style={{ fontWeight: "300", fontSize: "12px" }}>{client.designation}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{client.amount}</td>
                                        <td>
                                            <span className={`badge bg-${client.status.type}`}>{client.status.value}</span>
                                        </td>
                                        <td>{client.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
