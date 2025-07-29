import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const CRMContext = createContext();

export const CRMProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);

  const fetchClients = async () => {
    try {
      const res = await axios.get('https://crm-dashboard-9j1c.onrender.com/api/clients');
      setClients(res.data);
    } catch (err) {
      console.error('Failed to fetch clients:', err);
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await axios.get('https://crm-dashboard-9j1c.onrender.com/api/projects');
      setProjects(res.data);
    } catch (err) {
      console.error('Failed to fetch projects:', err);
    }
  };

const addClient = async (clientData) => {
  try {
    const { name, email, phone } = clientData;

    // Only send required fields
    await axios.post('https://crm-dashboard-9j1c.onrender.com/api/clients', {
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
    await axios.put(`https://crm-dashboard-9j1c.onrender.com/api/clients/${id}/convert`);
    
    // Fetch updated clients from backend
    await fetchClients();

    // Also fetch projects, since a new one was added
    await fetchProjects();
  } catch (err) {
    console.error('Failed to convert client:', err);
  }
};


  const deleteClient = async (id) => {
  try {
    await axios.delete(`https://crm-dashboard-9j1c.onrender.com/api/clients/${id}`);
    await fetchClients();
  } catch (err) {
    console.error('Failed to delete client:', err);
  }
  };


  const addProject = async (data) => {
    try {
      await axios.post('https://crm-dashboard-9j1c.onrender.com/api/projects', data);
      await fetchProjects();
    } catch (err) {
      console.error('Failed to add project:', err);
    }
  };

  const updateClient = async (id, updatedData) => {
  try {
    await axios.put(`https://crm-dashboard-9j1c.onrender.com/api/clients/${id}`, updatedData);
    await fetchClients();
  } catch (err) {
    console.error('Failed to update client:', err);
  }
  };

  const updateProject = async (id, updatedData) => {
  try {
    await axios.put(`https://crm-dashboard-9j1c.onrender.com/api/projects/${id}`, updatedData);
    await fetchProjects();
  } catch (err) {
    console.error('Failed to update project:', err);
  }
  };

  const deleteProject = async (id) => {
  try {
    await axios.delete(`https://crm-dashboard-9j1c.onrender.com/api/projects/${id}`);
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
