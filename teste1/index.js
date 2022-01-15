const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')


//config
    //Template Ending
    const hbs = handlebars.create({
        defaultLayout: "main"
    })
    app.engine("handlebars", () => hbs)
    app.set("view engine", "handlebars")

    //banco de dados MYSQL
    const sequelize = new Sequelize('testsequelizeTeste', 'root', '1234', {
        host: 'localhost',
        dialect: 'mysql'
    })


//ROTAS
    app.get('/cad', function(req, res) {
        res.render(__dirname +'/views/formulario.handlebars')
    });


app.listen(8081, function() {
    console.log("O servidor está rodando na porta 8081")
});