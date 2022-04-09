import React from 'react';
import './MenuLink.css';

const MenuLink = ({ icon, text }) => {
  return (
    <div className='menulink'>
        <span className='menuLinkText'> {text} </span>
        <span className='menuLinkTextName'>
            {text === 'Logout' && '( John )'}
        </span>
    </div>
  )
}

export default MenuLink