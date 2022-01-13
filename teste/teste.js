const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelizeTeste', 'root', '1234', {
    host: "localhost",
    dialect: 'mysql'
});


//O código já foi executado
    /*const Postagem = sequelize.define('postagens', {
        titulo: {
            type: Sequelize.STRING
        }, 
        conteudo: {
            type: Sequelize.TEXT
        }
    })
    Postagem.sync({force: true})

    const Usuario = sequelize.define('usarios', {
        nome: {
            type: Sequelize.STRING
        }, 
        sobrenome: {
            type: Sequelize.STRING
        },
        idade: {
            type: Sequelize.INTEGER
        }, 
        email: {
            type: Sequelize.STRING
        }
    })
    Usuario.sync({force: true})
*/

    //testa se o servidor está devidamente configurado
sequelize.authenticate().then(function() {
    console.log("conectado com sucesso!")
}).catch(function(erro){  
    console.log("Falha ao se conectar ao servior"+erro)
})
//then é uma função especial do javascript que finciona como uma funcao de call back, quando o evento "sequelize.authenticate()" tentar se conectar ao banco de dados, e ocorrer sucesso, a função THEN será chamada no console, em caso de falha, a função .CATCH será chamada
//estudar programação assincrona para entender melhor