const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

//require routers
const apiRouter = require('./routes/api.js');

//handle parsing request body
app.use(express.json());


//define route handlers
app.use('/api', apiRouter);

//unknown route error
app.use((req, res) => {
    res.status(404).send('Page not found foo');
});

//express global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

  //start server
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  })

  module.exports = app;

