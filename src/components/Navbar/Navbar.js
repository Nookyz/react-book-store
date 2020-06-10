import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <header className="App-header">
      <div className='header-container'>

        <div className='nav-link'>
          <NavLink to='/' exact activeClassName="active">Home</NavLink>
        </div>
        <div className='nav-link'>
          <NavLink to='/cart'  activeClassName="active">Cart</NavLink>
        </div>

      </div>
    </header>
  )
}

export default Navbar
