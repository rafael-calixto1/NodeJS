const Sequelize = require('sequelize');
const sequelize = new Sequelize('cadastroo', 'root', '1234', {
    host: "localhost",
    dialect:  "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao conectar" + erro)
})

//then é uma função especial do javascript que finciona como uma funcao de call back, quando o evento "sequelize.authenticate()" tentar se conectar ao banco de dados, e ocorrer sucesso, a função THEN será chamada no console, em caso de falha, a função .CATCH será chamada
//estudar programação assincrona para entender melhor
