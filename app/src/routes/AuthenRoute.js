const express = require('express')
const router = express.Router()

const authController = require('../controllers/AuthenController.js')

router.post('/authenticate', authController.authen)

module.exports = router;