module.exports.index = function (app, req, res) {
    const connection = app.config.dbConnection()
    const homeModel = new app.app.models.HomeDAO(connection)

    homeModel.getNoticiasHome(function (error, result) {
        console.log(error)
        res.render('home/index', { noticias: result })
    })
}