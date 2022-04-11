import React from 'react';
import { useSelector } from 'react-redux';
import './MenuLink.css';

const MenuLink = ({ icon, text }) => {
  const name = useSelector(state => state.user.name);

  return (
    <div className='menulink'>
        <span className='menuLinkText'> {text} </span>
        <span className='menuLinkTextName'>
            {text === 'Logout' && `( ${name} )`}
        </span>
    </div>
  )
}

export default MenuLink;