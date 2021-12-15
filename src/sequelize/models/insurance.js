const Insurance = (sequelize, DataTypes) => {
  const insurance = sequelize.define('Insurance', {
    name: DataTypes.STRING,
  },
    { timestamps: false });

  return insurance;
};

module.exports = Insurance;
