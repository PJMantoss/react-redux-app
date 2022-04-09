import React from 'react';
import {
    ExitToAppOutlinedIcon, 
    FileCopyOutlinedIcon, 
    GroupOutlinedIcon,
    HearingOutlinedIcon,
    HomeOutlinedIcon,
    ListOutlinedIcon,
} from '@mui/icons-material';
import HearingOutlinedIcon from '@mui/icons-material/HearingOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
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
            <MenuLink icon={<FileCopyOutlinedIcon />} text='Pages' />
            <MenuLink icon={<PhotoSizeSelectActualOutlinedIcon />} text='Photos' />
            <MenuLink icon={<MovieCreationOutlinedIcon />} text='Videos' />
            <MenuLink icon={<ScheduleOutlinedIcon />} text='Schedule' />
            <MenuLink icon={<HearingOutlinedIcon />} text='Wishlist' />
            <MenuLink icon={<SettingsOutlinedIcon />} text='Settings' />
            <MenuLink icon={<ExitToAppOutlinedIcon />} text='Logout' />
        </div>
    </div>
  )
}

export default LeftBar;