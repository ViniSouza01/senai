const express = require('express')
const router = express.Router() // router é o mapeamento das rotas com as funcinalidades

const aluno = require('../controllers/aluno')
const professor = require('../controllers/professor')

router.get("/aluno", aluno.listar)
router.post("/aluno", aluno.criar)
router.put("/aluno", aluno.atualizar)
router.delete("/aluno", aluno.deletar)

router.get("/professor", professor.listar)
router.post("/professor", professor.criar)
router.put("/professor", professor.atualizar)
router.delete("/professor", professor.deletar)

module.exports = router
