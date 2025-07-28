const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// Add a new project
router.post('/', async (req, res) => {
  try {
    const { projectName, clientName, startDate, status } = req.body;
    const newProject = new Project({ projectName, clientName, startDate, status });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: 'Error adding project' });
  }
});

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching projects' });
  }
});

// Update a project
router.put('/:id', async (req, res) => {
  try {
    const { projectName, clientName, startDate, status } = req.body;
    if (!projectName || !clientName || !startDate || !status) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      { projectName, clientName, startDate, status },
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: 'Project not found' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Error updating project' });
  }
});

// DELETE a project
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting project' });
  }
});



module.exports = router;
