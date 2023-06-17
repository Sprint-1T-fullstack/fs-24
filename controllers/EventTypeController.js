const EventTypeService = require('../services/EventTypeService');
const instEventTypeService = new EventTypeService();

class EventTypeController {
    async readEventTypeList(req, res) {
        try {
            const items = await instEventTypeService.readEventTypeList();
            return res.json(items)
        } catch (error) {
            
        }
    }
}

module.exports = EventTypeController;