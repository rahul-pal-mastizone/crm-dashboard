import React, { useState, useContext } from 'react';
import { CRMContext } from '../CRMContext';
import ProjectForm from '../components/ProjectForm';

const Projects = () => {
  const { projects, clients, addProject, updateProject, deleteProject } = useContext(CRMContext);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ projectName: '', clientName: '', startDate: '', status: '' });

  const handleAddProject = (newProject) => {
    addProject(newProject);
  };

  const startEditing = (project) => {
    setEditingId(project._id);
    setEditData({
      projectName: project.projectName,
      clientName: project.clientName,
      startDate: project.startDate?.split('T')[0],
      status: project.status,
    });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditData({ projectName: '', clientName: '', startDate: '', status: '' });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const saveEdit = () => {
    updateProject(editingId, editData);
    cancelEditing();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ProjectForm onAddProject={handleAddProject} clients={clients} />

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Projects List</h2>
        <ul className="space-y-4 mt-4">
          {projects.map((project) => (
            <li key={project._id} className="p-4 bg-gray-50 border border-gray-200 rounded-md shadow-sm space-y-2">
              {editingId === project._id ? (
                <>
                  <input
                    name="projectName"
                    value={editData.projectName}
                    onChange={handleEditChange}
                    className="w-full border p-1 rounded"
                  />
                  <select
                    name="clientName"
                    value={editData.clientName}
                    onChange={handleEditChange}
                    className="w-full border p-1 rounded"
                  >
                    {clients.map((c) => (
                      <option key={c._id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="date"
                    name="startDate"
                    value={editData.startDate}
                    onChange={handleEditChange}
                    className="w-full border p-1 rounded"
                  />
                  <select
                    name="status"
                    value={editData.status}
                    onChange={handleEditChange}
                    className="w-full border p-1 rounded"
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                  <div className="space-x-2">
                    <button onClick={saveEdit} className="bg-blue-500 text-white px-3 py-1 rounded">
                      Save
                    </button>
                    <button onClick={cancelEditing} className="bg-gray-500 text-white px-3 py-1 rounded">
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold">{project.projectName}</h3>
                  <p>Client: {project.clientName}</p>
                  <p>Start Date: {project.startDate?.split('T')[0]}</p>
                  <p>
                    Status: <span className="font-medium">{project.status}</span>
                  </p>
                  <button
                    onClick={() => startEditing(project)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded mt-2"
                  >
                    Edit
                  </button>
                  <button
                      onClick={() => {
                      if (confirm('Are you sure you want to delete this project?')) {
                        deleteProject(project._id);
                      }
                    }}
                      className="bg-red-500 text-white px-3 py-1 rounded mt-2 ml-2">
                      Delete
                    </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
