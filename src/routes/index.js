const express = require('express');
const newInsurance = require('../controllers/insuranceController');
const newCovarage = require('../controllers/covarageController');

const Router = express.Router();

Router.post('/insurance', newInsurance);

Router.post('/covarage', newCovarage);

Router.get('/insurance/:id');

Router.get('/coverage/:id');

Router.post('/simulator');

module.exports = Router;