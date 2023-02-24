//O fs.writeFile()método substitui o arquivo e o conteúdo especificados, se existirem. Se o arquivo não existir, um novo arquivo, contendo o conteúdo especificado, será criado:

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);