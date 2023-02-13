const fs = require('fs');

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
  );


  exports.checkID = (req,res,next,val) =>{
    if (req.params.id * 1 > tours.length) {
     return res.status(404).json({  // return is imp!! because without it express would continoue running this function
        message: 'failed',
        status: 'such ID does not exist',
      });
    }
    next()
  }

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
      result: tours.length,
      tours_Data: {
        Data: tours,
      },
    });
    
  };
  
  exports.createTour = (req, res) => {
    const newId = tours.length - 1 + 1;
    const newTour = Object.assign({ id: newId }, req.body);
  
    tours.push(newTour);
  
    fs.writeFile(
      `${__dirname}/dev-data/data/tours-simple.json`,
      JSON.stringify(tours),
      (err) => {
        console.log(err);
      }
    );
    res.status('201').json({
      message: 'updated successfully',
      data: {
        tour: newTour,
      },
    });
  };
  
 exports.getTourById = (req, res) => {
    const paramId = req.params.id * 1;
    const getTourById = tours.find((ele) => ele.id === paramId);
  
    if (!getTourById) {
      res.status(404).json({
        message: 'Such tour does not exist',
        Status: 'failed',
      });
    }
    res.status(200).json({
      message: 'successfull',
      tour: getTourById,
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