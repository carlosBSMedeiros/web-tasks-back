const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')
const UserController = require('../controllers/UserController')
const AuthController = require('../controllers/AuthenController')
const CheckController = require('../controllers/CheckController')

router.post('/user/register', UserController.create)

router.post('/user/authenticate', AuthController.authen)

router.post('/user/:id_user/task/create', TaskController.create)
router.put('/task/:id/update', TaskController.alter)
router.delete('/task/:id/delete', TaskController.destroy)
router.get('/user/:id_user/task/list', TaskController.listAll)

router.post('/task/:id_task/check/create', CheckController.create)
router.put('/check/:id/update', CheckController.alter)
router.put('/check/:id/checked', CheckController.checkUncheck)
router.delete('/check/:id/delete', CheckController.destroy)
router.get('/task/:id_task/check/listall', CheckController.listAll)


module.exports = router;