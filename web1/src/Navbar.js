import React from 'react'
import './Navbar.css';
import LogoDevIcon from '@mui/icons-material/LogoDev';
function Navbar() {
  return (
    <div className='nav-container'>
        <div className="nav__left">
            <LogoDevIcon />
            <h3>Abstract</h3>
            <h3>Help Center</h3>
        </div>
        <div className="nav__right">
            <button id='b1'>Submit a request</button>
            <button id='b2'>Sign in</button>

        </div>
      
    </div>
  )
}

export default Navbar;
