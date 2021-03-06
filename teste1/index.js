const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')



//config
    //Template Ending
        const exphbs = handlebars.create({
            extname: '.hbs'
        })
        app.engine('.hbs', exphbs.engine)
        app.set('view engine', '.hbs')

    //Body PARSER
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    
    
    


    //ROTAS
        app.get('/', (req, res) => {
            res.render('home')
        })
        app.get('/cad', (req, res) => {
            res.render('formulario')
        })
    //essa rota só poderá ser acessada quando alguém fizer uma requsição usando o methodo POST
    app.post('/add', (req, res) => {
        //req.body.conteudo
        res.send("Texto: "+req.body.titulo+" Conteudo: "+req.body.titulo)
    })

app.listen(8081, function() {
    console.log("O servidor está rodando na porta 8081")
});