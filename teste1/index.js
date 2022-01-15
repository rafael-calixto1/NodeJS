const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')


//config
    //Template Ending
    const exphbs = handlebars.create({
        extname: '.hbs'
    })
    app.engine('.hbs', exphbs.engine)
    app.set('view engine', '.hbs')

    //banco de dados MYSQL
    const sequelize = new Sequelize('testsequelizeTeste', 'root', '1234', {
        host: 'localhost',
        dialect: 'mysql'
    })


//ROTAS
    app.get('/', (req, res) => {
        res.render('home')
    })
    app.get('/cad', (req, res) => {
        res.render('formulario')
    })

app.listen(8081, function() {
    console.log("O servidor está rodando na porta 8081")
});