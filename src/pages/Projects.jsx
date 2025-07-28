import React, { useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [clients] = useState([
    { id: 1, name: 'Client A' },
    { id: 2, name: 'Client B' },
  ]);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ProjectForm onAddProject={handleAddProject} clients={clients} />

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Projects List</h2>
        <ul className="space-y-4 mt-4">
          {projects.map((project, index) => (
            <li key={index} className="p-4 bg-gray-50 border border-gray-200 rounded-md shadow-sm">
              <h3 className="text-lg font-semibold">{project.projectName}</h3>
              <p>Status: <span className="font-medium">{project.status}</span></p>
              <p>Client: {project.clientName}</p>
              <p>Start Date: {project.startDate}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
