const { StatusCodes } = require('http-status-codes');
const createInsurance = require('../services/insuranceService');

const newInsurance = async (req, res) => {
  try {
    const { name } = req.body;
    await createInsurance(name);
    res.status(StatusCodes.CREATED).json({ message: 'Seguro criado com sucesso!' });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

module.exports = newInsurance;
