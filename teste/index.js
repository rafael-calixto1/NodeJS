const express = require("express");
const app = express();
const handlebars = require('expree-handlebars')
const Sequelize = require('sequelize');
// Config
    //Template Engine
        app.Engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //Conexão com o banco de dados MySQL
        const sequelize = new Sequelize('sequelizeTeste', 'root', '1234', {
            host: "localhost",
            dialect: 'mysql'
        });

app.listen(8081, function(){
    console.log("O servidor esta rodando na url localhost:8081")
})