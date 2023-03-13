const mysql = require('mysql')

const con = mysql.createConnection ({
    host: 'localhost',
    database: 'inventario',
    user: 'root'
})

module.exports = con