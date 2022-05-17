// Importar biblioteca
const Sequelize = require('sequelize')

//Conectar com banco de dados
const database = new Sequelize('nome_do_banco', "root", "senha_do_banco", {
    host: "localhost",
    dialect: "mysql"
});

// Exportar módulo

module.exports = database