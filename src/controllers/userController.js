const { StatusCodes } = require('http-status-codes');
const newUser = require('../services/userService');

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

module.exports = createUser;
