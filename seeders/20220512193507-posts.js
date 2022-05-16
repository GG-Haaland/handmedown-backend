'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [
      // {
      //   title:"Stroller",
      //   image: 'https://newellbrands.scene7.com/is/image/NewellRubbermaid/STJourney_Tab_InlineImage_SIngleStroller_V1?fmt=png-alpha',
      //   description: 'this is a test',
      //   price: 1000,
      //   email:"haaland.gj@gmail.com",
      //   userid: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      {
        title:"Clothes",
        image: 'https://www3.pictures.mabelandmoxie.com/mp/ccfv0FgRZpvx.jpg',
        description: 'this is a test',
        price: 15,
        email:"lo@google.com",
        userid: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],
    {}
    )
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {})
  }
};
