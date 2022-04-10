import React from 'react';
import './Recommendation.css'

const Recommendation = ({ type }) => {
    const title = type === 'user' 
           ? "Recommended for Joel" 
           : title = 'popular'
           ? "Popular on Chapolmi"
           : "Editor's Choice"

    const img = type
  return (
    <div className='recommendation'></div>
  )
}

export default Recommendation