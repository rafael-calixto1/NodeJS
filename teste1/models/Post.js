const db = require('./Db')
const Post = db.sequelize.define('postagens',{
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

Post.sync({force: false})
//No Post.js, sobre o Post.sync({force: true}): não é obrigatório retirá-lo do código, o ideal é que seja colocado como Post.sync({force: false}).
//Post.sync({force: true}) recria a tabela(DROP na tabela e CREATE IF NO EXISTS para criar uma nova)
//Post.sync({force: false}) cria tabela se a mesma não existir(CREATE IF NO EXISTS para criar uma nova caso não exista).