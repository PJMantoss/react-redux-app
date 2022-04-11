import React, { useState } from 'react';
import Warning from '../warning/Warning';
import './Update.css';

const Update = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    console.log(name, email)
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
                            <img 
                                src='https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' 
                                alt='' 
                                className='avatar' 
                            />
                            <span className='change'>Change</span>
                        </div>
                    </div>

                    <div className='formItem'>
                        <label>Username</label>
                        <input 
                            type='text' 
                            placeholder='Joel' 
                            className='formInput'
                            onChange={e => setName(e.target.value)} 
                        />
                    </div>

                    <div className='formItem'>
                        <label>E-Mail</label>
                        <input 
                            type='text' 
                            placeholder='joel@gmail.com' 
                            className='formInput' 
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='formItem'>
                        <label>Password</label>
                        <input 
                            type='password' 
                            className='formInput' 
                        />
                    </div>

                    <button className='updateButton'>Update</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Update;