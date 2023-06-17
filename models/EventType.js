const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const EventType = sequelize.define('EventType',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    def_image: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},{
    tableName: 'event_type',
    timestamps: false
});    

module.exports = EventType;
