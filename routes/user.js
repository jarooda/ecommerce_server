const routes = require('express').Router()
const { UserController } = require('../controllers')
const authentication = require('../middlewares/authentication')

routes.post('/login/admin', UserController.loginAdmin)
routes.post('/login/customer', UserController.loginCustomer)
routes.post('/register', UserController.register)

routes.use(authentication) // ! authentication
routes.get('/user', UserController.getUser)

module.exports = routes