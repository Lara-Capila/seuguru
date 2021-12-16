/* eslint-disable max-lines-per-function */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [
        {
          id: 1,
          name: 'Lewis Hamilton',
          age: 40,
          address: 'Av. Pres. Jetúlio Vargas',
          number: 77,
          zipcode: '05021002',
          email: 'lewishamilton@gmail.com',
          password: '123456',
        },
        {
          id: 2,
          name: 'Michael Schumacher',
          age: 38,
          address: 'Av. Vilarinho',
          number: 24,
          zipcode: '05021001',
          email: 'MichaelSchumacher@gmail.com',
          password: '123456',
        },
        {
          id: 3,
          name: 'John Doe',
          age: 23,
          address: 'Av. Pres. Juscelino Kubitschek',
          number: 12,
          zipcode: '05021000',
          email: 'johndoe@gmail.com',
          password: '123456',
        },

      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
