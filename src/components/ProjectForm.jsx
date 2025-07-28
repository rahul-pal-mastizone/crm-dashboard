import React, { useState } from 'react';
import axios from 'axios';

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [clientName, setClientName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [status, setStatus] = useState('Pending');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!projectName || !clientName || !startDate) {
      alert('All fields are required!');
      return;
    }

    const newProject = {
      projectName,
      clientName,
      startDate,
      status,
    };

    try {
      await axios.post('http://localhost:5000/api/projects', newProject);
      alert('Project added successfully');
      // Clear form
      setProjectName('');
      setClientName('');
      setStartDate('');
      setStatus('Pending');
    } catch (error) {
      console.error('Error adding project:', error);
      alert('Failed to add project');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white shadow-md rounded-lg w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-full"
      />
      <input
        type="text"
        placeholder="Client Name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-full"
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-full"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-full"
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
        Add Project
      </button>
    </form>
  );
};

export default ProjectForm;
