import './Navbar.css'
import Avatar from "../../Assets/Images/Avatar.jpg";
import { useState } from 'react';
const Navbar = () => {

    const [sidebar, setSidebar] = useState(true)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <p>CORONA</p>
                </div>
                <div className="logo-res">
                    <p>C</p>
                </div>

                <div className="navbar-content">
                    <i className="fa-solid fa-bars navbar-button"></i>
                    <input className='seacrh-box' type="" placeholder='Search products' />

                    <div className="button-group">
                        <div className="button">
                            <button className='new-project-btn'>
                                <i className="fa-solid fa-plus"></i>Create New Project
                            </button>
                        </div>
                        <div className='grid'>
                            <i className="fa-solid fa-table-cells-large"></i>
                        </div>
                        <div className='message'>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className='bell'>
                            <i className="fa-solid fa-bell"></i>
                        </div>
                    </div>
                    <div className="user-info">
                        <img className='avatar-img' src={Avatar} alt="" />
                        <span className='avatar-name'>Henry Klein</span>
                    </div>

                    <i className="fa-solid fa-align-right button-res" onClick={showSidebar}></i>
                </div>
            </div>

            <div className='sidebar' style={{ right: sidebar ? "0" : "-100%" }}>

                <div className="sidebar-user-info">
                    <div className="user-details">
                        <img className='avatar-image' src={Avatar} alt="" />
                        <div className="name-type">
                            <p className='name'>Henry Klein</p>
                            <p className='type'>Gold Member</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis-vertical sidebar-options"></i>
                </div>

                <h3 className='navigation-title'>Navigation</h3>

                <ul>
                    <li className='dash'>
                        <span className='menu-icon dashboard'>
                            <i className="fa-solid fa-gauge-simple-high"></i>
                        </span>
                        <span className='menu-title dash-title'>Dashboard</span>
                    </li>
                    <li>
                        <span className='menu-icon ui'>
                            <i className="fa-solid fa-laptop"></i>
                        </span>
                        <span className='menu-title'>Basic UI Elements</span>
                    </li>
                    <li>
                        <span className='menu-icon form'>
                            <i className="fa-solid fa-list-check"></i>
                        </span>
                        <span className='menu-title'>Form Elements</span>
                    </li>
                    <li>
                        <span className='menu-icon tables'>
                            <i className="fa-solid fa-table"></i>
                        </span>
                        <span className='menu-title'>Tables</span>
                    </li>
                    <li>
                        <span className='menu-icon charts'>
                            <i className="fa-solid fa-chart-simple"></i>
                        </span>
                        <span className='menu-title'>Charts</span>
                    </li>
                    <li>
                        <span className='menu-icon icons'>
                            <i className="fa-solid fa-icons"></i>
                        </span>
                        <span className='menu-title'>Icons</span>
                    </li>
                    <li>
                        <span className='menu-icon user-pages'>
                            <i className="fa-solid fa-shield-halved"></i>
                        </span>
                        <span className='menu-title'>User Pages</span>
                    </li>
                    <li>
                        <span className='menu-icon docs'>
                            <i className="fa-solid fa-book"></i>
                        </span>
                        <span className='menu-title'>Documentation</span>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Navbar
