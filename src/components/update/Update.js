import React, { useState } from 'react';
import Warning from '../warning/Warning';
import { useSelector, useDispatch } from 'react-redux';
import { update, remove } from '../../redux/userSlice';
import './Update.css';

const Update = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleUpdate = e => {
        e.preventDefault();
        dispatch(update({name, email}));
    };

    const handleDelete = e => {
        e.preventDefault();
        dispatch(remove());
    };

  return (
    <div className='update'>
        <div className='updateWrapper'>
            <h3 className='updateTitle'>Update Your Account</h3>
            <Warning />
            <button 
                className='delete'
                onClick={}
            >
                Delete Your Account
            </button>
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
                            placeholder={user.name} 
                            className='formInput'
                            onChange={e => setName(e.target.value)} 
                        />
                    </div>

                    <div className='formItem'>
                        <label>E-Mail</label>
                        <input 
                            type='text' 
                            placeholder={user.email}  
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

                    <button 
                        className='updateButton'
                        onClick={handleUpdate}
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Update;