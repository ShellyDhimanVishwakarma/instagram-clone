import React from 'react';
import './leftSide.css';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import TelegramIcon from '@mui/icons-material/Telegram';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GestureIcon from '@mui/icons-material/Gesture';
import MenuIcon from '@mui/icons-material/Menu';

const LeftSide = ({ onPageChange }) => {
  return (
    <div className='leftSidePart'>
      <div className='logoPart'>
        <img
          className='logoImg'
          src='https://brandlogo.org/wp-content/uploads/2024/03/Instagram-Wordmark-2016-Logo.png.webp'
          alt='Instagram Logo'
        />
      </div>

      <div className='navLinkPart'>
        <div className='navLink' onClick={() => onPageChange('home')}>
          <HomeIcon sx={{ fontSize: '30px', margin: '0 20px 0 0' }} />
          <div className='navName'>Home</div>
        </div>

        <div className='navLink' onClick={() => onPageChange('searchPage')}>
          <SearchIcon sx={{ fontSize: '30px', margin: '0 20px 0 0' }} />
          <div className='navName'>Search</div>
        </div>

        <div className='navLink' onClick={() => onPageChange('explore')}>
          <ExploreIcon sx={{ fontSize: '30px', margin: '0 20px 0 0' }} />
          <div className='navName'>Explore</div>
        </div>

        <div className='navLink' onClick={() => onPageChange('reelsPage')}>
          <VideoLibraryIcon sx={{ fontSize: '30px', margin: '0 20px 0 0' }} />
          <div className='navName'>Reels</div>
        </div>

        <div className='navLink' onClick={() => onPageChange('messagePage')}>
          <TelegramIcon sx={{ fontSize: '30px', margin: '0 20px 0 0' }} />
          <div className='navName'>Messages</div>
        </div>

        <div className='navLink' onClick={() => onPageChange('notificationPage')}>
          <NotificationsIcon sx={{ fontSize: '30px', margin: '0 20px 0 0' }} />
          <div className='navName'>Notifications</div>
        </div>

        <div className='navLink' onClick={() => onPageChange('signUp')}>
          <AddBoxIcon sx={{ fontSize: '30px', margin: '0 20px 0 0' }} />
          <div className='navName'>Create</div>
        </div>

        <div className='navLink' onClick={() => onPageChange('profile')}>
          <AccountCircleIcon sx={{ fontSize: '30px', margin: '0 20px 0 0' }} />
          <div className='navName'>Profile</div>
        </div>
      </div>

      <div className='belowPart'>
        <div className='navLink' onClick={() => onPageChange('threadPage')}>
          <GestureIcon sx={{ fontSize: '30px', margin: '0 20px 0 0' }} />
          <div className='navName'>Threads</div>
        </div>

        <div className='navLink'>
          <MenuIcon sx={{ fontSize: '30px', margin: '0 20px 0 0' }} />
          <div className='navName'>More</div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
