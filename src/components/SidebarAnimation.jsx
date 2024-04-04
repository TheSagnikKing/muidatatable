import React, { useState, useEffect, useRef } from 'react'
import './SidebarAnimation.css'

const SidebarAnimation = () => {

  const [open, setOpen] = useState(false)

  const dropdownRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the dropdown menu
    const handleClickOutside = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        setOpen(false); // Close the dropdown if clicked outside
      }
      console.log(dropdownRef.current.contains(event.target))
    };

    // Add event listener to detect clicks outside the dropdown menu
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Cleanup: remove event listener when component unmounts
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setOpen]);

  const [leftbarOpen, setLeftBarOpen] = useState(false)

  return (
    <main className="sidebar_container_main" >
      <div className='sidebar_header'>
        <div className='left_btn' onClick={() => setLeftBarOpen((prev) => !prev)}>Open/Close</div>
        <button onClick={() => setOpen((prev) => !prev)}>Toggle</button>
      </div>

      <div className={`sidebar_dropdownmenu ${open ? 'active' : 'inactive'}`} ref={dropdownRef}>
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