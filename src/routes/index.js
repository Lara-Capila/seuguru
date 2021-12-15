const express = require('express');
const { newInsurance, getAllInsurance } = require('../controllers/insuranceController');
const newCovarage = require('../controllers/covarageController');

const Router = express.Router();

Router.post('/insurance', newInsurance);

Router.post('/covarage', newCovarage);

Router.get('/insurances', getAllInsurance);

Router.get('/coverages');

Router.post('/simulator');

module.exports = Router;