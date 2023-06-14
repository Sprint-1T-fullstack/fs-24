const Event = require('../models/Event');
const instance = new Event('Title','Descr');

class EventService {
    async getEventList(){
        return await instance.getEventList();
    }

    async getOneEvent(eventID){
        return await instance.getOneEvent(eventID);
    }
}

module.exports = EventService;