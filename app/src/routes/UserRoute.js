const express = require('express')
const router = express.Router();

const userController = require('../controllers/UserController')

router.get('/register', userController.create);

module.exports = router;