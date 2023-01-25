const conexao = require('./conexao')

const Usuario= conexao.sequelize.define('usuario',{
    login: {
          type: conexao.Sequelize.STRING,
          unique: true,
          allowNull: false
      },
      nome: {
            type: conexao.Sequelize.STRING,
          allowNull: false
      },
     senha: {
      type: conexao.Sequelize.STRING,
      allowNull: false
    },
  })
  
  //Usuario.sync()

  module.exports = Usuario;