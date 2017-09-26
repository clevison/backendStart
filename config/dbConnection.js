var mysql = require('mysql');

var connMySQL = function(){
    console.log("Conexão com BD");
    return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'backend'
  });
}

module.exports = function(){
  console.log("Acessou BD");
  return connMySQL;
}
