//O fs.open()método recebe um "flag" como segundo argumento, se o flag for "w" para "escrita", o arquivo especificado é aberto para gravação. Se o arquivo não existir, um arquivo vazio será criado:

var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});