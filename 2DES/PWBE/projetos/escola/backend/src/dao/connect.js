const mysql = require('mysql') // importa o mysql

const con = mysql.createConnection({ // con é o link entre o backend e o banco de dados
    user: 'root',
    host: 'localhost',
    database: 'escola',
})

module.exports = con