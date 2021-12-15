const Insurance = (sequelize, DataTypes) => {
  const insurance = sequelize.define('Insurance', {
    name: DataTypes.STRING,
  },
    { timestamps: false });

    insurance.associate = (models) => {
      insurance.hasMany(models.Coverage,
        { foreignKey: 'insuranceId', as: 'coverages' });
    };

  return insurance;
};

module.exports = Insurance;
