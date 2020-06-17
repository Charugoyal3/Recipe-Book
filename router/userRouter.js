const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', userController.home)
router.get('/signin', userController.signin)
router.get('/signup', userController.signup)
router.post('/user', userController.add)
router.get('/logout', userController.add)


module.exports = router