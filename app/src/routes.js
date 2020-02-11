const express = require('express')
const router = express.Router()

const TaskController = require('./controllers/TaskController')
const userController = require('./controllers/UserController')

router.post('/user/register', userController.create)
router.post('/user/:user_id/task/create', TaskController.create)

module.exports = router;