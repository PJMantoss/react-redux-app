import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbarWrapper'>
            <div className='navbarLeft'>
                <span className='logo'>Chapolmi</span>
                <span className='navbarLink'>Home</span>
                <span className='navbarLink'>About</span>
                <span className='navbarLink'>Contact</span>
            </div>
            <div className='navarCenter'>
                <div className='search'>
                    <input 
                        type={} 
                        placeholder=''
                        
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar