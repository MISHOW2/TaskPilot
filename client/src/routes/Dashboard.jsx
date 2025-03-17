import React from 'react'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
function Dashboard() {
  return (
    <div>
     <NavBar/>
     <div className="dashboad-layout">
      <Sidebar/>
     </div>
    </div>
  )
}

export default Dashboard
