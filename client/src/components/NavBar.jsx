import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';
import bell from '../assets/icons/icons8-bell-40.png';
import user from '../assets/icons/icons8-user-50.png';

function NavBar() {
  const today = new Date().toLocaleDateString(); // Formats the date

  const [fullName, setFullName] = useState("");

  useEffect(() => {
    // Fetch the logged-in user's name from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setFullName(storedUser.fullName);
    }
  }, []);

  return (
    <nav>
      <div className="left-side">
        <div className="logo">TaskPilot</div>
        <div className="user">
          <p className="welcome">Welcome back, {fullName || "Guest"}</p>
          <p className="user-welcome-date">{today}</p>
        </div>
      </div>
      <div className="right-side">
        <input 
          type="text"
          placeholder="Search..."
          className="searchbar"
        />
        <div className="nav-img-icon">
          <img src={bell} alt="Notifications" />
          <img src={user} alt="User" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
