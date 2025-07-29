import { useState } from 'react';
import axios from 'axios';

const ClientForm = () => {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!clientName || !clientEmail || !clientCompany || !clientPhone) {
      alert('Please fill in all fields.');
      return;
    }

    const newClient = {
      name: clientName,
      email: clientEmail,
      company: clientCompany,
      phone: clientPhone,
    };

    try {
      await axios.post('https://crm-dashboard-9j1c.onrender.com/api/clients', newClient);
      alert('Client added successfully');
      // Clear form
      setClientName('');
      setClientEmail('');
      setClientCompany('');
      setClientPhone('');
    } catch (error) {
      console.error('Error adding client:', error);
      alert('Failed to add client');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white shadow-md rounded-lg w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Client Name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-full"
      />
      <input
        type="email"
        placeholder="Client Email"
        value={clientEmail}
        onChange={(e) => setClientEmail(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-full"
      />
      <input
        type="text"
        placeholder="Company"
        value={clientCompany}
        onChange={(e) => setClientCompany(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-full"
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={clientPhone}
        onChange={(e) => setClientPhone(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Add Client</button>
    </form>
  );
};

export default ClientForm;
