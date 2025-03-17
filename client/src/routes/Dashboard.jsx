import React from 'react'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import TaskLayout from '../components/TaskLayout'
import '../styles/dashboardLayout.css'
function Dashboard() {
  return (
    <div>
     <NavBar/>
     <div className="dashboad-layout">
      <Sidebar/>
      <TaskLayout/>
     </div>
    </div>
  )
}

export default Dashboard
