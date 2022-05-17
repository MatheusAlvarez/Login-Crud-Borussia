const Sequelize = require('sequelize');
const database = require('../config/dbConnection');

const jogadores = database.define('jogadores', {
    id:{
        Sequelize.INTEGER
    },
    Name:{
        Sequelize.STRING
    },
    Gols:{
        Sequelize.INTEGER
    }
});

module.exports = jogadores;