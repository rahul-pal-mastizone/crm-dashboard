import React, { useState } from 'react';

const ProjectForm = ({ onAddProject }) => {
  const [projectName, setProjectName] = useState('');
  const [clientName, setClientName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [status, setStatus] = useState('Pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = { projectName, clientName, startDate, status };
    onAddProject(newProject);
    setProjectName('');
    setClientName('');
    setStartDate('');
    setStatus('Pending');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input 
        type="text" 
        placeholder="Project Name" 
        value={projectName} 
        onChange={(e) => setProjectName(e.target.value)} 
        className="p-2 border border-gray-300 rounded mb-4 w-full"
      />
      <input 
        type="text" 
        placeholder="Client Name" 
        value={clientName} 
        onChange={(e) => setClientName(e.target.value)} 
        className="p-2 border border-gray-300 rounded mb-4 w-full"
      />
      <input 
        type="date" 
        value={startDate} 
        onChange={(e) => setStartDate(e.target.value)} 
        className="p-2 border border-gray-300 rounded mb-4 w-full"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4 w-full"
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Project</button>
    </form>
  );
};

export default ProjectForm;
