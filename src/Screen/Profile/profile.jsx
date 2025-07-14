import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          className="profile-pic"
          src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
          alt="Profile"
        />
        <div className="profile-info">
          <div className="top-line">
            <h2>Shelly Dhiman</h2>
            <button className="edit-btn">Edit profile</button>
            <button className="settings-btn">⚙️</button>
          </div>
          <div className="counts">
            <span><strong>0</strong> Posts</span>
            <span><strong>0</strong> Followers</span>
            <span><strong>8</strong> Following</span>
          </div>
          <div className="bio">
            <strong>dhiman_shelly101</strong> <span className="pronoun">she/her</span><br />
            <p>❤️😁</p>
          </div>
        </div>
      </div>

      <div className="discover-section">
        <div className="discover-header">
          <h4>Discover people</h4>
          <a href="#">See all</a>
        </div>
        <div className="suggested-users">
          <div className="user-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram" />
            <div className="user-details">
              <strong>Instagram</strong>
              <span className="subtext">Instagram official account</span>
            </div>
            <button className="follow-btn">Follow</button>
          </div>
          <div className="user-card">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Anne" />
            <div className="user-details">
              <strong>Anne Hathaway</strong>
              <span className="subtext">Instagram recommended</span>
            </div>
            <button className="follow-btn">Follow</button>
          </div>
                    <div className="user-card">
            <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" alt="" />
            <div className="user-details">
              <strong>Cool</strong>
              <span className="subtext">Hello guys</span>
            </div>
            <button className="follow-btn">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
