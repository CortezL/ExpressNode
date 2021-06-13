module.exports = function (app) {
    app.get('/nova-noticia', function (req, res) {
        app.app.controllers.admin.formularioAddNoticia(app, req, res)
    })

    app.post('/nova-noticia/salvar', function (req, res) {
        app.app.controllers.admin.noticiasSalvar(app, req, res)
    })
}