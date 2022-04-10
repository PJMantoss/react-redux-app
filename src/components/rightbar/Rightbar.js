import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Recommendation from '../recommendation/Recommendation';

const Rightbar = () => {
  return (
    <div className='rightbar'>
        <div className='rightbarWrapper'>
            <Recommendation type='' />
            <Recommendation type='' />
            <Recommendation type='' />
            <button>
                See More
                <ArrowDropDownIcon />
            </button>
        </div>
    </div>
  )
}

export default Rightbar