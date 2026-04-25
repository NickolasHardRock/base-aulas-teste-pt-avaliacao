const { DataTypes } = require('sequelize');
const sequelize = require('../database.js');

const Pessoa = sequelize.define('pessoas', {
    id: {
        primaryKey: true,
<<<<<<< HEAD
        type: DataTypes.INTEGER
        //falta adicionar o autoIncremental
=======
        // Falta autoIncrement: true
        type: DataTypes.INTEGER,
        autoIncrement: true
        
>>>>>>> 3c599f6456152b0d7999d152803459cd507cc976
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
<<<<<<< HEAD
        // trocar false por true
        allowNull: false,
=======
        // Trocar allowNull:true
        allowNull: true,
>>>>>>> 3c599f6456152b0d7999d152803459cd507cc976
    },
}, {
    createdAt: false,
    updatedAt: false
});

module.exports = Pessoa;
