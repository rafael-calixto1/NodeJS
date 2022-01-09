const express = require("express");
const app = express();

//rota principal da aplicacao "/", que recebe uma funcao de callback que recebe os parametros de requisição e respostax
app.get("/", function(req, res){
     res.send("Seja Bem vindo ao meu app");
});

//cria um caminho localhost:8081/sobre
app.get("/sobre", function(req, res){
     res.send("Sobre meu Aplicativo");
})

app.get("/blog", function(req, res){
     res.send("em vindo ao meu blog");
})

//a funcao listem deve ser sempre o ultimo elmento
// a  funcao de callback é executada sempre que algum evento acontece
app.listen(8081, function() {
     console.log("Servidor Rodando na URL http://localhost:8081 ")
});
