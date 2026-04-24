const { DataTypes } = require('sequelize');
const sequelize = require('../database.js');

const Pessoa = sequelize.define('pessoas', {
    id: {
        primaryKey: true,
        // Falta autoIncrement: true
        type: DataTypes.INTEGER,
        autoIncrement: true
        
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
        // Trocar allowNull:true
        allowNull: true,
    },
}, {
    createdAt: false,
    updatedAt: false
});

module.exports = Pessoa;
