/* eslint-disable camelcase */
const { StatusCodes } = require('http-status-codes');
const simulator = require('../services/simuladorService');

const coverageCost = async (req, res) => {
  try {
    const { user_id, insurance_id, coberturas } = req.body;
    const data = { user_id, insurance_id, coberturas };
    const result = await simulator(data);
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

module.exports = coverageCost;