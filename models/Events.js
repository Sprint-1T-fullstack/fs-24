const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Events = sequelize.define('Events', {
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


module.exports = Events;