const { StatusCodes } = require('http-status-codes');
const { newUser, getUserById } = require('../services/userService');

const createUser = async (req, res) => {
  try {
    const { name, age, address, number, zipcode, email, password } = req.body;
    const data = { name, age, address, number, zipcode, email, password };
    const user = await newUser(data);

    res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

const userId = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);

    res.status(StatusCodes.OK).json(user);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

module.exports = { createUser, userId };
