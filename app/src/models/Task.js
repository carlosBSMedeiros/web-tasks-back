const {Model, DataTypes} = require('sequelize')

class Task extends Model{
    static init(sequelize){
        super.init({
            title: DataTypes.STRING,
            description: DataTypes.STRING
        }, {
            tableName: 'tasks',
            freezeTableName: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            sequelize
        })
    }
    
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'author' })
    }
}

module.exports = Task;
