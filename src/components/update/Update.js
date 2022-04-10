import React, { useState } from 'react';
import Warning from '../warning/Warning';
import './Warning.css';

const Update = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
  return (
    <div className='update'>
        <div className='updateWrapper'>
            <h3 className='updateTitle'>Update Your Account</h3>
            <Warning />
            <button className='delete'>Delete Your Account</button>
            <div className='updateContainer'>
                <form></form>
            </div>
        </div>
    </div>
  )
}

export default Update