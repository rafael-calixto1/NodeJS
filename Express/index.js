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

//Para criarmos um parametro, usamos "/:", quando criamos um parametro, necessáriamente precisamos passar um parametro, pode ser criado mais de um paremetro deste modo: "/:nome/:cargo"
//localhost:8081/ola/rafael/desenvolvedor
app.get('/form/:nome/:cargo', function(req, res){
     res.send(req.params)
})

//chamando o nome através do parametro
app.get('/ola/:nome/:cargo/:cor', function(req, res) {
     res.send("<p>Ola " + req.params.nome+"</p>"+
     "<p>Ola " + req.params.cargo+"</p>"+
     "<p>Ola " + req.params.cor+"</p>"
     );
}) //A função .send só pode ser chamada uma vez em cada rota

//a funcao listem deve ser sempre o ultimo elmento
// a  funcao de callback é executada sempre que algum evento acontece
app.listen(8081, function() {
     console.log("Servidor Rodando na URL http://localhost:8081 ")
});
