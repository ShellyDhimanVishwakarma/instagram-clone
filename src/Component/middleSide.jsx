import React from 'react'
import './middleSide.css';
import story from '../story.json'
import Post from './Post/post';

const MiddleSide = () => {
  const storys = story.story;
  return (
    <div className="middleHomeSide">
      <div className="mobileTopBar">
        <div className="instalogo">
        </div>
      </div>
      <div className="storyBlock">
        {
          storys?.map((item, index) => (
          <div className="storyParticular" key={index}>
          <div className="imageDIV">
            <img
              className="statusImg"src={item.img} />
          </div>
          <div className="profileName">{item.name}</div>
        </div>
          ))}  
      </div>
      <div className="postSection">
      <Post />
      </div>
    </div>
  );
};

export default MiddleSide;
