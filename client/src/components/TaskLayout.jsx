import React from 'react'
import taskImg from "../assets/llustrations/6850064.jpg"
import '../styles/taskLayout.css'
import {done,inprogress,synch} from '../assets/icons/icons'
function TaskLayout() {


  return (
    <div className='task-layout'>
     <div className="task-flex">
     <div className="task-array">
        <div className="task-left">
          <div className="task-left-box">
          <div className="task">
            <p>Task Left</p>
            <p>4</p>
          </div>
          <img src={taskImg} alt="task-left" />
          </div>
          <button>Add More Tasks</button>
        </div>
       
      </div>
      <div className="task-checklist">
          <div className="checklist">
            <img src={done}alt="" />
            <p>Done</p>
            <p className='checkLeft'>12</p>
          </div>
          <div className="checklist">
            <img src={inprogress}alt="" />
            <p>In progress</p>
            <p className='checkLeft'>4</p>
          </div>
          <div className="checklist">
            <img src={synch}alt="" />
            <p>In queue</p>
            <p className='checkLeft'>2</p>
          </div>
      </div>
     </div>

    <div className="task-container">
    <div className="task-list-flex">
      <div className='task-info'>
      <p className='p-date'>02 mar 2025</p>
      <p className='heading'>Web development</p>
      <p className='subHeading'>design</p>
      </div>
      <div>
         <p className='days-left'>3 days left</p>
        </div>          
     </div>
     <div className="task-list-flex">
      <div className='task-info'>
      <p className='p-date'>02 mar 2025</p>
      <p className='heading'>Web development</p>
      <p className='subHeading'>design</p>
      </div>
      <div>
         <p className='days-left'>3 days left</p>
        </div>          
     </div>
     
     <div className="task-list-flex">
      <div className='task-info'>
      <p className='p-date'>02 mar 2025</p>
      <p className='heading'>Web development</p>
      <p className='subHeading'>design</p>
      </div>
      <div>
         <p className='days-left'>3 days left</p>
        </div>          
     </div>
    </div>
    </div>
  )
}

export default TaskLayout
