import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import { CRMContext } from '../CRMContext';

const Dashboard = () => {
  const location = useLocation();
  const { clients, projects } = useContext(CRMContext);

  const totalClients = clients.length;
  const convertedClients = clients.filter(c => c.isConverted).length;
  const totalProjects = projects.length;
  const completedProjects = projects.filter(p => p.status === 'Completed').length;

  const isHomeRoute = location.pathname === '/' || location.pathname === '/home';

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 overflow-auto">
          <Outlet />

          {isHomeRoute && (
            <div className="bg-white shadow-md rounded-lg p-6 mt-4">
              <h1 className="text-4xl font-extrabold text-gray-800 mb-8">📊 Dashboard Summary</h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-5 shadow-lg">
                  <h2 className="text-lg">Total Clients</h2>
                  <p className="text-3xl font-bold">{totalClients}</p>
                </div>

                <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-xl p-5 shadow-lg">
                  <h2 className="text-lg">Converted Clients</h2>
                  <p className="text-3xl font-bold">{convertedClients}</p>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl p-5 shadow-lg">
                  <h2 className="text-lg">Total Projects</h2>
                  <p className="text-3xl font-bold">{totalProjects}</p>
                </div>

                <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 text-white rounded-xl p-5 shadow-lg">
                  <h2 className="text-lg">Completed Projects</h2>
                  <p className="text-3xl font-bold">{completedProjects}</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
