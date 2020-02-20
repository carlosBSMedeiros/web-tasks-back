const { Model, DataTypes } = require('sequelize')

class Check extends Model{
    static init(sequelize){
        super.init({
            content: DataTypes.STRING,
            checked: DataTypes.BOOLEAN,
        }, {
            tableName: 'checks',
            freezeTableName: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            sequelize
        })
    }
    
    static associate(models){
        this.belongsTo(models.Task, { foreignKey: 'id_task', as:'detainer' })
    }
}

module.exports = Check