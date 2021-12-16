const express = require('express');
const { newInsurance, getAllInsurance } = require('../controllers/insuranceController');
const { newCoverage, getAllCoverages } = require('../controllers/coverageController');
const createUser = require('../controllers/userController');

const Router = express.Router();

Router.post('/user', createUser);

Router.post('/insurance', newInsurance);
Router.get('/insurances', getAllInsurance);

Router.post('/covarage', newCoverage);
Router.get('/coverages', getAllCoverages);

Router.post('/simulator');

module.exports = Router;