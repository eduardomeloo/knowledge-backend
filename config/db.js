const config = require('../knexfile.js')
//Instanciando o knex já passando o arquivo de configuração
const knex = require('knex')(config)

//Iniciando as execuções do migrate
knex.migrate.latest([config])

//Exportando a instância que foi criada
module.exports = knex