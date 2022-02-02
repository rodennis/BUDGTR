import React from 'react';
import {Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return <nav>
      <div className='nav-left'>
          <Link className='sign-up' to='/signUp'>Sign Up</Link>
      </div>
      <div className='nav-middle'>
          <Link className='logo' to='/'> 
          <h1>BUDGTR</h1>
          </Link>
      </div>
      <div className='nav-right'>
      <Link className='log-in' to='/logIn'>Log In</Link>
      </div>
  </nav>;
}

export default Navbar;
