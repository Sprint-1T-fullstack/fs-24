const EventService = require('../services/EventService');
const instEventService = new EventService();

async function readActualEventsList(req, res){
    const items = await instEventService.readActualEventsList();
    return res.json(items)
}
// async function getAllEvents(req, res){
//     const items = await instance.getEventList();
//     return res.json(items);
// }

// async function getOneEvent(req, res){
//     const item = await instance.getOneEvent(req.query.eventID);
//     return res.json(item);
// }

module.exports = {readActualEventsList};