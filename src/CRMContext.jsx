import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const CRMContext = createContext();

export const CRMProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);

  const fetchClients = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/clients');
      setClients(res.data);
    } catch (err) {
      console.error('Failed to fetch clients:', err);
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/projects');
      setProjects(res.data);
    } catch (err) {
      console.error('Failed to fetch projects:', err);
    }
  };

const addClient = async (clientData) => {
  try {
    const { name, email, phone } = clientData;

    // Only send required fields
    await axios.post('http://localhost:5000/api/clients', {
      name,
      email,
      phone
    });

    await fetchClients();
  } catch (err) {
    console.error('❌ Failed to add client:', err.response?.data || err.message);
  }
};


  const convertClient = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/clients/${id}/convert`);
      await fetchClients();
    } catch (err) {
      console.error('Failed to convert client:', err);
    }
  };

  const deleteClient = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/clients/${id}`);
    await fetchClients();
  } catch (err) {
    console.error('Failed to delete client:', err);
  }
  };


  const addProject = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/projects', data);
      await fetchProjects();
    } catch (err) {
      console.error('Failed to add project:', err);
    }
  };

  const updateClient = async (id, updatedData) => {
  try {
    await axios.put(`http://localhost:5000/api/clients/${id}`, updatedData);
    await fetchClients();
  } catch (err) {
    console.error('Failed to update client:', err);
  }
  };

  const updateProject = async (id, updatedData) => {
  try {
    await axios.put(`http://localhost:5000/api/projects/${id}`, updatedData);
    await fetchProjects();
  } catch (err) {
    console.error('Failed to update project:', err);
  }
  };

  const deleteProject = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/projects/${id}`);
    await fetchProjects();
  } catch (err) {
    console.error('Failed to delete project:', err);
  }
  };


  useEffect(() => {
    fetchClients();
    fetchProjects();
  }, []);

  return (
    <CRMContext.Provider
      value={{
        clients,
        projects,
        addClient,
        convertClient,
        deleteClient,
        updateClient,
        addProject,
        updateProject,
        deleteProject,
        fetchClients,
        fetchProjects,
      }}
    >
      {children}
    </CRMContext.Provider>
  );
};
