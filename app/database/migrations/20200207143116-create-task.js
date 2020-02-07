'use strict';

    module.exports = {
    
      up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('task', {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          user_id:{
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false,
            autoIncrement: true,
          },
          title: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          description: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          created_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
          }
        });
      },
    
  down: (queryInterface, Sequelize) => {
  
      return queryInterface.dropTable('tasks');
    
  }
};
