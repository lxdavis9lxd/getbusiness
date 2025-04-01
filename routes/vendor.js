const express = require('express');
const router = express.Router();

// Mock database for vendor information
let vendors = [];

// GET route to display vendor information
router.get('/', (req, res) => {
    res.render('vendor', { vendors });
});

// POST route to add new vendor information
router.post('/', (req, res) => {
    const { name, address, phone, id, email } = req.body;
    vendors.push({ name, address, phone, id, email });
    res.redirect('/vendor');
});

// PUT route to modify existing vendor information
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, address, phone, email } = req.body;
    const vendor = vendors.find(v => v.id === id);
    if (vendor) {
        vendor.name = name;
        vendor.address = address;
        vendor.phone = phone;
        vendor.email = email;
        res.status(200).send('Vendor information updated');
    } else {
        res.status(404).send('Vendor not found');
    }
});

// DELETE route to delete vendor information
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    vendors = vendors.filter(v => v.id !== id);
    res.status(200).send('Vendor information deleted');
});

module.exports = router;
