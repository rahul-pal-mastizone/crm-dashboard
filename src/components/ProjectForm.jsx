import React, { useState } from 'react';

const ProjectForm = ({ onAddProject, clients }) => {
  const [projectName, setProjectName] = useState('');
  const [clientName, setClientName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [status, setStatus] = useState('Pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!projectName || !clientName || !startDate) {
      alert('All fields are required!');
      return;
    }
    const newProject = { projectName, clientName, startDate, status };
    onAddProject(newProject);
    setProjectName('');
    setClientName('');
    setStartDate('');
    setStatus('Pending');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input type="text" placeholder="Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} className="w-full border p-2 rounded" required />

      <select value={clientName} onChange={(e) => setClientName(e.target.value)} className="w-full border p-2 rounded" required>
        <option value="">Select Client</option>
        {clients.map(client => (
          <option key={client.id} value={client.name}>{client.name}</option>
        ))}
      </select>

      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full border p-2 rounded" required />

      <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full border p-2 rounded">
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Project</button>
    </form>
  );
};

export default ProjectForm;
