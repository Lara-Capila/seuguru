const express = require('express');
const { newInsurance, getAllInsurance } = require('../controllers/insuranceController');
const { newCoverage, getAllCoverages } = require('../controllers/coverageController');
const { createUser, userId } = require('../controllers/userController');
const coverageCost = require('../controllers/simuladorController');

const Router = express.Router();

Router.post('/users', createUser);
Router.get('/users/:id', userId);

Router.post('/insurance', newInsurance);
Router.get('/insurances', getAllInsurance);

Router.post('/covarage', newCoverage);
Router.get('/coverages', getAllCoverages);

Router.get('/simulator', coverageCost);

module.exports = Router;