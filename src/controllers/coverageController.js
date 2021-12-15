const { StatusCodes } = require('http-status-codes');
const { createCoverage, getCoverage } = require('../services/coverageService');

const newCoverage = async (req, res) => {
  try {
    const { name, factor, insuranceId } = req.body;
    const data = { name, factor, insuranceId };
    await createCoverage(data);
    res.status(StatusCodes.CREATED).json({ message: 'Cobertura criada com sucesso!' });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

const getAllCoverages = async (req, res) => {
  try {
    const covarages = await getCoverage();
    res.status(StatusCodes.OK).json(covarages);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

module.exports = { newCoverage, getAllCoverages };
