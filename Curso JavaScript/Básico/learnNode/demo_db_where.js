//Require do MYSQL
var mysql = require('mysql');

//onde será inserido os dados da conexão do SQL
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: 'mydb'
  });

            //UTILIZANDO O WHERE
  /*
  con.connect(function(err) {
      if (err) throw err;
    con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
});
*/

            //UTILIZANDO O WHERE COM LIKE
// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

/*
                --Escapando valores de consulta---
Quando os valores de consulta são variáveis ​​fornecidas pelo usuário, você deve escapar dos valores.
Isso evita injeções de SQL, que é uma técnica comum de invasão da Web para destruir ou fazer uso indevido de seu banco de dados.
O módulo MySQL possui métodos para escapar de valores de consulta:
*/

//Utilizando o mysql.escape para buscar o valor da variável.
// var adr = 'Blue Village 1';
// var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

/*
Você também pode usar a ?como espaço reservado para os valores que deseja escapar.
Neste caso, a variável é enviada como segundo parâmetro no método query():
*/

// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE address = ?';
// con.query(sql, [adr], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });



/*
Se você tiver vários espaços reservados, a matriz conterá vários valores, nessa ordem:
*/


var name = 'Amy';
var adr = 'Mountain 21';
var indice = '10';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ? OR id = ?';
con.query(sql, [name, adr, indice], function (err, result) {
  if (err) throw err;
  console.log(result);
});