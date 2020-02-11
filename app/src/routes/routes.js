const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')
const UserController = require('../controllers/UserController')
const AuthController = require('../controllers/AuthenController')

router.post('/user/register', UserController.create)
router.post('/user/authenticate', AuthController.authen)
router.post('/user/:user_id/task/create', TaskController.create)

module.exports = router;