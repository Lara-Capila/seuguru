/* eslint-disable camelcase */
const { Coverage } = require('../sequelize/models');

// usuário conferir id
const calculate = async (coberturas) => {
  const coveragesIds = coberturas.map(async (cobertura) => {
    const coberturaId = await Coverage.findByPk(cobertura.coverage_id);

    const { capital } = cobertura;
    return {
      name: coberturaId.name,
      capital,
      premio: capital * coberturaId.factor,
    };
  });
  return Promise.all(coveragesIds);
};

const simulator = async (data) => {
  const { coberturas } = data;
  const coverages = await calculate(coberturas);
  const total = coverages.reduce((acc, numero) => acc + numero.premio, 0);

  const newObj = {
    insurance_id: data.insurance_id,
    coverages,
    total,
  };
  return newObj;
};

module.exports = simulator;