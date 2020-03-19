const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')
const UserController = require('../controllers/UserController')
const AuthController = require('../controllers/AuthenController')
const CheckController = require('../controllers/CheckController')

router.post('/user/register', UserController.create)
router.post('/user/authenticate', AuthController.authen)
router.post('/user/:id_user/task/create', TaskController.create)
router.post('/task/:id_task/check/create', CheckController.create)
router.delete('/task/:id/delete', TaskController.destroy)
router.put('/task/:id/update', TaskController.alter)

module.exports = router;