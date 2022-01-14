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

        app.get('/cad', function(req, res) {
            res.send('ROTA de cadastro POSTS')
        })




app.listen(8081, function(){
    console.log("O servidor esta rodando na url localhost:8081")
})