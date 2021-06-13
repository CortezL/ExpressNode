function NoticiasDAO(connection) {
    this._connection = connection
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query('SELECT * FROM noticia', callback)
}

NoticiasDAO.prototype.getNoticia = function (id_noticia, callback) {
    console.log(id_noticia)
    this._connection.query(`SELECT * FROM noticia WHERE id_noticia = ${id_noticia}`, callback)
}

NoticiasDAO.prototype.postNoticia = function (noticia, callback) {
    console.log(noticia)
    this._connection.query(`INSERT INTO noticia set ?`, noticia, callback)
}

module.exports = function () {
    return NoticiasDAO
}