//Require do MYSQL
var mysql = require('mysql');

//onde será inserido os dados da conexão do SQL
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: 'mydb'
  });
  
//INSERINDO APENAS UM VALOR
// con.connect(function(err) {

//   if (err) throw err;

//   console.log("Conectado!");
//   var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  
//   con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Os dados foram inseridos com sucesso!");
//   });
  
// });

//INSERINDO MULTIPLOS VALORES

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ?";
  var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

