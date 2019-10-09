const express = require('express');

const router = express.Router();

const removeInput = require('../../controllers/input');

router.delete('/:item', removeInput);

module.exports = router;
