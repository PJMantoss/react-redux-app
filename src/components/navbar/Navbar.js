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
            <div className='navbarCenter'>
                <div className='search'>
                    <input 
                        type='text'
                        placeholder='Search for something...'
                        className='searchInput'
                    />
                </div>
            </div>
            <div className='navbarRight'>
                <img src='' alt='' className='' />
                <span className=''></span>
                <ArrowDropDownIcon />
            </div>
        </div>
    </div>
  )
}

export default Navbar