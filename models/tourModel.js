const mongoose = require('mongoose')


const TourSchema = new mongoose.Schema({
    name:{
      type:String,
      unique:true,
      required:[true,'A tour must a name']
    },
    price:{
      type:Number,
      required:[true,'A tour must a price']
    },
    rating:{
      type:Number,
      required:[true,'4.5']
    }
  })
  
  TourModal = mongoose.model('ToueModal', TourSchema)

  module.exports = TourModal