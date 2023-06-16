const Events = require('../models/Events');
// const {sequelize} = require('../db');
const {Op, Sequelize} = require('sequelize');

class EventService {
    async readActualEventsList(){
        return await Events.findAll({
            where: {
                start_date: {
                    [Op.gte]: Sequelize.fn('NOW')
                }
            }
        });
    }
    // async getEventList(){
    //     return await instance.getEventList();
    // }

    // async getOneEvent(eventID){
    //     return await instance.getOneEvent(eventID);
    // }
}

module.exports = EventService;