import React, { useState } from 'react';
import '../styles/navbar.css';
import bell from '../assets/icons/icons8-bell-40.png'
import user from '../assets/icons/icons8-user-50.png'
function NavBar() {
  const today = new Date().toLocaleDateString(); // Formats the date

  const [fullName,setFullName] = useState("ntsako mixo");


  return (
    <nav>
      <div className="left-side">
        <div className="logo">TaskPilot</div>
        <div className="user">
          <p className="welcome">Welcome back, {fullName}</p>
          <p className="user-welcome-date">{today}</p> {/* Fixed className */}
        </div>
      </div>
      <div className="right-side">
        <input 
          type="text"
          placeholder="Search.."
          className="searchbar"
        />
        <div className="nav-img-icon">
          <img src={bell} alt="" />
          <img src={user} alt="" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
