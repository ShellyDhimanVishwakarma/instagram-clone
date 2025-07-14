import React, { useState } from "react";
import "./notificationPage.css";

const notifications = [
  {
    avatar: "https://i.pravatar.cc/150?img=1",
    username: "charlotte.kim ",
    activity: "mentioned you in a comment.",
    time: "1h",
    button: "Following",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=2",
    username: "naomi.jonsson",
    activity: "liked a message.❤️",
    time: "2h",
    button: "Following",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=3",
    username: "instagram",
    activity: "is following you.",
    time: "3h",
    button: "Following",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=4",
    username: "aaron.bond",
    activity: "is following you.",
    time: "4h",
    button1: "Confirm",
    button: "Follow",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=5",
    username: "catherine.ng 🥰",
    activity: "is following you.",
    time: "5h",
     button1: "Confirm",
    button: "Follow",
  },
    {
    avatar: "https://i.pravatar.cc/150?img=4",
    username: "aaron.bond",
    activity: "is following you.",
    time: "4h",
     button1: "Confirm",
     button: "Follow",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=1",
    username: "charlotte.kim",
    activity: "mentioned you in a comment.",
    time: "1h",
    button: "Following",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=3",
    username: "instagram",
    activity: "is following you.",
    time: "3h",
    button1: "Confirm",
    button: "Follow",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=2",
    username: "naomi.jonsson",
    activity: "liked a message.❤️",
    time: "2h",
  },
];

const NotificationPage = () => {
  const [tab, setTab] = useState("you");

  return (
    <div className="notification-container">
    
      <div className="notification-tabs">
        <span
          className={tab === "following" ? "active" : ""}
          onClick={() => setTab("following")}
        >
          Following
        </span>
        <span
          className={tab === "you" ? "active" : ""}
          onClick={() => setTab("you")}
        >
          You
        </span>
      </div>

     
      <div className="notification-section">
        <p className="section-title">Today</p>

        {notifications.map((item, index) => (
          <div className="notification-item" key={index}>
            <img src={item.avatar} alt="avatar" className="notif-avatar" />

            <div className="notif-text">
              <p>
                <strong>{item.username}</strong> {item.activity}
              </p>
              <span className="notif-time">{item.time}</span>
            </div>

            <div className="notif-buttons">
              {item.button1 && (
                <button className="notif-btn confirm">{item.button1}</button>
              )}
              {item.button && (
                <button
                  className={`notif-btn ${
                    item.button === "Follow" ? "follow" : "following"
                  }`}
                >
                  {item.button}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
