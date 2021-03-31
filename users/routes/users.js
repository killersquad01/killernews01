const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

// POST a user
router.post('/', usersController.createUser);

module.exports = router;