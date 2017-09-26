module.exports =  function(app){

	app.get('/noticia', function(req,res){

			var connection = app.config.dbConnection();
			connection.query('select * from noticia where id = 2', function(error, result){
				res.render("noticias/noticia", {noticia: result});
			});
		});
};
