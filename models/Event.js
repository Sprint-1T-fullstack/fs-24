class Event {
    constructor ({title, descr}){
        this.title = title;
        this.descr = descr;
    }

    get(field){
        return this[field];
    }

    set(field, value){
        return this[field] = value;
    }

    async getEventList(){
        return [];
    }

    async getOneEvent(eventID){
        return {id:eventID};
    }
}

module.exports = Event;