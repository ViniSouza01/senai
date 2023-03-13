const con = require('../dao/connect');

const adicionar = (req, res) => {
    const { nome, matricula, senha, salario } = req.body; // define as variaveis que serão transportadas

    let query = `INSERT INTO corretores VALUE ("default", "${nome}", "${matricula}", "${senha}", ${salario});`
    con.query(query, (err, response) => {
        if(err == null) {
            res.status(201).json('criado com sucesso').end(); // se não houver erro, ele mostra o resultado com sucesso
        } else {
            let {sqlMessage, sqlState} = err;
            sqlMessage = 'Matricula já existe'
            res.status(400).json({ sqlMessage, sqlState }).end(); // caso contrário, ele mostra a mensagem de erro
        }
    });    
}

const listar = (req, res) => {
    let query = 'SELECT * FROM corretores';
    con.query(query, (err, response) => {
        if(err == null) {
            res.status(200).json(response).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const autenticar = function(req, res){
    let {matricula, senha} = req.body;
    let query = `SELECT * FROM corretores WHERE matricula = '${matricula}' AND senha = '${senha}'`;

    con.query(query, function(err, response) {
        if(err == null) {
            if(response.length == 0){
                res.status(401).json({"msg": "usuario ou senha inválidos"}).end();
            } else {

            let corretor = response[0]; // retorna apenas um objeto simples, que será o usuário correspondente
            delete corretor["senha"]; // impede de mostrar a senha ao logar

            res.status(200).json(corretor).end();
        }
        } else {
            res.status(401).json(err).end();
        }
    });
}

module.exports = {
    adicionar,
    listar,
    autenticar
}