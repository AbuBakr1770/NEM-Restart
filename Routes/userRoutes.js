const express = require('express');

const userRoutes = require('./../controllers/userController');
const Router = express.Router();

Router.route('/').get(userRoutes.getAllUsers).post(userRoutes.createUser);

Router.route('/:id')
  .get(userRoutes.getUserById)
  .patch(userRoutes.UpdateUserById)
  .delete(userRoutes.deleteUserById);

module.exports = Router;
