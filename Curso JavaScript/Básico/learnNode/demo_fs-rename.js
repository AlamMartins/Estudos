//O fs.rename()método renomeia o arquivo especificado:

var fs = require('fs');

fs.rename('arquivoRenomeado.txt', 'newName.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});