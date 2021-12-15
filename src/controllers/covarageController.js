const { StatusCodes } = require('http-status-codes');
const { createCovarage, getCovarage } = require('../services/covarageService');

const newCovarage = async (req, res) => {
  try {
    const { name, factor } = req.body;
    await createCovarage(name, factor);
    res.status(StatusCodes.CREATED).json({ message: 'Cobertura criada com sucesso!' });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

const getAllCovarages = async (req, res) => {
  try {
    const covarages = await getCovarage();
    res.status(StatusCodes.OK).json(covarages);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

module.exports = { newCovarage, getAllCovarages };
