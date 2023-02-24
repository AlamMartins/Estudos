//Require do MYSQL
var mysql = require('mysql');

//onde será inserido os dados da conexão do SQL
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: 'mydb'
  });
  
  //Criando a tabela a tabela sem chave primária.
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Banco de Dados Conectado com Sucesso!");
//     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Tabela Criada com Sucesso");
//     });
//   });


  //Criando a tabela com já definindo a chave primária
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });


  //Alterando a Tabela para inserir uma chave primária
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table altered");
    });
  });