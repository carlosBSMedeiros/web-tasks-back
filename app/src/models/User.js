const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        }, {
            tableName: 'users',
            freezeTableName: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            sequelize
        })
    }
}

module.exports = User;