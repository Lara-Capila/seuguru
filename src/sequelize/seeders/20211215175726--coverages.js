/* eslint-disable max-lines-per-function */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('coverages',
      [
        {
          id: 1,
          insuranceId: 1,
          name: 'Morte Acidental',
          factor: 0.2,
        },
        {
          id: 2,
          insuranceId: 1,
          name: 'Invalidez Permanente',
          factor: 0.9,
        },
        {
          id: 3,
          insuranceId: 2,
          name: 'Quebra de Vidros',
          factor: 0.2,
        },
        {
          id: 4,
          insuranceId: 2,
          name: 'Vendaval',
          factor: 0.1,
        },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('coverages', null, {});
  },
};
