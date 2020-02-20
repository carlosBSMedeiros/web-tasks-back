const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')
const UserController = require('../controllers/UserController')
const AuthController = require('../controllers/AuthenController')
const CheckController = require('../controllers/CheckController')

router.post('/user/register', UserController.create)
router.post('/user/authenticate', AuthController.authen)
router.post('/user/:id_user/task/create', TaskController.create)
router.post('/user/:id_user/task/:id_task/create', CheckController.create)

module.exports = router;