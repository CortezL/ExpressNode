function HomeDAO(connection) {
    this._connection = connection
}

HomeDAO.prototype.getNoticiasHome = function (callback) {
    this._connection.query('SELECT *, DATE_FORMAT(dt_acontecimento_noticia, "%d-%m-%Y") as dt_acontecimento_noticia_format FROM noticia ORDER BY dt_acontecimento_noticia DESC LIMIT 5', callback)
}

module.exports = function () {
    return HomeDAO
}