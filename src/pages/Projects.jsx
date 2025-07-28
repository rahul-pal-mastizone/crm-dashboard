import React, { useState } from 'react';
import ProjectForm from '../components/ProjectForm';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ProjectForm onAddProject={handleAddProject} />

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Projects List</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="p-4 border-b">
              <h3 className="text-lg">{project.projectName}</h3>
              <p>Status: {project.status}</p>
              <p>Client: {project.clientName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
