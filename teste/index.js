const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize');

// Config
    //Template Engine
    const hbs = handlebars.create({
        defaultLayout: 'main'
    })
    app.engine('handlebars',() => hbs)
    app.set('view engine', 'handlebars');

//Conexão com o banco de dados MySQL
    const sequelize = new Sequelize('sequelizeTeste', 'root', '1234', {
        host: "localhost",
        dialect: 'mysql'
    });

//ROTAS
    app.get('/', function(req, res) {
        console.log("rodando")
    })
    app.get('/cad', function(req, res){
        res.render(__dirname +'/views/layouts/formulario.handlebars') //o express renderiza o arquivo que está na pasta 'views'
    })


app.listen(8081, function(){
    console.log("O servidor esta rodando na url localhost:8081")
})
