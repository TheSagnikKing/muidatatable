import React, { useState } from 'react'
import './SidebarAnimation.css'

const SidebarAnimation = () => {

  const [open, setOpen] = useState(false)

  const [leftbarOpen, setLeftBarOpen] = useState(false)

  return (
    <main className="sidebar_container_main">
      <div className='sidebar_header'>
        <div className='left_btn' onClick={() => setLeftBarOpen((prev) => !prev)}>Open/Close</div>
        <button onClick={() => setOpen((prev) => !prev)}>Toggle</button>
      </div>
 
      <div className={`sidebar_dropdownmenu ${open ? 'active' : 'inactive'}`}>
          <h5 className={`sidebar_text ${open ? 'textactive' : 'textinactive'}`}>Dashboard</h5>
          <h5 className={`sidebar_text ${open ? 'textactive' : 'textinactive'}`}>Salon List</h5>
          <h5 className={`sidebar_text ${open ? 'textactive' : 'textinactive'}`}>Queue List</h5>
          <h5 className={`sidebar_text ${open ? 'textactive' : 'textinactive'}`}>Appointments</h5>
      </div>


      <main className={`leftbar ${leftbarOpen ? 'leftbar_active' : 'leftbar_inactive'}`}>
        <p>Dashboard</p>      
        <p>Salon List</p>
        <p>QueueList</p>
        <p>Appointments</p>
      </main>

      
    </main>
  )
}

export default SidebarAnimation