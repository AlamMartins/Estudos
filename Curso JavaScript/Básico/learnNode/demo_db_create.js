var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456"
  });
  

con.connect(function(err) {
  if (err) throw err;
  console.log("banco de dados Conectado!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database Criada com Sucesso!");
  });
});