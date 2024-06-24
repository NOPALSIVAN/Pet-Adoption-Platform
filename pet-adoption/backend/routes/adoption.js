const express = require('express');
const router = express.Router();
const Adoption = require('../models/Adoption');

// POST /api/adoption
router.post('/', async (req, res) => {
    const { name, email, phone, address, pet, reason } = req.body;

    // Validate inputs
    if (!name || !email || !phone || !address || !pet || !reason) {
        return res.status(400).json({ msg: 'Please fill in all fields' });
    }

    try {
        const newAdoption = new Adoption({ name, email, phone, address, pet, reason });
        await newAdoption.save();
        res.status(201).json({ msg: 'Application submitted successfully' });
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;
