const EventService = require('../services/EventService');
const instEventService = new EventService();

class EventController {
// Create
    async createEvent(req, res) {
        try {
            const answer = await instEventService.createEvent(req.body);
            return res.json(answer);
        } catch (error) {
            
        }
    }
// Read
    async readActualEventsList(req, res){
        try {
            const items = await instEventService.readActualEventsList();
            return res.json(items);    
        } catch (error) {
            
        }
    }
// Update
    async updateEventByID(req, res) {
        try {
            const answer = await instEventService.updateEventByID(req.params.eventID, req.body);
            return res.json(answer);
        } catch (error) {
            
        }
    }
// Delete
    async deleteEventByID(req, res){
        try {
            const answer = await instEventService.deleteEventByID(req.params.eventID);
            return res.json(answer);
        } catch (error) {
            
        }
    }
}

module.exports = EventController;