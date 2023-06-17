const EventType = require('../models/EventType');
const {Op, Sequelize} = require('sequelize');

class EventTypeService {
    async readEventTypeList(){
        try {
            return await EventType.findAll({
                attributes: ['id', 'name']
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = EventTypeService;