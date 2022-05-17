// Importar biblioteca
const Sequelize = require('sequelize')

//Importar módulos
const database = require('../config/dbConnection')
const jogadores = require('../models/jogadoresModels')

class JogadoresController{

    // Get -> Read
    static async listarDados(req, res){
        await database.sync()
        let dado = await jogadores.findAll({raw : true})
        res.status(200).json(dado)
    }

    // Get -> Read (com id)
    static async listarDadoUnico(req, res){
        let index = req.params.id
        await database.sync()
        let dado = await jogadores.findByPk(index)
        res.status(200).json(dado)
    }

    // Post -> Create
    static async inserirDado(req, res){
        let novoDado = req.body
        await database.sync()
        await jogadores.create(novoDado)
        res.status(200).send("Jogador Cadastrado")
    }

    // Put -> Update
    static async alterarDado(req, res){
        let index = req.params.id
        let dadoAtualizado = req.body
        await database.sync()
        await jogadores.update(dadoAtualizado, {where: {id: index}})
        res.status(200).send("Jogador Atualizado")
    }

    // Delete -> Delete
    static async deletarDado(req, res){
        let index = req.params.id
        await database.sync()
        await jogadores.destroy({where: {id: index}})
        res.status(200).send("Jogador Deletado")
    }
}

module.exports = JogadoresController;