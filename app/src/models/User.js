const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt')

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
            hooks: {
                
            },
            hooks: {
                beforeCreate: async(User, options) => {
    
                User.password = await bcrypt.hash(User.password, 10)
                    
                }
            },
            sequelize
        })
    }
}

module.exports = User;
