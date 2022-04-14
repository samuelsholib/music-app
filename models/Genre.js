const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Genre extends Model { }

Genre.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'genre',
    }
);

module.exports = Genre;