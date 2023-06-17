var express = require('express');
var router = express.Router();

const EventController = require('../controllers/EventsController');
const instEventController = new EventController();

const just_log_it = require('../middleware/just_log_it');

/* GET events listing. */
router.get('/', just_log_it, instEventController.readActualEventsList);
// router.get('/event/:eventID', just_log_it, getOneEvent);

module.exports = router;