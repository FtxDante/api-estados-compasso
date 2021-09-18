const Sequelize = require('sequelize');
const instancia = require('../../database/conexao');

const colunas = {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    regiao:{
        type: Sequelize.STRING,
        allowNull: false
    },
    populacao:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    capital:{
        type: Sequelize.STRING,
        allowNull: false
    },
    area:{
        type: Sequelize.DOUBLE,
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'estados',
    timestamps: false
}

module.exports = instancia.define('estados', colunas, opcoes)