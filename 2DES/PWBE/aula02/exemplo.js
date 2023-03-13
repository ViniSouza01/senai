const express = require('express')
const app = express()
app.use(express.json()) // habilitar respostas via JSON
app.post('/criar', (req, res) => {
    let {id, nome, matricula} = req.body // pega os valores pelo JSON
    console.log(id, nome, matricula)
    res.status(200).end()
})
app.get("/teste", (req, res) => {
    res.send('apenas um teste')
})

app.get('/info/:marca/:modelo', (req, res) => {
    let { marca, modelo } = req.params // pega valores de marca e modelo pela URL
    console.log(marca, modelo);
    res.status(200).send('informações do carro').end()

})
app.get('/listar', (req,res) => { // request and response
    let {nome, matricula} = req.query // pega os valores de nome e matricula pela URL
    console.log(nome, matricula);
    res.status(200).send("LISTANDO").end()
})

app.listen(3000, () =>{ 
    console.log('server running');
})