const Coverage = (sequelize, DataTypes) => {
  const coverage = sequelize.define('Coverage', {
    name: DataTypes.STRING,
    factor: DataTypes.DECIMAL(2, 1),
  },
    { timestamps: false });

  return coverage;
};

module.exports = Coverage;