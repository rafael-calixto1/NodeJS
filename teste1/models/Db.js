//é boa  pratica nomear arquivos model com a primeira letra em UPPERCASE
const Sequelize = require('sequelize')

    //banco de dados MYSQL
    const sequelize = new Sequelize('postapp', 'root', '1234', {
        host: 'localhost',
        dialect: 'mysql'
    })

module.exports = { 
    Sequelize: Sequelize,
    sequelize: sequelize
}