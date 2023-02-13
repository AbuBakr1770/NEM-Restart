const express = require('express');
const app = express();
const morgan = require('morgan');

const tourRouter = require('./Routes/toursRoutes');
const usersRouter = require('./Routes/userRoutes');

app.use(express.json()); // built-in middlewares to parse upcomming res from body
app.use(express.static(`${__dirname}/public`)); // also a built-in middle ware that help to reach out static files
                                                // static files are files that don't change when our app is running

app.use(morgan('dev')); //logs information about api request (api hit path e.g /api/v1/tours)

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', usersRouter);

module.exports = app;
