import React, { useState } from 'react'
import './SidebarAnimation.css'

const SidebarAnimation = () => {

    const [showSidebar, setShowSidebar] = useState(true)
    return (
        <div className='sidebar_container'>
            <div className={`${showSidebar ? "sidebarshow" : "sidebarhide"}`}>
                <h1 className={`${showSidebar ? "menushow" : "menuhide"}`}>Menus</h1>
            </div>


            <button onClick={() => setShowSidebar((prev) => !prev)}>open/close</button>
        </div>
    )
}

export default SidebarAnimation

