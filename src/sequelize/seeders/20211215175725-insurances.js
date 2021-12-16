module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('insurances',
      [
        {
          id: 1,
          name: 'Seguro de Vida',
        },
        {
          id: 2,
          name: 'Seguro Residencial',
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('insurances', null, {});
  },
};