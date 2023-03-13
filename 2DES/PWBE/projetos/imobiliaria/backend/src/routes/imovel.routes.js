const express = require('express');
const router = express.Router();

const Imoveis = require('../controllers/imovel.controller');

router.get('/imoveis', Imoveis.listar);
router.get('/imoveis/:info', Imoveis.buscar);
router.post('/imovel', Imoveis.cadastrar);
router.put('/imovel/status/:codigo/:status', Imoveis.alterarStatus);
router.get('/imoveis/corretor/:id', Imoveis.imoveisPorCorretor);

module.exports = router;