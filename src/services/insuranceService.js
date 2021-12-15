const { Insurance } = require('../sequelize/models');

const createInsurance = async (name) => {
  const newInsurance = await Insurance.create({ name });
  return newInsurance;
};

module.exports = createInsurance;
