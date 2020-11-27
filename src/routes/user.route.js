const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller');

// Retrieve all employees
router.get('/', userController.findAll);

// Create a new employee
router.post('/', userController.create);

module.exports = router