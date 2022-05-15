'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('posts', 'name',{
      type:Sequelize.STRING
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('posts', 'name');
  }
};
