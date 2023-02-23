const tourModel = require('./../models/tourModel');

exports.checkBody = (req, res, next) => {
  if (!req.body.price || !req.body.name) {
    res.status(404).json({
      status: 'invalid request',
      Messgae: 'price or name is mising',
    });
  }
  next();
};
exports.getAllTours = async (req, res) => {
  try {
      // building a query
      //1) Filtering
    const queryObj = {...req.query}
    const excludedFields = ['sort','page','limit','field']
    excludedFields.forEach(ele =>{delete queryObj[ele]})

    //2)Advance Filtering
    let queryStr = JSON.stringify(queryObj)
    queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, match => `$${match}`)

    console.log(JSON.parse(queryStr));


    const query = await tourModel.find(JSON.parse(queryStr));

    res.status(200).json({
      status: 'successful!!',
      results:query.length,
      data: {
        tours: query,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail/Invalid Request',
      message: err,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await tourModel.create(req.body);

    res.status('201').json({
      message: 'Created a new tour Successfully',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: 'Invalid request',
      Error: err,
    });
  }
};

exports.getTourById = async (req, res) => {
  const tourByID = await tourModel.findById(req.params.id);
  try {
    res.status(200).json({
      message: 'successfull',
      tour: tourByID,
    });
  } catch (err) {
    res.status(400).json({
      message: 'Invalid request',
      Error: err,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const updatedTour = await tourModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      status: 'successful',
      updatedTour: updatedTour,
    });
  } catch (err) {
    res.status(400).json({
      message: 'Invalid request',
      Error: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try{
     await tourModel.findByIdAndDelete({_id:req.params.id})
  res.status(204).json({
    status: 'deleted tour successful',
    deletedtour: null,
  });
  } catch(err){
    res.status(400).json({
      message: 'Invalid request',
      Error: err,
    });
  }
 
};
