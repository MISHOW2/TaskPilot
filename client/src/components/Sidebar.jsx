import React from 'react'
import '../styles/sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="navigation-sidebar">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Task</a></li>
          <li><a href="">Calender</a></li>
          <li><a href="">Analytics</a></li>
          <li><a href="">settings</a></li>

        </ul>
      </div>

      <div className="additional-links">
        <p>Additional Links</p>
        <ul>
          <li><a href="">Help</a></li>
          <li><a href="">Feedback</a></li>
          <li><a href="">Logout</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
