'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      // {
      //   firstname: 'GJ',
      //   lastname: 'Haaland',
      //   username: 'GJLandHaa',
      //   email: 'haaland.gj@gmail.com',
      //   password: '12345',
      //   image: 'https://media-exp1.licdn.com/dms/image/C4E03AQF9tSmIqaht5Q/profile-displayphoto-shrink_200_200/0/1651974201533?e=1657756800&v=beta&t=oBIwcyq-XaCD_UpfKJ7DFDTLsXwCwPc61pLMNlRVJyA',
       
      //   createdAt: new Date(),
      //   updatedAt: new Date()

      // },
      // {
      //   firstname: 'Lo',
      //   lastname: 'Phillips',
      //   username: 'BadLomance',
      //   email: 'lo@google.com',
      //   password: '12345',
      //   image: 'https://media-exp1.licdn.com/dms/image/C4E03AQE8RWnn09LwVg/profile-displayphoto-shrink_200_200/0/1539130946092?e=1657756800&v=beta&t=xFSqLXAWHWlYQ8k89hhfUMuXwJWJV4TzXCoGzUXv_R4',
       
      //   createdAt: new Date(),
      //   updatedAt: new Date()

      // },
      {
        firstname: 'Sam',
        lastname: 'PIapoce',
        username: 'SamWise17',
        email: 'sam@woodstockmeats.com',
        password: '12345',
        image: 'https://media-exp1.licdn.com/dms/image/C4E03AQE8RWnn09LwVg/profile-displayphoto-shrink_200_200/0/1539130946092?e=1657756800&v=beta&t=xFSqLXAWHWlYQ8k89hhfUMuXwJWJV4TzXCoGzUXv_R4',
       
        createdAt: new Date(),
        updatedAt: new Date()

      },
    ],
    {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  }
};
