import React from "react";
import "./messagePage.css";

const users = [
  { name: "jaded.elephant17", msg: "OK", time: "2m" },
  { name: "kyrin_kryaks", msg: "Did you leave yet?", time: "2m" },
  { name: "ted_graham321", msg: "Sounds good! Let’s do it.", time: "45m" },
  { name: "Study Group", msg: "pic in u.pod: hahaha", time: "2h" },
  { name: "heaven.is.rewath", msg: "It snowed!!", time: "5h" },
  { name: "li_syatt020", msg: "🥺", time: "8h" },
  { name: "paisley.print.40", msg: "👋", time: "1d" },
];

function MessagePage() {
  return (
    <div className="dm-container">
   
      <div className="dm-header">
        <span>@okay_kaiden_459</span>
        <div className="dm-icons">
          <span className="icon">📽️</span>
          <span className="icon">✉️</span>
        </div>
      </div>

      
      <input type="text" className="dm-search" placeholder="Search" />

     
      <div className="dm-stories">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="story">
            <div className="story-avatar" />
            <span>User {i + 1}</span>
          </div>
        ))}
      </div>

   
      <div className="dm-messages">
        {users.map((user, i) => (
          <div className="message-row" key={i}>
            <div className="avatar" />
            <div className="message-info">
              <div className="username">{user.name}</div>
              <div className="preview">{user.msg} · {user.time}</div>
            </div>
            <span className="cam-icon">📽️</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessagePage;
