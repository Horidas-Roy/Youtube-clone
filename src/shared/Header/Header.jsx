/* eslint-disable react/prop-types */
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../assets/images/youTube.png"
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import './Header.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [inputSearch,setInputSearch]=useState('')
    return (
        <div className='header'>
            <div className="header_left flex">
            <MenuIcon/>
            <Link to='/'> <img className='header_logo w-[100%]' src={logo}/></Link>
            </div>
            <div className="header_search">
            <input onChange={(e)=>setInputSearch(e.target.value)} value={inputSearch} placeholder='search' type="text" />
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className='header_inputButton'/>
            </Link>
            </div>
           <div className="header_icons">
           <VideoCallIcon className='header_icon'/>
            <AppsIcon className='header_icon'/>
            <NotificationsIcon className='header_icon'/>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
           </div>
        </div>
    );
};

export default Header;