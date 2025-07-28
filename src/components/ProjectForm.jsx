import { useState } from 'react';

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Project Name: ${projectName}, Description: ${projectDescription}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm">Project Name</label>
        <input
          type="text"
          id="name"
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm">Project Description</label>
        <textarea
          id="description"
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Project</button>
    </form>
  );
};

export default ProjectForm;
