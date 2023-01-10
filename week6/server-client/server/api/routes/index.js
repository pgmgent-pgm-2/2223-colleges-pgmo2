/*
Import packages
*/
const express = require('express');

/*
Import custom packages
*/
const userController = require('../controllers/userController');

/*
Make a router
*/
const router = express.Router();

/*
Routes
*/


// Users
router.get('/users', userController.getUsers);
router.get('/users/:userId', userController.getUserById);

module.exports = router;
