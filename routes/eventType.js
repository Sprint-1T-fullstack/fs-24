var express = require('express');
var router = express.Router();

const EventTypeController = require('../controllers/EventTypeController');
const instEventTypeController = new EventTypeController();

const just_log_it = require('../middleware/just_log_it');

const prepareRootAnswer = (req, res)=>{
    return res.json(
        [
            {
                "endpoint": "/",
                "comment": "This answer"
            },
            {
                "endpoint": "/readAll",
                "comment": "Event type list (id, name)"
            }
        ]
    );
}

router.get('/', prepareRootAnswer);

router.get('/readAll', instEventTypeController.readEventTypeList);

// router.get()

module.exports = router;