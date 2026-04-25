const { DataTypes } = require('sequelize');
const sequelize = require('../database.js');

const Pessoa = sequelize.define('pessoas', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
        //falta adicionar o autoIncremental
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING,
        // trocar false por true
        allowNull: false,
    },
}, {
    createdAt: false,
    updatedAt: false
});

module.exports = Pessoa;
