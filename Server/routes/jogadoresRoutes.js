// Importar bibliotecas
const Express = require('express');
const router = Express.Router();

// Importar módulos
const JogadoresController = require('../controllers/jogadoresControllers');

// define o home page route
router.get('/', JogadoresController.listarDados);
router.post('/inserir', JogadoresController.inserirDado);
router.put('/alterar', JogadoresController.alterarDado);
router.delete('/deletar', JogadoresController.deletarDado);

module.exports = router;