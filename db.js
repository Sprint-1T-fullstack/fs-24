const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('schoolyz_events', 'schoolyz_events', 'Sa*geW0D', {
    host: 'schoolyz.beget.tech',
    dialect: 'mysql'
});

var seqStatus, seqError

;(async ()=>{
    try {
        await sequelize.authenticate();
        seqStatus = true;
        console.log('Connection has been established successfully.');
    } catch (error) {
        seqStatus = false;
        seqError = error;
        console.error('Unable to connect to the database:', error);
    } 
})();

module.exports = {sequelize, seqStatus, seqError}