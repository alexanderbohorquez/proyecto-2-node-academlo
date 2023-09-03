const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const User = sequelize.define('user', {
    // Definimos las columnas aquí
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true // Para asegurarse de que no haya duplicados de correos electrónicos
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATEONLY, // Suponiendo que solo necesitas la fecha de cumpleaños sin la hora
        allowNull: true // Puedes cambiar a false si se requiere la fecha de cumpleaños obligatoriamente
    }
});

module.exports = User;