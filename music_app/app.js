const morgan = require('morgan');
const express = require('express');
const songRoute = require('./routes/songRoutes');

const app = express();
// MIDDLEWARE
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  req.timeRequest = new Date().toISOString();
  next();
});
app.use((req, res, next) => {
  const query = req.query;
  const queryParams = ['sort', 'limit', 'page', 'fields'];
  queryParams.forEach((element) => {
    delete query[element];
  });
  req.query = query;
  next();
});
// ROUTES

app.use('/api/v1/songs', songRoute);
// START SERVER
module.exports = app;
