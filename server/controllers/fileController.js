const path = require('path');

const fileController = {};

//middleware functions
fileController.testing = (req, res, next) => {
    const data = ['testing hello world'];
    res.locals.test = data;
    return next();
}

module.exports = fileController;