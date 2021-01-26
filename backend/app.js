/** Backend API for Curate **/

const express = require('express');
const ExpressError = require('./utility/ExpressError');
const morgan = require('morgan');

const apiRoutes = require('./routes/api');

const app = express();

app.use(express.json());

// Morgan server request logging library
app.use(morgan('tiny'));

// Route Handling
app.use('/api', apiRoutes);

// 404 Handling
app.use(function(req, res, next) {
   const error = new ExpressError('Not Found', 404);

   return next(error);
});

// General Error Handling
app.use(function(err, req, res, next) {
   res.status(err.status || 500);
   console.error(err.stack);

   return res.json({
       status: err.status,
       message: err.message
   })
});

module.exports = app;