//O fs.appendFile()método anexa o conteúdo especificado no final do arquivo especificado:

var fs = require('fs');

fs.appendFile('mynewfile1.txt', '<br><br>  Adicionando mais informação', function (err) {
  if (err) throw err;
  console.log('Atualizado');
});