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

module.exports = router;
