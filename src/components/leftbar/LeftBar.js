import React from 'react';
import {
    ExitToAppOutlinedIcon, 
    FileCopyOutlinedIcon, 
    GroupOutlinedIcon,
    HearingOutlinedIcon,
    HomeOutlinedIcon,
    ListOutlinedIcon,
    MovieCreationOutlinedIcon,
    PhotoSizeSelectActualOutlinedIcon,
    ScheduleOutlinedIcon,
    SettingsOutlinedIcon,
    ShoppingBasketOutlinedIcon
} from '@mui/icons-material';
import MenuLink from '../menuLink/MenuLink';
import './LeftBar.css'

const LeftBar = () => {
  return (
    <div className='leftbar'>
        <div className='leftbarWrapper'>
            <MenuLink icon={<HomeOutlinedIcon />} text='Homepage' />
            <MenuLink icon={<ListOutlinedIcon />} text='Lists' />
            <MenuLink icon={<ShoppingBasketOutlinedIcon />} text='Products' />
            <MenuLink icon={<GroupOutlinedIcon />} text='Groups' />
            <MenuLink icon={< />} text='' />
            <MenuLink icon={< />} text='' />
            <MenuLink icon={< />} text='' />
            <MenuLink icon={< />} text='' />
            <MenuLink icon={< />} text='' />
            <MenuLink icon={< />} text='' />
            <MenuLink icon={< />} text='' />
        </div>
    </div>
  )
}

export default LeftBar