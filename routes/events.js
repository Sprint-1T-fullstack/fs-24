var express = require('express');
var router = express.Router();

const EventController = require('../controllers/EventsController');
const instEventController = new EventController();

const just_log_it = require('../middleware/just_log_it');

router.post('/create', just_log_it, instEventController.createEvent);

router.get('/', just_log_it, instEventController.readActualEventsList);

router.patch('/update/:eventID', just_log_it, instEventController.updateEventByID);

router.delete('/delete/:eventID', just_log_it, instEventController.deleteEventByID)

module.exports = router;