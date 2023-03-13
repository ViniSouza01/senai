// router will direct each routes
// router irá direcionar cada rota

const express = require('express')
const router = express.Router() // serve para criar rotas de forma modularizada
const Alunos = require('../controllers/alunos')

router.get('/', Alunos.teste)
router.get('/aluno/listar', Alunos.listar)
router.get('/aluno/cadastrar', Alunos.cadastrar)

module.exports = router