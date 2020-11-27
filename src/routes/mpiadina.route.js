const express = require('express')
const router = express.Router()
const mpiadinaController = require('../controllers/mpiadina.controller');

// Retrieve all mpiadina
router.get('/', mpiadinaController.findAll);

// Create a new mpiadina
router.post('/', mpiadinaController.create);

// Retrieve a single mpiadina with id
router.get('/:id', mpiadinaController.findById);

// Update a mpiadina with id
router.put('/:id', mpiadinaController.update);

// Delete a mpiadina with id
router.delete('/:id', mpiadinaController.delete);

module.exports = router