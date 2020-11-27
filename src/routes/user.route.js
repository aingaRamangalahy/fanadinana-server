const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller');

// Retrieve all users
router.get('/', userController.findAll);

// Create a new user
router.post('/', userController.create);

module.exports = router