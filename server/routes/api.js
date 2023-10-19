const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController.js');

router.get('/', fileController.testing, (req, res) => {
    return res.status(200).json(res.locals.test);
})

module.exports = router;