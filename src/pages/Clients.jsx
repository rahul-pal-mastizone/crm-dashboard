import React, { useState, useContext } from 'react';
import { CRMContext } from '../CRMContext';

const Clients = () => {
  const { clients, addClient, convertClient, deleteClient } = useContext(CRMContext);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ name: '', email: '', phone: '' });


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


  const startEditing = (client) => {
  setEditingId(client._id);
  setEditData({ name: client.name, email: client.email, phone: client.phone });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditData({ name: '', email: '', phone: '' });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const saveEdit = () => {
    updateClient(editingId, editData);
    cancelEditing();
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
                <td className="border px-4 py-2">
                  {editingId === client._id ? (
                    <input name="name" value={editData.name} onChange={handleEditChange} className="border p-1 rounded" />
                  ) : client.name}
                </td>
                <td className="border px-4 py-2">
                  {editingId === client._id ? (
                    <input name="email" value={editData.email} onChange={handleEditChange} className="border p-1 rounded" />
                  ) : client.email}
                </td>
                <td className="border px-4 py-2">
                  {editingId === client._id ? (
                    <input name="phone" value={editData.phone} onChange={handleEditChange} className="border p-1 rounded" />
                  ) : client.phone}
                </td>
                <td className="border px-4 py-2">
                  {client.isConverted ? 'Converted' : 'Not Converted'}
                </td>
                <td className="border px-4 py-2 space-x-1">
                  {!client.isConverted && editingId !== client._id && (
                    <button onClick={() => convertClient(client._id)} className="bg-green-500 text-white px-2 py-1 rounded">Convert</button>
                  )}
                  {editingId === client._id ? (
                    <>
                      <button onClick={saveEdit} className="bg-blue-500 text-white px-2 py-1 rounded">Save</button>
                      <button onClick={cancelEditing} className="bg-gray-400 text-white px-2 py-1 rounded">Cancel</button>
                    </>
                  ) : (
                    <button onClick={() => startEditing(client)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
                  )}
                  <button onClick={() => deleteClient(client._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
