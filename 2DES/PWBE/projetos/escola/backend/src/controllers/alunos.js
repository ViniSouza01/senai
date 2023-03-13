const con = require('../dao/connect')

const teste = (req, res) => {
    res.json('Escola respondendo').end()
}

const listar = (req, res) => {
    con.query('SELECT * FROM aluno', (result, erro) => { // 'con' pede para listar a tabela 'aluno'
        if(erro == null){
            res.json(result).end() // caso a comunicacao dê certo, ele mostra
        } else {
            res.json(erro).end() // caso contrario, mostra o erro
        }
    })
}

const cadastrar = (req, res) => {
    let ra = req.query.ra
    let nome = req.query.nome
    let nasc = req.query.nasc
    let turma = req.query.turma
    let string = `INSERT INTO aluno VALUE ('${ra}', '${nome}', '${nasc}', ${turma})` // string = ra, nome, nascimento e id_turma

    con.query(string, (erro, result) => { // o 'con' irá escrever no mysql o que tem na variavel 'string'
        if(erro === null) {
            res.redirect('http://localhost:3000/aluno/listar') // se não houver erros, irá listar os alunos
        } else {
            res.json(erro).end() // caso contrário, irá falar qual o erro
        }
    })
}


module.exports = {
    cadastrar,
    listar,
    teste
}