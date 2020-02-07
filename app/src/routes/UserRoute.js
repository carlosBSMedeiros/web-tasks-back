const express = require('express')
const router = express.Router();

const userController = require('../controllers/UserController')

router.get('/teste', userController.create);

module.exports = router;