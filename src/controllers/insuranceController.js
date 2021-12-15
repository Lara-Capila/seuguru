const { StatusCodes } = require('http-status-codes');
const { createInsurance, getInsurance } = require('../services/insuranceService');

const newInsurance = async (req, res) => {
  try {
    const { name } = req.body;
    await createInsurance(name);
    res.status(StatusCodes.CREATED).json({ message: 'Seguro criado com sucesso!' });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

const getAllInsurance = async (req, res) => {
  try {
    const insurance = await getInsurance();
    res.status(StatusCodes.OK).json(insurance);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

module.exports = { newInsurance, getAllInsurance };
