const Coverage = (sequelize, DataTypes) => {
  const coverage = sequelize.define('Coverage', {
    name: DataTypes.STRING,
    factor: DataTypes.DECIMAL(2, 1),
    insuranceId: DataTypes.INTEGER,
  },
    { timestamps: false, tableName: 'coverage' });

  coverage.associate = (models) => {
    coverage.belongsTo(models.Insurance,
      { foreignKey: 'insuranceId', as: 'insurances' });
  };

  return coverage;
};

module.exports = Coverage;