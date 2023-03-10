const express = require('express');

const tourController = require('./../controllers/tourcontroller');
const Router = express.Router();

// Router.param('id', tourController.checkID);

Router.route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour); // path for all tours

Router.route('/:id') // path for tours for Id
  .get(tourController.getTourById)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = Router;

// All handlers
