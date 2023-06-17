const Events = require('../models/Events');
const {Op, Sequelize} = require('sequelize');

class EventService {
    async readActualEventsList(){
        try {
            return await Events.findAll({
                where: {
                    start_date: {
                        [Op.gte]: Sequelize.fn('NOW')
                    }
                }
            });    
        } catch (error) {
            throw error;
        }
    }
}

module.exports = EventService;