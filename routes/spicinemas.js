const express = require('express');
const router = express.Router();
const spiCinemasController = require('../controllers/spicinemas');

router.get('/checkbookingstatus', spiCinemasController.checkBookingStatus);
router.get('/getcomingsoonlist', spiCinemasController.getComingSoonList);

module.exports = router;