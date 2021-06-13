const mysql = require('mysql')

const connMySql = function () {
    console.log('Conexão realizada!!!')
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'portal_noticias'
    }) 
}

module.exports = function () {
    return connMySql
}