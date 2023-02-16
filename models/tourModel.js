const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'A tour must a name'],
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour Must have Max Group Size'],
  },
  difficulty: {
    type: String,
    required: [true, 'a tour must have a difficulty'],
  },
  price: {
    type: Number,
    required: [true, 'A tour must a price'],
  },
  ratingAverage: {
    type: Number,
    default: 4.0,
  },
  ratingQuantity: {
    type: Number,
    default: 0,
  },
  discount: Number,
  summary: {
    type: String,
    trim: true,
    required:[true,'tour must have a summary']
  },
  description:{
    type:String,
    trim:true // trim removes all the extra white spaces in a string
  },
  imageCover:{
    type:String,
    required:{
      type:String,
      required:[true,'tour must have a cover image']
    }
  },
  images:{
    type:[String]  // it means the type will be an array of strings e.g type:[String]
  },
  createdAt:{
    type:Date,
    default: Date.now(),
  },
  startDates:[Date],

});

TourModal = mongoose.model('ToueModal', TourSchema);

module.exports = TourModal;
