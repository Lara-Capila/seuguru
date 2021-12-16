const { User } = require('../sequelize/models');

const newUser = async (data) => {
  const { email } = data;
  const findUser = await User.findOne({ where: { email } });

  if (!findUser) {
    const user = await User.create(data);
    return user;
  }
  throw new Error('Usuário já registrado!');
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id } });

  if (user) {
    return user;
  }
  throw new Error('Usuário não encontrado!');
};

module.exports = { newUser, getUserById };
