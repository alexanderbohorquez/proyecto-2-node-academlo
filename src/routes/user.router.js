const {createUser, getAllUsers, getUserById, deleteUser, updateUser} = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
		.get(getAllUsers)
        .post(createUser)

userRouter.route("/:id")
        .get(getUserById)
        .delete(deleteUser)
        .put(updateUser)

module.exports = userRouter;