import React, { useState } from 'react';

const Clients = ({ onAddClient }) => {
  const [clients, setClients] = useState([]);
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
    const newClient = { ...formData, id: Date.now() };
    setClients([...clients, newClient]);
    setFormData({ name: '', email: '', phone: '', isConverted: false });
    if (onAddClient) onAddClient(newClient);
  };

  const convertClient = (id) => {
    setClients(clients.map(c => c.id === id ? { ...c, isConverted: true } : c));
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
            <tr key={client.id} className="text-center">
              <td className="border px-4 py-2">{client.name}</td>
              <td className="border px-4 py-2">{client.email}</td>
              <td className="border px-4 py-2">{client.phone}</td>
              <td className="border px-4 py-2">{client.isConverted ? 'Converted' : 'Not Converted'}</td>
              <td className="border px-4 py-2">
                {!client.isConverted && (
                  <button onClick={() => convertClient(client.id)} className="bg-green-500 text-white px-2 py-1 rounded">
                    Convert
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
