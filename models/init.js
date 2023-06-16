const Events = require('./Events');
const EventType = require('./EventType');

EventType.hasMany(Events,{
    foreignKey: 'event_type_id',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
});
Events.belongsTo(EventType, {
    foreignKey: 'event_type_id'
});

const initModels = async () => {
    await Events.sync({force: false, alter: true});
    await EventType.sync({force: false, alter: true});
    console.log( `Models initialization complite successfuly`);
}

module.exports = { initModels, Events, EventType };