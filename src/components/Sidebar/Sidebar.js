import React from 'react'
import { NavLink } from 'react-router-dom'
import './Style.css'

const Sidebar = () => {

    const activeStyle = ({ isActive }) => {
        return {
            color: isActive ? "white" : "#858585"
        }
    }

    return (
        <div className="left">
            <ul className="leftItem">
                <li className='item'><NavLink className="dropdown-item" to="/dashboard" style={activeStyle}>
                    <i className="fa-solid fa-house"></i><span>Dashboard</span></NavLink>
                </li>
                <li className='item'><NavLink className="dropdown-item" to="/friends" style={activeStyle}>
                    <i className="fa-solid fa-user-group"></i><span>Friends</span></NavLink>
                </li>
                <li className='item'><NavLink className="dropdown-item" to="/teams" style={activeStyle}>
                    <i className="fa-solid fa-people-group"></i><span>Teams</span></NavLink>
                </li>
                <li className='item'><NavLink className="dropdown-item" to="/addemployee" style={activeStyle}>
                    <i className="fa-solid fa-user-plus"></i><span>Add Employee</span></NavLink>
                </li>
                <li className='item'><NavLink className="dropdown-item" to="/#">
                    <i className="fa-solid fa-toggle-off"></i><span>Buttons</span></NavLink>
                </li>
                <li className='item'><NavLink className="dropdown-item" to="/#">
                    <i className="fa-solid fa-paste"></i><span>Modals</span></NavLink>
                </li>
                <li className='item'><NavLink className="dropdown-item" to="/#">
                    <i className="fa-solid fa-table-columns"></i><span>Tables</span></NavLink>
                </li>
                <li className='item'><NavLink className="dropdown-item" to="/#">
                    <i className="fa-solid fa-file"></i><span>Pages</span></NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
