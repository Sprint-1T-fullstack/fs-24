var express = require('express');
var router = express.Router();

const { getAllEvents, getOneEvent } = require('../controllers/EventsController');

const just_log_it = require('../middleware/just_log_it');

/* GET events listing. */
router.get('/', just_log_it, getAllEvents);
router.get('/event/:eventID', just_log_it, getOneEvent);

module.exports = router;