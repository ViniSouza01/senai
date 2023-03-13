const con = require('../dao/connect');

const listar = function(req, res) {
    let query = 'SELECT * FROM imoveis'; 
    con.query(query, function(err, response) {
        if(err == null) {
            res.status(201).json(response).end();
        } else {
            res.status(401).json(err).end();
        }
    });
}

const buscar = function(req, res) {
    const { info } = req.params;

    let query = `SELECT * FROM imoveis WHERE codigo LIKE '%${info}%' OR endereco LIKE '%${info}'`;

    con.query(query, function(err, response){
        if(err == null) {
            res.status(200).json(response).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const cadastrar = function(req, res) {
    let { corretor_id, codigo, endereco, valor_venda, valor_aluga, id_status} = req.body

    valor_venda = (valor_venda != undefined) ? valor_venda: 0; // se valor_venda != undefined, ele recebe o próprio valor, senão ele é igual a zero
    valor_aluga = (valor_aluga != undefined) ? valor_aluga: 0; // se valor_aluga != undefined, ele recebe o próprio valor, senão ele é igual a zero

    if(valor_venda == 0 && valor_aluga == 0) {
        res.status(400).json({"msg": "Necessario inserir um valor de venda ou aluguel"});
    } else {
        
        let query = `INSERT INTO imoveis VALUES (default, ${corretor_id}, '${codigo}', '${endereco}', '${valor_venda}', '${valor_aluga}', 1)`;

        con.query(query, (err, response) => {
            if(err == null) {
                res.status(201).json(response).end();
            } else {
                res.status(400).json(err).end();
            }
        });
    }
}

const imoveisPorCorretor = (req, res) => {
    const { id } = req.params;

    let query = `SELECT i.codigo, i.endereco, i.valor_venda AS venda, i.valor_aluguel AS aluguel, s.nome
        FROM imoveis i
        INNER JOIN status s
        ON i.status_id = s.id
        WHERE i.corretor_id = ${id}`;

        con.query(query, (err, response) => {
            if(err == null) {
                res.status(200).json(response).end();
            } else {
                res.json(err).json(400).end();
            }
        });
}

/* SELECT: define os campos da tabela que serão mostrados
 * AS: muda o nome do campo para encurtá-lo
 * FROM: fala de qual tabela (princial) será puxada os dados
 * INNER JOIN: liga a tabela principal com uma segunda tabela com os dados interligados
 * ON: mostra a condição (quando o id do status de 'imoveis' for igual ao id de status de 'status')
 * WHERE: difine quais os valores da condição (apenas quando o id do corretor for igual ao id passado pelo usuário)
*/

const alterarStatus = function(req, res) {
    const { codigo, status } = req.params;

    let query = `UPDATE imoveis SET status_id = ${status} WHERE codigo = '${codigo}'`;

    con.query(query, (err, response) => {
        if(err == null) {
            res.json(response).status(200).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}   

module.exports = {
    listar,
    buscar,
    cadastrar,
    alterarStatus,
    imoveisPorCorretor
}