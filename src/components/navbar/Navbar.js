import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbarWrapper'>
            <div className='navbarLeft'>
                <span className='logo'>Chapolmi</span>
                <span className='navbarLink'></span>
                <span className='navbarLink'></span>
                <span className='navbarLink'></span>
            </div>
        </div>
    </div>
  )
}

export default Navbar