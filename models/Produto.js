const conexao = require('./conexao')

const Produto = conexao.sequelize.define('produto',{
    codigo: {
        type: conexao.Sequelize.INTEGER
    },
    nome: {
		type: conexao.Sequelize.STRING
	},
	preco: {
		type: conexao.Sequelize.DECIMAL(6,2)
	},
	tipoDeEvento: {
		type: conexao.Sequelize.STRING
	},
	local:{
		type: conexao.Sequelize.STRING	
	},
	data: {
		type: conexao.Sequelize.DATE
	},
	descricao:{
		type: conexao.Sequelize.TEXT
	}
});

//Produto.sync()  *criar tabela*
module.exports = Produto;