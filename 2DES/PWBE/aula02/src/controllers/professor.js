const criar = (req, res) => {
    res.send('criar').status(200).end()
}

const listar = (req, res) => {
    res.send('listar').status(200).end()
}

const atualizar = (req, res) => {
    res.send('atualizar').status(200).end()
}

const deletar = (req, res) => {
    res.send('deletar').status(200).end()
}

module.exports ={ criar, listar, atualizar, deletar }