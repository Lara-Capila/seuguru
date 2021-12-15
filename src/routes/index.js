const express = require('express');
const { newInsurance, getAllInsurance } = require('../controllers/insuranceController');
const { newCoverage, getAllCoverages } = require('../controllers/coverageController');

const Router = express.Router();

Router.post('/insurance', newInsurance);

Router.post('/covarage', newCoverage);

Router.get('/insurances', getAllInsurance);

Router.get('/coverages', getAllCoverages);

Router.post('/simulator');

module.exports = Router;