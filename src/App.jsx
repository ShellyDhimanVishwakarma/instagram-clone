import React, { useState } from 'react';
import './App.css';
import LeftSide from './Component/leftSide';
import MiddleSide from './Component/middleSide';
import RightSide from './Component/rightSide';
import Profile from './Screen/Profile/profile'; 
import Signup from './Component/Signup/signUp';
import SearchPage from './Component/SearchPage/searchPage';
import MessagePage from './Component/MessagePage/messagePage';
import ReelsPage from './Component/ReelsPage/reelsPage';
import Explore from './Component/Explore/explore';
import NotificationPage from './Component/NotificationPage/notificationPage';
import ThreadPage from './Component/ThreadPage/threadPage';


function App() {
  const [activePage, setActivePage] = useState('home'); 
   

  return (
    <div className="App">
      <div className='leftSideHome'>
        <LeftSide onPageChange={setActivePage} /> 
      </div>

      <div className='middleSide'>
        {activePage === 'home' && <MiddleSide />}
        {activePage === 'profile' && <Profile />}
        {activePage === 'signUp' && <Signup />} 
        {activePage === 'searchPage' && <SearchPage />}
        {activePage === 'messagePage' && <MessagePage />}
        {activePage === 'reelsPage' && <ReelsPage />}
        {activePage === 'explore' && <Explore />}
        {activePage === 'notificationPage' && <NotificationPage />}
        {activePage === 'threadPage' && <ThreadPage />}
        </div>

      <div className='rightSide'>
        <RightSide />
      </div>
    </div>
  );
}

export default App;  