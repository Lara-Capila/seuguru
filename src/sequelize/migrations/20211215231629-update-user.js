module.exports = {
  up: async (queryInterface, Sequelize) => [await queryInterface.addColumn(
    'users',
    'email',
    { type: Sequelize.STRING },
  ),
  await queryInterface.addColumn(
    'users',
    'password',
    { type: Sequelize.STRING },
  )],

  down: async (queryInterface, _Sequelize) => [
    await queryInterface.removeColumn('users', 'email'),
    await queryInterface.removeColumn('users', 'password'),
  ],
};
