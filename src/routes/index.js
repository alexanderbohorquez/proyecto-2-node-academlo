const express = require('express');
const router = express.Router();
const userRouter = require('./user.router')
const userController = require('../controllers/user.controllers');

// Endpoint para obtener todos los usuarios
router.get('/users', userController.getAllUsers);

// Endpoint para crear un nuevo usuario
router.post('/users', userController.createUser);

// Endpoint para obtener un usuario por ID
router.get('/users/:id', userController.getUserById);

// Endpoint para eliminar un usuario por ID
router.delete('/users/:id', userController.deleteUser);

// Endpoint para actualizar un usuario por ID
router.put('/users/:id', userController.updateUser);

module.exports = router;


module.exports = router;