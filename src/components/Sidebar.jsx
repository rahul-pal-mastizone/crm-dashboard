import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">CRM Dashboard</h2>
      <nav className="flex flex-col space-y-3">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'bg-gray-700 px-3 py-2 rounded' : 'hover:bg-gray-700 px-3 py-2 rounded'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/clients"
          className={({ isActive }) =>
            isActive ? 'bg-gray-700 px-3 py-2 rounded' : 'hover:bg-gray-700 px-3 py-2 rounded'
          }
        >
          Clients
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? 'bg-gray-700 px-3 py-2 rounded' : 'hover:bg-gray-700 px-3 py-2 rounded'
          }
        >
          Projects
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
