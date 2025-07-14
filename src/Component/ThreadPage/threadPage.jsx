import React, { useState } from "react";
import "./threadPage.css";

const threads = [
  {
    user: {
      avatar: "https://i.pravatar.cc/150?img=1",
      username: "jhol00x",
      time: "1m",
    },
    content: "You already know that you cannot cover the sun with your hand 🌞",
    replies: 2,
    reposts: 1,
    likes: 12,
  },
  {
    user: {
      avatar: "https://i.pravatar.cc/150?img=2",
      username: "gwanguri77",
      time: "5m",
    },
    content:
      "I'm having a debate with my friends — is pineapple on pizza acceptable or a crime against food? 🍍🍕",
    replies: 64,
    reposts: 12,
    likes: 88,
  },
  {
    user: {
      avatar: "https://i.pravatar.cc/150?img=3",
      username: "mactyler",
      time: "10m",
    },
    content:
      "Best summer memory = hearing the ice cream truck coming down the street 🍦",
    replies: 9,
    reposts: 4,
    likes: 23,
  },
  {
    user: {
      avatar: "https://i.pravatar.cc/150?img=1",
      username: "jhol00x",
      time: "1m",
    },
    content: "You already know that you cannot cover the sun with your hand 🌞",
    replies: 2,
    reposts: 1,
    likes: 12,
  },
  {
    user: {
      avatar: "https://i.pravatar.cc/150?img=2",
      username: "gwanguri77",
      time: "5m",
    },
    content:
      "I'm having a debate with my friends — is pineapple on pizza acceptable or a crime against food? 🍍🍕",
    replies: 64,
    reposts: 12,
    likes: 88,
  },
  {
    user: {
      avatar: "https://i.pravatar.cc/150?img=3",
      username: "mactyler",
      time: "10m",
    },
    content:
      "Best summer memory = hearing the ice cream truck coming down the street 🍦",
    replies: 9,
    reposts: 4,
    likes: 23,
  },
];

const ThreadPage = () => {
  const [tab, setTab] = useState("foryou");

  return (
    <div className="thread-container">
    
      <div className="thread-tabs">
        <span
          className={tab === "foryou" ? "active" : ""}
          onClick={() => setTab("foryou")}
        >
          For You
        </span>
        <span
          className={tab === "following" ? "active" : ""}
          onClick={() => setTab("following")}
        >
          Following
        </span>
      </div>

        {threads.map((thread, index) => (
        <div className="thread-post" key={index}>
          <img src={thread.user.avatar} alt="avatar" className="avatar" />
          <div className="thread-content">
            <div className="thread-header">
              <span className="username">{thread.user.username}</span>
              <span className="time">{thread.user.time}</span>
            </div>
            <p className="text">{thread.content}</p>
            <div className="thread-actions">
              <span>💬 {thread.replies}</span>
              <span>🔁 {thread.reposts}</span>
              <span>❤️ {thread.likes}</span>
              <span>📤</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreadPage;
