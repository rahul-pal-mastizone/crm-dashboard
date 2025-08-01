const express = require('express');
const Client = require('../models/Client');
const router = express.Router();

// Add a new client
router.post('/', async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'All fields (name, email, phone) are required.' });
    }

    const newClient = new Client({ name, email, phone });
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ error: 'Error adding client', details: error.message });
  }
});



// Get all clients
router.get('/', async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching clients' });
  }
});

// Convert client to project
router.put('/:id/convert', async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) return res.status(404).json({ message: 'Client not found' });

    client.isConverted = true;
    await client.save();

    // Create a project using the client data
    const project = new Project({
      projectName: `Project for ${client.name}`,
      clientName: client.name,
      startDate: new Date(),
      status: 'Pending',
    });

    await project.save();
    res.status(200).json({ message: 'Client converted to project', project });
  } catch (error) {
    res.status(400).json({ message: 'Error converting client to project' });
  }
});

// Delete a client
router.delete('/:id', async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);
    if (!client) return res.status(404).json({ message: 'Client not found' });
    res.status(200).json({ message: 'Client deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting client' });
  }
});

// Update a client
router.put('/:id', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const updatedClient = await Client.findByIdAndUpdate(
      req.params.id,
      { name, email, phone },
      { new: true }
    );

    if (!updatedClient) return res.status(404).json({ error: 'Client not found' });
    res.status(200).json(updatedClient);
  } catch (error) {
    res.status(500).json({ error: 'Error updating client' });
  }
});


module.exports = router;

