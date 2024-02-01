import React from 'react';
import './Profile.css';

// Компонент профілю, який відображає інформацію про користувача
const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  // Створюємо масив елементів li на основі даних про статистику
  const statItems = Object.entries({ Followers: followers, Views: views, Likes: likes }).map(([label, quantity]) => (
    <li key={label} className="item">
      <span className="label">{label}</span>
      <span className="quantity">{quantity}</span>
    </li>
  ));

  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">{statItems}</ul>
    </div>
  );
};

export default Profile;
