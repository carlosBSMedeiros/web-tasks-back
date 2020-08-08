'use strict';

    module.exports = {
    
      up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('tasks', {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          id_user:{
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false,
            references: { model: 'users', key: 'id'},
            onUpdate:'CASCADE',
            onDelete:'CASCADE',
          },
          title: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          description: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          checks_quantity: {
            type: Sequelize.INTEGER,
            allowNull: true
          },
          checks_finalized:{
            type: Sequelize.INTEGER,
            allowNull: true
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
