const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

var Events;

try {
    Events = sequelize.define('Events', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        descr: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        start_date: {
            type: DataTypes.DATE,
        },
    },{
        tableName: 'event',
        timestamps: false
    });    
} catch (error) {
    console.log(`Define model Events has error (${error})`)
}


module.exports = Events;