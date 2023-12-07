import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { teams } from '../Assets/data/teams'

const Teams = () => {
    return (
        <>
            <Navbar />
            <div className="contents">
                <div className="left">
                    <ul className="leftItem">
                        <li className='item'><Link className="dropdown-item" to="/dashboard">
                            <i className="fa-solid fa-house"></i><span>Dashboard</span></Link>
                        </li>
                        <li className='item'><Link className="dropdown-item" to="/friends">
                            <i className="fa-solid fa-user-group"></i><span>Friends</span></Link>
                        </li>
                        <li className='item'><Link className="dropdown-item" to="/teams" style={{color: "white"}}>
                            <i className="fa-solid fa-people-group" style={{color: "white"}}></i><span>Teams</span></Link>
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
                    <h1>Teams</h1>
                    <div className="third">
                        <table className="table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Team Name</th>
                                    <th scope="col">Total Members</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teams.map((team, id) => (
                                    <tr key={id}>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="" style={{ height: "30px" }}>
                                                    <img src={team.image} alt='' className="clientImg" />
                                                </div>
                                                <div className="align-self-center ms-2 clientDetails">
                                                    <span style={{ fontWeight: "600", fontSize: "14px" }}>{team.name}</span>
                                                    <span style={{ fontWeight: "300", fontSize: "12px" }}>{team.lead}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{team.members}</td>
                                        <td>
                                            <span className={`badge bg-${team.status.type}`}>{team.status.value}</span>
                                        </td>
                                        <td>{team.date}</td>
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

export default Teams
