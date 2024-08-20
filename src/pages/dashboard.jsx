import React from 'react'
import Sidebar from '../components/sidebar'
import { Outlet, useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import { useState } from 'react';

const dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="relative h-screen flex">
      {/* Sidebar with dynamic width */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-200 transition-all duration-300 ${
          sidebarOpen ? "w-72" : "w-20"
        }`}
      >
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      </div>

      {/* Content Area */}
      <div
        className={`${sidebarOpen ? "ml-72" : "ml-20"} flex-1 h-full overflow-y-auto transition-all duration-300`}
      >
        <Outlet />
      </div>
    </div>


    )
}

export default dashboard
