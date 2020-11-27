const express = require('express')
const router = express.Router()
const noteController = require('../controllers/note.controller');


// Create a new user
router.post('/', noteController.create);

// Create a new user
router.put('/:id', noteController.update);

module.exports = router