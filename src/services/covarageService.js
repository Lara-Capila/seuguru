const { Insurance } = require('../sequelize/models');

const createCoverage = async (name, factor) => {
  const newInsurance = await Insurance.create({ name, factor });
  return newInsurance;
};

module.exports = createCoverage;
