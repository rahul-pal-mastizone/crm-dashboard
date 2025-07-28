import React, { useState, useContext } from 'react';
import { CRMContext } from '../CRMContext';

const Clients = () => {
  const { clients, addClient, convertClient, deleteClient } = useContext(CRMContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    isConverted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addClient(formData);
    setFormData({ name: '', email: '', phone: '', isConverted: false });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Clients Management</h1>

      <form onSubmit={handleSubmit} className="mb-6 space-y-4 max-w-md">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full border p-2 rounded" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full border p-2 rounded" required />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full border p-2 rounded" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Client</button>
      </form>

      <table className="min-w-full table-auto border">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client._id} className="text-center">
              <td className="border px-4 py-2">{client.name}</td>
              <td className="border px-4 py-2">{client.email}</td>
              <td className="border px-4 py-2">{client.phone}</td>
              <td className="border px-4 py-2">{client.isConverted ? 'Converted' : 'Not Converted'}</td>
              <td className="border px-4 py-2">
                {!client.isConverted && (
                  <button onClick={() => convertClient(client._id)} className="bg-green-500 text-white px-2 py-1 rounded">
                    Convert
                  </button>
                )}
                {!client.isConverted && (
                    <button onClick={() => convertClient(client._id)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">
                      Convert
                    </button>
                  )}
                  <button onClick={() => deleteClient(client._id)} className="bg-red-500 text-white px-2 py-1 rounded">
                    Delete
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
