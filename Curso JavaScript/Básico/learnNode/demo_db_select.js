//Require do MYSQL
var mysql = require('mysql');

//onde será inserido os dados da conexão do SQL
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: 'mydb'
  });

  
// SELECIONANDO TODOS OS DADOS
//   con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });



//SELECIONANDO ALGUMAS COLUNAS
//   con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT name, address FROM customers", function (err, result, fields) {
//       if (err) throw err;
//     //   console.log(result);
     
//       //Como todos os registros são object podemos buscar através dos índices.
//       console.log('Nome do 1º objc: '+result[0].name+'- Endereço do 3º objc: '+result[2].address);
//     });
//   });



  //Selecione todos os registros da tabela "clientes" e exiba o objeto de campos :
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT name, address FROM customers", function (err, result, fields) {
      if (err) throw err;
      console.log(fields);
      //console.log(fields[1].name);
    });
  });