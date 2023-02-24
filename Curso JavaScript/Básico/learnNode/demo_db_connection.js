var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456"
});

con.connect(function(err) {

    if (err) throw err;

    console.log("Banco de Dados Conectado com Sucesso!");
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });

  });