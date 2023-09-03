const catchError = require('../utils/catchError');
const User = require('../models/user');

// Obtener todos los usuarios
const getAllUsers = catchError(async (req, res) => {
    const users = await User.findAll({});
    return res.json(users);
});

// Crear un nuevo usuario
const createUser = catchError(async (req, res) => {
    const {first_name, last_name, email, password, birthday} = req.body;
    const userBody = { 
        first_name,
        last_name,
        email,
        password, 
        birthday,
    }
    const user = await User.create(userBody);
    return res.status(201).json(user);
});

// Obtener un usuario por ID
const getUserById = catchError(async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    return res.json(user);
});

// Eliminar un usuario por ID
const deleteUser = catchError(async (req, res) => {
    const { id } = req.params; 
    await User.destroy({where: {id}});
    return res.sendStatus(204);
});

// Actualizar un usuario por ID
const updateUser = catchError(async (req, res) => {
    const { id } = req.params; 
    const {first_name, last_name, email, password, birthday} = req.body;
    const user = await User.update({
        first_name,
        last_name,
        email,
        password, 
        birthday,
    }, {where: { id }, returning: true});
    return res.json(user);
});

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    deleteUser,
    updateUser,
};