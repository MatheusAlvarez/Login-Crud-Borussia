// Importar as bibliotecas 
const Express = require('express');
const app = Express();

app.use(Express.json())

// Importar módulos
const rotas = require('./routes/jogadoresRoutes')
app.use('/', rotas)

// Variáveis 
const port = 3001;

//Servidor
app.listen(port, function(req, res){
    console.log("Servidor rodando na porta http://localhost:" + port)
})