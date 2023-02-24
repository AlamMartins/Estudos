//O fs.writeFile()método substitui o arquivo e o conteúdo especificados:

var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Utilizando o writeFile para substituir o arquivo e o conteúdo especificados', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});