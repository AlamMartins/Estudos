//O fs.appendFile()método anexa o conteúdo especificado a um arquivo. Se o arquivo não existir, o arquivo será criado:

var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
