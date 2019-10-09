const express = require('express');

const validate = require('../../controllers/data.js');

const router = express.Router();

router.post('/validate', validate);

module.exports = router;
