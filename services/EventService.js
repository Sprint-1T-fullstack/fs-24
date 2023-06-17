const Events = require('../models/Events');
const {Op, Sequelize} = require('sequelize');

class EventService {
    async createEvent(newEventData){
        try {
            const answer = await Events.create(newEventData);
            return answer.id; 
        } catch (error) {
            throw error;
        }
    }

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

    async updateEventByID(eventID, eventData){
        try {
            return await Events.update(eventData,{
                where:{
                    id: eventID
                }
            });
        } catch (error) {
            throw error;
        }
    }

    async deleteEventByID(eventID){
        try {
            return await Events.destroy({
                where: {
                    id: eventID
                }
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = EventService;