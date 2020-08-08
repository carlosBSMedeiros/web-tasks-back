const { Model, DataTypes } = require('sequelize')

class Task extends Model{
    static init(sequelize){
        super.init({
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            checks_quantity: DataTypes.INTEGER,
            checks_finalized: DataTypes.INTEGER
        }, {
            tableName: 'tasks',
            freezeTableName: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            sequelize
        })
    }
    
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'id_user', as: 'author' })
    }
}

module.exports = Task;
