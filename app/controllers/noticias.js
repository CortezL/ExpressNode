module.exports.noticia = function (app, req, res) {
    const connection = app.config.dbConnection()
    const noticiasModel = new app.app.models.NoticiasDAO(connection)
    const noticia = req.query

    noticiasModel.getNoticia(noticia.id_noticia, function (error, result) {
        res.render('noticias/noticia', { noticia: result })
    })
}

module.exports.noticias = function (app, req, res) {
    const connection = app.config.dbConnection()
    const noticiasModel = new app.app.models.NoticiasDAO(connection)

    noticiasModel.getNoticias(function (error, result) {
        res.render('noticias/noticias', { noticias: result })
    })
}