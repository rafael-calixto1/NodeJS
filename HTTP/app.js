var http = require('http');

http.createServer(function(req, res) {
  res.end("Hello World Wellcome to my website")
}).listen(8081);
//require and response
//para rodar no servidor local devemos reiniciar sair do node com as teclas CTRL + C e retornar para ele
console.log("O servidor esta funcionando");
