import React from 'react';
import './reelsPage.css';

const ReelsPage = () => {
  return (
  <div className="reel-container">
  <video
    className="reel-video"
    src="https://www.w3schools.com/html/mov_bbb.mp4"
    autoPlay
    loop
    muted
    playsInline
    controls={false}
  ></video>

  <div className="reel-overlay">
    <div className="reel-info">
      <h4>@username</h4>
      <p>🎵 Song name - Artist</p>
    </div>

    <div className="reel-actions">
      <button>❤️</button>
      <button>💬</button>
      <button>📤</button>
    </div>
  </div>
</div>

  );
};

export default ReelsPage;