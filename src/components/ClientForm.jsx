import { useState } from 'react';

const ClientForm = () => {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., add to client list or send to a backend
    console.log(`Client Name: ${clientName}, Email: ${clientEmail}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm">Client Name</label>
        <input
          type="text"
          id="name"
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm">Client Email</label>
        <input
          type="email"
          id="email"
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          value={clientEmail}
          onChange={(e) => setClientEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Client</button>
    </form>
  );
};

export default ClientForm;
