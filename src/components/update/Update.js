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
                <form>
                    <div className='formItem'>
                        <label>Profile Picture</label>
                        <div className='profilePic'>
                            <img />
                            <span></span>
                        </div>
                    </div>

                    <div className='formItem'>
                        <label></label>
                        <div className='profilePic'></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Update;