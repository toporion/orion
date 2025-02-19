const { createUser, loginUser, getAllUsers, deleteUser, makeAdmin } = require('../controllers/UserController');
const { createUserValidation, loginUserValidation } = require('../middlewares/AuthValidation');

const route=require('express').Router()

route.post('/signUp',createUserValidation,createUser)
route.post('/login',loginUserValidation,loginUser)
route.get('/users',getAllUsers)
route.delete('/users/:id',deleteUser)
route.patch('/users/:id/make-admin',makeAdmin)

module.exports=route;