const express = require('express');

const aladdinTravel = require('../../controllers/aladdin');

const router = express.Router();

router.post('/aladdin', aladdinTravel);

module.exports = router;
