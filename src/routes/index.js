const express = require('express');
const { newInsurance, getAllInsurance } = require('../controllers/insuranceController');
const { newCoverage, getAllCoverages } = require('../controllers/coverageController');
const createUser = require('../controllers/userController');
const simulator = require('../controllers/simuladorController');

const Router = express.Router();

Router.post('/user', createUser);

Router.post('/insurance', newInsurance);
Router.get('/insurances', getAllInsurance);

Router.post('/covarage', newCoverage);
Router.get('/coverages', getAllCoverages);

Router.get('/simulator', simulator);

module.exports = Router;