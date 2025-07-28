import React, { createContext, useState } from 'react';

// 1. Create the context
export const CRMContext = createContext();

// 2. Create the provider component
export const CRMProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);

  return (
    <CRMContext.Provider value={{ clients, setClients, projects, setProjects }}>
      {children}
    </CRMContext.Provider>
  );
};
