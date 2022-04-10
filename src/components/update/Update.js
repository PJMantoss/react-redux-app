import React, { useState } from 'react';
import Warning from '../warning/Warning';
import './Warning.css';

const Update = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
  return (
    <div className='update'>
        <div className='updateWrapper'>
            <h3 className='updateTitle'></h3>
            <Warning />
            <div className='updateContainer'></div>
        </div>
    </div>
  )
}

export default Update