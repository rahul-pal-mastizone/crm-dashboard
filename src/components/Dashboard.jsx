import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
        <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 overflow-auto">
        <Outlet />
        </main>
    </div>
    </div>
  );
};

export default Dashboard;
