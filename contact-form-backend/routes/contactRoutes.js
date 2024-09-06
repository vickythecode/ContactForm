const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Handle form submissions
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    res.status(400).json({ error: 'Error saving contact' });
  }
});

module.exports = router;
