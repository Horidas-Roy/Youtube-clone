import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../assets/images/youTube.png"
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="header_left">
            <MenuIcon/>
            <img className='header_logo' src={logo}/>
            </div>
            <div className="header_search">
            <input placeholder='search' type="text" />
            <SearchIcon className='header_inputButton'/>
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