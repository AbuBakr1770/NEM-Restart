
const tourModel = require('./../models/tourModel')




 

  exports.checkBody = (req,res,next)=>{
    if(!req.body.price  ||  !req.body.name){
      res.status(404).json({
        status:"invalid request",
        Messgae:"price or name is mising"
      })
     
    }
    next()
  }
exports.getAllTours = (req, res) => {
    res.status(200).json({
      status: 'successful!!',
      // requestedTime:req.RequestTime,
      
    });
    
  };
  
  exports.createTour = (req, res) => {
    res.status('201').json({
      message: 'updated successfully',
      data: {
        tour: newTour,
      },
    });
  };
  
 exports.getTourById = (req, res) => {
    
    res.status(200).json({
      message: 'successfull',
      
    });
  };
  
  exports.updateTour = (req, res) => {
    
  
    res.status(200).json({
      status: 'successful',
      updatedTour: '<Updated tour goes here....>',
    });
  };
  
exports.deleteTour = (req, res) => {
    
  
    res.status(204).json({
      status: 'successful',
      deletedtour: null,
    });
  };