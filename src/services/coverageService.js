const { Coverage } = require('../sequelize/models');

const createCoverage = async ({ name, factor }) => {
  const newCovarage = await Coverage.create({ name, factor });
  return newCovarage;
};

const getCoverage = async () => {
  const covarages = await Coverage.findAll({});
  return covarages;
};

module.exports = { createCoverage, getCoverage };
