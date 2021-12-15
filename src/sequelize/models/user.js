const User = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      address: DataTypes.STRING,
      number: DataTypes.STRING,
      zipcode: DataTypes.STRING,
    },
    { timestamps: false },
  );

  return user;
};

module.exports = User;
