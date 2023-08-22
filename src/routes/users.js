const express = require('express');
const userControllers = require('../controller/usersControllers')
const router = express.Router();

//CREATE - POST
router.post('/', userControllers.createNewUser);

// READ - GET
router.get ('/', userControllers.getAllUsers);

// UPDATE - PATCH
router.patch('/:idUser', userControllers.updateUser);

// DELETE - DELETE
router.delete('/:idUser', userControllers.deleteUser)




module.exports =  router