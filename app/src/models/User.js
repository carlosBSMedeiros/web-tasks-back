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

function hashPassword(password){
    bcrypt.hash(password, 10, function(err, hash){
        
        if (err) 
        return reject (err)
        
        return resolve (hash)
    });
}


module.exports = User;



/*
const User = sequelize.define("user", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        },
    {
        freezeTableName: true,
        instanceMethods: {
            generateHash(password) {
                return bcrypt.hash(password, bcrypt.genSaltSync(8));
            },
            validPassword(password) {
                return bcrypt.compare(password, this.password);
            }
        },
        sequelize
  }
  );
*/