'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.sequelize.transaction((t) =>{
      return Promise.all([
        queryInterface.addColumn('tasks', 'checks_quantity', { type: Sequelize.INTEGER, allowNull: false}, {transaction: t}),
        queryInterface.addColumn('tasks', 'checks_finalized', { type: Sequelize.INTEGER, allowNull: false}, {transaction: t})
      ])
    })

  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.sequelize.transaction((t) =>{
      return Promise.all([
        queryInterface.removeColumn('tasks', 'checks_quantity', {transaction: t}),
        queryInterface.removeColumn('tasks', 'checks_finalized',  {transaction: t})
      ])
    })

  }
};
