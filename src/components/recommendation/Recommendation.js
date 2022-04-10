import React from 'react';
import './Recommendation.css'

const Recommendation = ({ type }) => {
    const title = type === 'user' 
           ? "Recommended for Joel" 
           : title = 'popular'
           ? "Popular on Chapolmi"
           : "Editor's Choice";

    const img = type === 'user' 
            ? 'https://images.pexels.com/photos/5797991/pexels-photo-5797991.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' 
            : type === 'popular'
            ? 'https://images.pexels.com/photos/5191390/pexels-photo-5191390.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            : 'https://images.pexels.com/photos/2733659/pexels-photo-2733659.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';
  return (
    <div className='recommendation'>
        <span className='rightTitle'> {title} </span>
        <img src={img} alt='' className='rightImage' />
    </div>
  )
}

export default Recommendation