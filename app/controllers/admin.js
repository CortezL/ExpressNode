module.exports.formularioAddNoticia = function (app, req, res) {
    res.render('admin/form_add_noticia')
}

module.exports.noticiasSalvar = function (app, req, res) {
    const connection = app.config.dbConnection()
    const noticiasModel = new app.app.models.NoticiasDAO(connection)
    const noticia = req.body;

    req.assert('ds_titulo', 'Título é Obrigatório.').notEmpty()
    req.assert('ds_resumo', 'Resumo é Obrigatório.').notEmpty()
    req.assert('ds_resumo', 'Deve conter entre 10 e 100 caracteres.').len(10, 100)
    req.assert('ds_autor', 'Autor é Obrigatório.').notEmpty()
    req.assert('dt_acontecimento_noticia', 'Data do fato é Obrigatório.').notEmpty().isDate({ format: 'YYYY-MM-DD' })
    req.assert('ds_noticia', 'Notícia é Obrigatório.').notEmpty()

    const isValid = req.validationErrors()

    if (isValid) {
        console.log(isValid)
        res.render('admin/form_add_noticia', { validacao: isValid, noticia: noticia })
        return;
    }

    noticiasModel.postNoticia(noticia, function (error, result) {
        res.redirect('/noticias')
    })
}