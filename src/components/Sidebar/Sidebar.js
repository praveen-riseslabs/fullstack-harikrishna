import React from 'react'
import './Sidebar.css'
import Avatar from '../../Assets/Images/Avatar.jpg'

const Sidebar = () => {
  return (
    <div className='sidebar'>

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
  )
}

export default Sidebar
