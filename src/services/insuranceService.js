const { Insurance } = require('../sequelize/models');

const createInsurance = async (name) => {
  const newInsurance = await Insurance.create({ name });
  return newInsurance;
};

const getInsurance = async () => {
  const insurance = await Insurance.findAll({});
  return insurance;
};

module.exports = { createInsurance, getInsurance };
