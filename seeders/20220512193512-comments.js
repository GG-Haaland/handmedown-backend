'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments', [
      // {
      //   description: 'Ill give you $150',
      //   userid: 1,
      //   postid: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      {
        description: 'Nice stroller!',
        userid: 3,
        postid: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ],
    {}
    )
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments', null, {})
  }
};
