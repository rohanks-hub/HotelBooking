import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <nav>
            <ul>
                <li className='listitem'><Link to="/">Home</Link></li>
                <li className='listitem'><Link to="/hotels">Booking</Link></li>
                <li className='listitem'><Link to="/about">About Us</Link></li>
                <li className='listitem'><Link to="/admindashboard">Admin Dashboard</Link></li>
              </ul>
        </nav>
    </div>
  )
}

export default Header